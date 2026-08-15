const MAX_IMAGE_BYTES=4*1024*1024;

module.exports=async function handler(request,response){
  if(request.method!=='POST')return response.status(405).json({error:'Method not allowed'});
  const token=process.env.WHATSAPP_ACCESS_TOKEN;
  const phoneNumberId=process.env.WHATSAPP_PHONE_NUMBER_ID;
  const recipient=(process.env.WHATSAPP_ORDER_RECIPIENT||'971543962660').replace(/\D/g,'');
  const graphVersion=process.env.WHATSAPP_GRAPH_VERSION||'v23.0';
  const templateName=process.env.WHATSAPP_ORDER_TEMPLATE||'';
  const templateLanguage=process.env.WHATSAPP_TEMPLATE_LANGUAGE||'en';
  if(!token||!phoneNumberId||!recipient)return response.status(503).json({error:'WhatsApp delivery is not configured'});

  try{
    const {message,image}=request.body||{};
    const match=typeof image==='string'&&image.match(/^data:(image\/(?:jpeg|png));base64,(.+)$/);
    if(typeof message!=='string'||!message.trim()||message.length>4000||!match)return response.status(400).json({error:'Invalid order payload'});
    const bytes=Buffer.from(match[2],'base64');
    if(!bytes.length||bytes.length>MAX_IMAGE_BYTES)return response.status(413).json({error:'Order image is too large'});

    const mediaForm=new FormData();
    mediaForm.append('messaging_product','whatsapp');
    mediaForm.append('type',match[1]);
    mediaForm.append('file',new Blob([bytes],{type:match[1]}),'pressd-order.jpg');
    const mediaResponse=await fetch(`https://graph.facebook.com/${graphVersion}/${phoneNumberId}/media`,{method:'POST',headers:{Authorization:`Bearer ${token}`},body:mediaForm});
    const media=await mediaResponse.json();
    if(!mediaResponse.ok||!media.id)throw new Error(media.error?.message||'Image upload failed');

    const orderPayload=templateName?{messaging_product:'whatsapp',to:recipient,type:'template',template:{name:templateName,language:{code:templateLanguage},components:[{type:'header',parameters:[{type:'image',image:{id:media.id}}]},{type:'body',parameters:[{type:'text',text:message}]}]}}:{messaging_product:'whatsapp',recipient_type:'individual',to:recipient,type:'image',image:{id:media.id,caption:message}};
    const sendResponse=await fetch(`https://graph.facebook.com/${graphVersion}/${phoneNumberId}/messages`,{method:'POST',headers:{Authorization:`Bearer ${token}`,'Content-Type':'application/json'},body:JSON.stringify(orderPayload)});
    const sent=await sendResponse.json();
    if(!sendResponse.ok)throw new Error(sent.error?.message||'WhatsApp delivery failed');
    return response.status(200).json({ok:true,messageId:sent.messages?.[0]?.id||null});
  }catch(error){
    console.error('WhatsApp order error:',error);
    return response.status(502).json({error:'WhatsApp could not deliver this order'});
  }
}

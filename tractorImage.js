window.addEventListener('load',async ()=>{

    // WDC tractorImage
    const ccode    = 2423;
    const agent    = navigator.userAgent;
    const referrer = document.referrer;
    const locationURIEncoded = encodeURIComponent(document.location.href);
    const docTitle = document.title;
    let tractorImage = document.createElement('img');
    tractorImage.style.cssText = `width:0; height:0; display:none; margin:0; z-index:-1`
    tractorImage.id='WDC_tractor_image';

    //#1
    if(window.BoosterApps.common.customer){
        let wdc_email    = window.BoosterApps.common.customer.email;
        await tractorImageLoader('https://login.wdc.center/?ccode='+ccode+'&email='+wdc_email);
    }
    //#2
    await tractorImageLoader('https://traffic.wdc.center/traffic.php?mkodu='+ccode+'&url='+locationURIEncoded+'&t='+docTitle+'&ref='+referrer+'&agent='+agent)

    // #tractorImageLoader
    let tractorImageLoader = src=>{
        return new Promise((resolve)=>{
            tractorImage.onload = ()=>{
                document.querySelector('#WDC_tractor_image').remove();
                resolve()
            }
        })
    }
})


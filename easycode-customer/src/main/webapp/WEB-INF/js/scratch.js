var Scratch = Scratch || {};
Scratch.INIT_DATA = Scratch.INIT_DATA || {};

window.SWFready = $.Deferred();

function JSeditorReady() {
  try {
    SWFready.resolve();
    return true;
  } catch ( error ) {
    console.error(error.message, "\n", error.stack);
    throw error;
  }
}

var flashvars = {
  extensionDevMode: 'true',
  urlOverrides: {
    sitePrefix: window.location.protocol + '//' + window.location.host + '/',
    siteCdnPrefix: window.location.protocol + '//' + window.location.host + '/',
    assetPrefix: window.location.protocol + '//' + window.location.host + '/',
    assetCdnPrefix: window.location.protocol + '//' + window.location.host + '/',
    projectPrefix: window.location.protocol + '//' + window.location.host + '/',
    projectCdnPrefix: window.location.protocol + '//' + window.location.host + '/',
 /*   internalAPI: "frontend/web/scratch/internalapi/",
    OSS: "http://iscratch.oss-cn-shanghai.aliyuncs.com",
    siteAPI: window.location.protocol + '//' + window.location.host + '/frontend/web/index.php',
    staticFiles: "frontend/web/scratch/scratchr2/static/",
    mp4: "mp4/",*/
  },
  inIE: (navigator.userAgent.indexOf('MSIE') > -1)
};

$.each(flashvars, function(prop, val) {
  if ($.isPlainObject(val)) {
    flashvars[prop] = encodeURIComponent(JSON.stringify(val));
  }
});


var params = {
  allowscriptaccess: 'always',
  allowfullscreen: 'true',
  wmode: 'direct',
  menu: 'false',
};


for (var i in flashvars) {
  if (typeof params.flashvars !== 'undefined') {
    params.flashvars += '&' + i + '=' + flashvars[i];
  } else {
    params.flashvars = i + '=' + flashvars[i];
  }
}
// var swfFile = (swfobject.hasFlashPlayerVersion('11.6.0') ? 'http://iscratch.oss-cn-shanghai.aliyuncs.com/scratch/Scratch.swf' : 'https://iscratch.oss-cn-shanghai.aliyuncs.com/scratch/ScratchFor10.2.swf');
var swfFile = (swfobject.hasFlashPlayerVersion('11.6.0') ? 'scratch/Scratch.swf' : 'ScratchFor10.2.swf');
var swfAtt = {
  data: swfFile,
  width: window.innerWidth,
  height: window.innerHeight,
	style:"visibility: visible;"
};

swfobject.addDomLoadEvent(function() {
  var swf = swfobject.createSWF(swfAtt, params, "scratch");

 handleEmbedStatus({success: true, ref: swf}); 
 }
document.getElementById('scratch').style.visibility = 'visible';
});

var Request = function () {
    this.loaded = 0;
};
addEvents(Request, 'load', 'progress', 'error');

Request.prototype.progress = function (loaded, total, lengthComputable) {
    this.loaded = loaded;
    this.total = total;
    this.lengthComputable = lengthComputable;
    this.dispatchProgress({
        loaded: loaded,
        total: total,
        lengthComputable: lengthComputable
    });
};

Request.prototype.load = function (result) {
    this.result = result;
    this.isDone = true;
    this.dispatchLoad(result);
};

Request.prototype.error = function (error) {
    this.result = error;
    this.isError = true;
    this.isDone = true;
    this.dispatchError(error);
};

var CompositeRequest = function () {
    this.requests = [];
    this.isDone = true;
    this.update = this.update.bind(this);
    this.error = this.error.bind(this);
};
inherits(CompositeRequest, Request);

CompositeRequest.prototype.add = function (request) {
    if (request instanceof CompositeRequest) {
        for (var i = 0; i < request.requests.length; i++) {
            this.add(request.requests[i]);
        }
    } else {
        this.requests.push(request);
        request.addEventListener('progress', this.update);
        request.addEventListener('load', this.update);
        request.addEventListener('error', this.error);
        this.update();
    }
};

CompositeRequest.prototype.update = function () {
    if (this.isError) return;
    var requests = this.requests;
    var i = requests.length;
    var total = 0;
    var loaded = 0;
    var lengthComputable = true;
    var uncomputable = 0;
    var done = 0;
    while (i--) {
        var r = requests[i];
        loaded += r.loaded;
        if (r.isDone) {
            total += r.loaded;
            done += 1;
        } else if (r.lengthComputable) {
            total += r.total;
        } else {
            lengthComputable = false;
            uncomputable += 1;
        }
    }
    if (!lengthComputable && uncomputable !== requests.length) {
        var each = total / (requests.length - uncomputable) * uncomputable;
        i = requests.length;
        total = 0;
        loaded = 0;
        lengthComputable = true;
        while (i--) {
            var r = requests[i];
            if (r.lengthComputable) {
                loaded += r.loaded;
                total += r.total;
            } else {
                total += each;
                if (r.isDone) loaded += each;
            }
        }
    }
    this.progress(loaded, total, lengthComputable);
    this.doneCount = done;
    this.isDone = done === requests.length;
    if (this.isDone && !this.defer) {
        this.load(this.getResult());
    }
};

CompositeRequest.prototype.getResult = function () {
    throw new Error('Users must implement getResult()');
};

var wavFiles = {
    AcousticGuitar_F3: 'instruments/AcousticGuitar_F3_22k.wav',
    AcousticPiano_As3: 'instruments/AcousticPiano(5)_A%233_22k.wav',
    AcousticPiano_C4: 'instruments/AcousticPiano(5)_C4_22k.wav',
    AcousticPiano_G4: 'instruments/AcousticPiano(5)_G4_22k.wav',
    AcousticPiano_F5: 'instruments/AcousticPiano(5)_F5_22k.wav',
    AcousticPiano_C6: 'instruments/AcousticPiano(5)_C6_22k.wav',
    AcousticPiano_Ds6: 'instruments/AcousticPiano(5)_D%236_22k.wav',
    AcousticPiano_D7: 'instruments/AcousticPiano(5)_D7_22k.wav',
    AltoSax_A3: 'instruments/AltoSax_A3_22K.wav',
    AltoSax_C6: 'instruments/AltoSax(3)_C6_22k.wav',
    Bassoon_C3: 'instruments/Bassoon_C3_22k.wav',
    BassTrombone_A2_2: 'instruments/BassTrombone_A2(2)_22k.wav',
    BassTrombone_A2_3: 'instruments/BassTrombone_A2(3)_22k.wav',
    Cello_C2: 'instruments/Cello(3b)_C2_22k.wav',
    Cello_As2: 'instruments/Cello(3)_A%232_22k.wav',
    Choir_F3: 'instruments/Choir(4)_F3_22k.wav',
    Choir_F4: 'instruments/Choir(4)_F4_22k.wav',
    Choir_F5: 'instruments/Choir(4)_F5_22k.wav',
    Clarinet_C4: 'instruments/Clarinet_C4_22k.wav',
    ElectricBass_G1: 'instruments/ElectricBass(2)_G1_22k.wav',
    ElectricGuitar_F3: 'instruments/ElectricGuitar(2)_F3(1)_22k.wav',
    ElectricPiano_C2: 'instruments/ElectricPiano_C2_22k.wav',
    ElectricPiano_C4: 'instruments/ElectricPiano_C4_22k.wav',
    EnglishHorn_D4: 'instruments/EnglishHorn(1)_D4_22k.wav',
    EnglishHorn_F3: 'instruments/EnglishHorn(1)_F3_22k.wav',
    Flute_B5_1: 'instruments/Flute(3)_B5(1)_22k.wav',
    Flute_B5_2: 'instruments/Flute(3)_B5(2)_22k.wav',
    Marimba_C4: 'instruments/Marimba_C4_22k.wav',
    MusicBox_C4: 'instruments/MusicBox_C4_22k.wav',
    Organ_G2: 'instruments/Organ(2)_G2_22k.wav',
    Pizz_A3: 'instruments/Pizz(2)_A3_22k.wav',
    Pizz_E4: 'instruments/Pizz(2)_E4_22k.wav',
    Pizz_G2: 'instruments/Pizz(2)_G2_22k.wav',
    SteelDrum_D5: 'instruments/SteelDrum_D5_22k.wav',
    SynthLead_C4: 'instruments/SynthLead(6)_C4_22k.wav',
    SynthLead_C6: 'instruments/SynthLead(6)_C6_22k.wav',
    SynthPad_A3: 'instruments/SynthPad(2)_A3_22k.wav',
    SynthPad_C6: 'instruments/SynthPad(2)_C6_22k.wav',
    TenorSax_C3: 'instruments/TenorSax(1)_C3_22k.wav',
    Trombone_B3: 'instruments/Trombone_B3_22k.wav',
    Trumpet_E5: 'instruments/Trumpet_E5_22k.wav',
    Vibraphone_C3: 'instruments/Vibraphone_C3_22k.wav',
    Violin_D4: 'instruments/Violin(2)_D4_22K.wav',
    Violin_A4: 'instruments/Violin(3)_A4_22k.wav',
    Violin_E5: 'instruments/Violin(3b)_E5_22k.wav',
    WoodenFlute_C5: 'instruments/WoodenFlute_C5_22k.wav',
    BassDrum: 'drums/BassDrum(1b)_22k.wav',
    Bongo: 'drums/Bongo_22k.wav',
    Cabasa: 'drums/Cabasa(1)_22k.wav',
    Clap: 'drums/Clap(1)_22k.wav',
    Claves: 'drums/Claves(1)_22k.wav',
    Conga: 'drums/Conga(1)_22k.wav',
    Cowbell: 'drums/Cowbell(3)_22k.wav',
    Crash: 'drums/Crash(2)_22k.wav',
    Cuica: 'drums/Cuica(2)_22k.wav',
    GuiroLong: 'drums/GuiroLong(1)_22k.wav',
    GuiroShort: 'drums/GuiroShort(1)_22k.wav',
    HiHatClosed: 'drums/HiHatClosed(1)_22k.wav',
    HiHatOpen: 'drums/HiHatOpen(2)_22k.wav',
    HiHatPedal: 'drums/HiHatPedal(1)_22k.wav',
    Maracas: 'drums/Maracas(1)_22k.wav',
    SideStick: 'drums/SideStick(1)_22k.wav',
    SnareDrum: 'drums/SnareDrum(1)_22k.wav',
    Tambourine: 'drums/Tambourine(3)_22k.wav',
    Tom: 'drums/Tom(1)_22k.wav',
    Triangle: 'drums/Triangle(1)_22k.wav',
    Vibraslap: 'drums/Vibraslap(1)_22k.wav',
    WoodBlock: 'drums/WoodBlock(1)_22k.wav'
};



// helper function
function readBytes(start, length, uInt8Array) {
    var returnval = 0;
    for (var j = 0; j < length; j++) {
        returnval += uInt8Array[start + j] << (8 * j);
    }
    return returnval;
}

function readADPCM(uInt8Array) {

    var blockAlign = readBytes(32, 2, uInt8Array);
    var samplesPerBlock = (blockAlign - 4);
    var sampleRate = readBytes(24, 4, uInt8Array);

    var offset = (readBytes(20, 2, uInt8Array) != 1) ? 38 + readBytes(36, 2, uInt8Array) : 36;
    offset += 8 + readBytes(offset + 4, 4, uInt8Array);

    var soundBytes = readBytes(offset + 4, 4, uInt8Array);
    var nBlocks = soundBytes / blockAlign;
    offset += 8;

    var resultStepChange = [-1, -1, -1, -1, 2, 4, 6, 8, -1, -1, -1, -1, 2, 4, 6, 8];
    var stepSizes = [7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 19, 21, 23, 25, 28, 31, 34, 37, 41, 45, 50, 55, 60, 66, 73, 80, 88, 97, 107, 118, 130, 143, 157, 173, 190, 209, 230, 253, 279, 307, 337, 371, 408, 449, 494, 544, 598, 658, 724, 796, 876, 963, 1060, 1166, 1282, 1411, 1552, 1707, 1878, 2066, 2272, 2499, 2749, 3024, 3327, 3660, 4026, 4428, 4871, 5358, 5894, 6484, 7132, 7845, 8630, 9493, 10442, 11487, 12635, 13899, 15289, 16818, 18500, 20350, 22385, 24623, 27086, 29794, 32767];

    var stepID = 8;
    var step = 16;
    var volume = 0;
    var sdi = 0;
    var in_s;
    var s = 0;
    var byte;
    var nib;
    var diff;

    var length = (samplesPerBlock * 4 + 2) * nBlocks;
    var soundBuf = new ArrayBuffer(length + 32);
    var soundData = new Uint8Array(soundBuf, 32, length);

    for (var b = 0; b < nBlocks; b++) {
        in_s = s;

        volume = readBytes(s + offset, 2, uInt8Array)
        if (volume > 32767) volume = (volume - 65536);
        stepID = Math.max(0, Math.min(readBytes(s + offset + 2, 1, uInt8Array), 88));
        s += 4;

        var sample = Math.round(volume);
        if (sample < 0) sample += 65536; // 2's complement signed

        soundData[sdi++] = sample % 256;
        soundData[sdi++] = Math.floor(sample / 256);

        for (var as = 0; as < samplesPerBlock; as++) {
            byte = uInt8Array[s + offset].toString(2);
            while (byte.length < 8) {
                byte = "0" + byte;
            }

            for (var nibble = 0; nibble < 2; nibble++) {
                nib = parseInt(byte.substr(nibble * 4, 4), 2);
                nib &= 15;
                step = stepSizes[stepID];
                diff = step >> 3;
                if (nib & 1) diff += step >> 2;
                if (nib & 2) diff += step >> 1;
                if (nib & 4) diff += step;
                if (nib & 8) diff = 0 - diff;
                volume = Math.max(Math.min(32767, volume + diff), -32768)
                var sample = Math.round(volume);
                if (sample < 0) sample += 65536; // 2's complement signed
                soundData[sdi++] = sample % 256;
                soundData[sdi++] = Math.floor(sample / 256);
                stepID = Math.max(0, Math.min(stepID + resultStepChange[nib], 88));
            }
            s += 1;
        }
        s = in_s + blockAlign;
    }

    return encodeAudio16bit(soundData, sampleRate, soundBuf);
}

function encodeAudio16bit(soundData, sampleRate, soundBuf) {

    // 16-bit mono WAVE header template
    var header = "RIFF<##>WAVEfmt \x10\x00\x00\x00\x01\x00\x01\x00<##><##>\x02\x00\x10\x00data<##>";

    // Helper to insert a 32-bit little endian int.
    function insertLong(value) {
        var bytes = "";
        for (var i = 0; i < 4; ++i) {
            bytes += String.fromCharCode(value % 256);
            value = Math.floor(value / 256);
        }
        header = header.replace('<##>', bytes);
    }

    var n = soundData.length / 2; // as buffer
    insertLong(36 + n * 2); // ChunkSize
    insertLong(sampleRate); // SampleRate
    insertLong(sampleRate * 2); // ByteRate
    insertLong(n * 2); // Subchunk2Size

    // Output sound data
    var bytes = new Uint8Array(soundBuf, 0, 40); // 32
    for (var i = 0; i < header.length; i++) {
        bytes[i] = header.charCodeAt(i);
    }
    //console.log(new Uint8Array(soundBuf));
    return soundBuf.slice(0);
}


var IO = {};

IO.PROJECT_URL = 'http://projects.scratch.mit.edu/internalapi/project/';
IO.ASSET_URL = 'http://cdn.assets.scratch.mit.edu/internalapi/asset/';
IO.NOS_URL = '//steam.nosdn.127.net/';
IO.SOUNDBANK_URL = 'https://cdn.rawgit.com/LLK/scratch-flash/v429/src/soundbank/';
IO.totalAssets = 0;
IO.loadedAssets = 0;
//@fix fonts
IO.FONTS = {
    '': 'Helvetica',
    Donegal: 'Donegal One',
    Gloria: 'Gloria Hallelujah',
    Marker: 'Permanent Marker',
    Mystery: 'Mystery Quest',
    Scratch: 'Scratch'
};
//@fix line-height
IO.LINE_HEIGHTS = {
    'Helvetica': 1.13,
    'Donegal One': 1.25,
    'Gloria Hallelujah': 1.97,
    'Permanent Marker': 1.43,
    'Mystery Quest': 1.37,
    'Scratch': 0.95
};

IO.init = function (request) {
    IO.projectRequest = request;
    IO.zip = null;
};

IO.config = function (sitePrefix, assetPrefix, soundBankUrl) {
    IO.PROJECT_URL = sitePrefix;
    IO.ASSET_URL = assetPrefix;
    IO.SOUNDBANK_URL = soundBankUrl;
};

IO.parseJSONish = function (json) {
    if (!/^\s*\{/.test(json)) throw new SyntaxError('Bad JSON');
    try {
        return JSON.parse(json);
    } catch (e) {
    }
    if (/[^,:{}\[\]0-9\.\-+EINaefilnr-uy \n\r\t]/.test(json.replace(/"(\\.|[^"\\])*"/g, ''))) {
        throw new SyntaxError('Bad JSON');
    }
    return (1, eval)('(' + json + ')');
};


IO.load = function (url, callback, self, type) {
    var request = new Request;
    var xhr = new XMLHttpRequest;
    xhr.open('GET', url, true);
    xhr.onprogress = function (e) {
        request.progress(e.loaded, e.total, e.lengthComputable);
    };
    xhr.onload = function () {
        if (xhr.status === 200) {
            request.load(xhr.response);
        } else {
            request.error(new Error('HTTP ' + xhr.status + ': ' + xhr.statusText));
        }
    };
    xhr.onerror = function () {
        if(!xhr.err) {
            xhr.err = 1;
            url = url + '?t=' + new Date().getTime();
            xhr.open('GET', url, true);
            setTimeout(xhr.send.bind(xhr));
        }else {
            request.error(new Error('XHR Error'));
        }
    };
    xhr.responseType = type || '';
    setTimeout(xhr.send.bind(xhr));

    if (callback) request.onLoad(callback.bind(self));
    return request;
};

IO.loadImage = function (url, callback, self) {
    var request = new Request;
    var image = new Image;
    image.crossOrigin = 'anonymous';
    image.src = url;
    image.onload = function () {
        request.load(image);
    };
    image.onerror = function () {
        if(!request.err) {
            request.err = 1;
            url = url + '?t=' + new Date().getTime();
            image.src = url;
        }else {
            request.error(new Error('Failed to load image: ' + url));
        }
    };
    if (callback) request.onLoad(callback.bind(self));
    return request;
};

// IO.loadScratchr2Project = function (url, isSplit, callback, self) {
//     var request = new CompositeRequest;
//     IO.init(request);
//
//     request.defer = true;
//     //var url = IO.PROJECT_URL;
//     request.add(IO.load(url).onLoad(function (contents) {
//         try {
//             var json = IO.parseJSONish(contents);
//         } catch (e) {
//             request.add(IO.load(url, null, null, 'arraybuffer').onLoad(function (ab) {
//                 var request2 = new Request;
//                 request.add(request2);
//                 request.add(IO.loadSB2Project(ab, isSplit, function (stage) {
//                     request.getResult = function () {
//                         return stage;
//                     };
//                     request2.load();
//                 }));
//                 request.defer = false;
//             }));
//             return;
//         }
//         try {
//             IO.loadProject(json);
//             if (callback) request.onLoad(callback.bind(self));
//             if (request.isDone) {
//                 request.load(new Stage().fromJSON(json));
//             } else {
//                 request.defer = false;
//                 request.getResult = function () {
//                     return new Stage().fromJSON(json);
//                 };
//             }
//         } catch (e) {
//             request.error(e);
//         }
//     }));
//
//     return request;
// };

IO.loadScratchr2Project = function (url, isSplit, callback, self) {
    var request = new CompositeRequest;
    IO.init(request);

    request.defer = true;
    //var url = IO.PROJECT_URL;
    request.add(IO.load(url, null, null, 'arraybuffer').onLoad(function (ab) {
        var request2 = new Request;
        request.add(request2);
        request.add(IO.loadSB2Project(ab, isSplit, function (stage) {
            request.getResult = function () {
                return stage;
            };
            request2.load();
        }));
        request.defer = false;
    }));

    return request;
};

IO.loadScratchr2ProjectTitle = function (id, callback, self) {
    var request = new CompositeRequest;

    request.defer = true;
    request.add(P.IO.load('http://crossorigin.me/http://scratch.mit.edu/projects/' + id + '/').onLoad(function (data) {
        var m = /<title>\s*(.+?)(\s+on\s+Scratch)?\s*<\/title>/.exec(data);
        if (callback) request.onLoad(callback.bind(self));
        if (m) {
            var d = document.createElement('div');
            d.innerHTML = m[1];
            request.load(d.innerText);
        } else {
            request.error(new Error('No title'));
        }
    }));

    return request;
};

IO.loadJSONProject = function (json, callback, self) {
    var request = new CompositeRequest;
    IO.init(request);

    try {
        IO.loadProject(json);
        if (callback) request.onLoad(callback.bind(self));
        if (request.isDone) {
            request.load(new Stage().fromJSON(json));
        } else {
            request.defer = false;
            request.getResult = function () {
                return new Stage().fromJSON(json);
            };
        }
    } catch (e) {
        request.error(e);
    }

    return request;
};

IO.loadSB2Project = function (ab, isSplit, callback, self) {
    var request = new CompositeRequest;
    IO.init(request);

    try {
        IO.zip = new JSZip(ab);
        var json = IO.parseJSONish(IO.zip.file('project.json').asText());
        if(isSplit) {
            IO.zip = null;
        }
        IO.collectProject(json);
        IO.loadProject(json);
        if (callback) request.onLoad(callback.bind(self));
        if (request.isDone) {
            request.load(new Stage().fromJSON(json));
        } else {
            request.defer = false;
            request.getResult = function () {
                request.defer = true;
                return new Stage().fromJSON(json);
            };

        }
    } catch (e) {
        request.error(e);
    }

    return request;
};

IO.loadSB2File = function (f, callback, self) {
    var cr = new CompositeRequest;
    cr.defer = true;
    var request = new Request;
    cr.add(request);
    var reader = new FileReader;
    reader.onloadend = function () {
        cr.defer = true;
        cr.add(IO.loadSB2Project(reader.result, function (result) {
            cr.defer = false;
            cr.getResult = function () {
                return result;
            };
            cr.update();
        }));
        request.load();
    };
    reader.onprogress = function (e) {
        request.progress(e.loaded, e.total, e.lengthComputable);
    };
    reader.readAsArrayBuffer(f);
    if (callback) cr.onLoad(callback.bind(self));
    return cr;
};

IO.loadProject = function (data) {
    IO.loadWavs();
    IO.loadArray(data.children, IO.loadObject);
    IO.loadBase(data);
};

IO.wavBuffers = Object.create(null);
IO.loadWavs = function () {
    if (!audioContext) return;

    for (var name in wavFiles) {
        if (IO.wavBuffers[name]) {
            if (IO.wavBuffers[name] instanceof Request) {
                IO.projectRequest.add(IO.wavBuffers[name]);
            }
        } else {
            IO.projectRequest.add(IO.wavBuffers[name] = IO.loadWavBuffer(name));
        }
    }
};

IO.loadWavBuffer = function (name) {
    var request = new Request;
    IO.load(IO.SOUNDBANK_URL + wavFiles[name], function (ab) {
        IO.decodeAudio(ab, function (buffer) {
            IO.wavBuffers[name] = buffer;
            request.load();
        });
    }, null, 'arraybuffer').onError(function (err) {
        request.error(err);
    });
    return request;
};

//Mittagskogel: I don't fully understand what is happening here,
//so I have simply added the code by "htmlgames" (PF)
// PF - New audio stuff ***
IO.ADPCM_STEPS = [7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 19, 21, 23, 25, 28, 31, 34, 37, 41, 45, 50, 55, 60, 66, 73, 80, 88, 97, 107, 118, 130, 143, 157, 173, 190, 209, 230, 253, 279, 307, 337, 371, 408, 449, 494, 544, 598, 658, 724, 796, 876, 963, 1060, 1166, 1282, 1411, 1552, 1707, 1878, 2066, 2272, 2499, 2749, 3024, 3327, 3660, 4026, 4428, 4871, 5358, 5894, 6484, 7132, 7845, 8630, 9493, 10442, 11487, 12635, 13899, 15289, 16818, 18500, 20350, 22385, 24623, 27086, 29794, 32767];
IO.ADPCM_INDEX = [-1, -1, -1, -1, 2, 4, 6, 8, -1, -1, -1, -1, 2, 4, 6, 8];

IO.decodeADPCMAudio = function(ab, cb) {
    var dv = new DataView(ab);
    if (dv.getUint32(0) !== 0x52494646 || dv.getUint32(8) !== 0x57415645) {
        return cb(new Error('Unrecognized audio format'));
    }

    var blocks = {};
    var i = 12, l = dv.byteLength - 8;
    while (i < l) {
        blocks[String.fromCharCode(
            dv.getUint8(i),
            dv.getUint8(i + 1),
            dv.getUint8(i + 2),
            dv.getUint8(i + 3))] = i;
        i += 8 + dv.getUint32(i + 4, true);
    }

    var format        = dv.getUint16(20, true);
    var channels      = dv.getUint16(22, true);
    var sampleRate    = dv.getUint32(24, true);
    var byteRate      = dv.getUint32(28, true);
    var blockAlign    = dv.getUint16(32, true);
    var bitsPerSample = dv.getUint16(34, true);

    if (format === 17) {
        var samplesPerBlock = dv.getUint16(38, true);
        var blockSize = ((samplesPerBlock - 1) / 2) + 4;

        var frameCount = dv.getUint32(blocks.fact + 8, true);

        var buffer = audioContext.createBuffer(1, frameCount, sampleRate);
        var channel = buffer.getChannelData(0);

        var sample, index = 0;
        var step, code, delta;
        var lastByte = -1;

        var offset = blocks.data + 8;
        i = offset;
        var j = 0;
        while (true) {
            if ((((i - offset) % blockSize) == 0) && (lastByte < 0)) {
                if (i >= dv.byteLength) break;
                sample = dv.getInt16(i, true); i += 2;
                index = dv.getUint8(i); i += 1;
                i++;
                if (index > 88) index = 88;
                channel[j++] = sample / 32767;
            } else {
                if (lastByte < 0) {
                    if (i >= dv.byteLength) break;
                    lastByte = dv.getUint8(i); i += 1;
                    code = lastByte & 0xf;
                } else {
                    code = (lastByte >> 4) & 0xf;
                    lastByte = -1;
                }
                step = IO.ADPCM_STEPS[index];
                delta = 0;
                if (code & 4) delta += step;
                if (code & 2) delta += step >> 1;
                if (code & 1) delta += step >> 2;
                delta += step >> 3;
                index += IO.ADPCM_INDEX[code];
                if (index > 88) index = 88;
                if (index < 0) index = 0;
                sample += (code & 8) ? -delta : delta;
                if (sample > 32767) sample = 32767;
                if (sample < -32768) sample = -32768;
                channel[j++] = sample / 32768;
            }
        }
        return cb(null, buffer);
    }
    cb(new Error('Unrecognized WAV format ' + format));
};

IO.decodeAudio = function (ab, cb) {
    if (audioContext) {
        // PF check buffer type is PCM or ADPCM 1st? (ie headers)
        var abc = false;
        var uInt8Array = new Uint8Array(ab);
        if (readBytes(20, 2, uInt8Array) == 17) { // 11 hex (needs to be 1)
            //console.warn('Processing audio conversion');
            // PF it's most likely ADPCM - lets hack the header and correct the buffer
            abc = readADPCM(uInt8Array);
        }
        if (abc) { // new
            IO.decodeADPCMAudio(ab, function (err,buffer) {
                cb(buffer);
            }, function (err) {
                //console.warn('Failed to convert audio');
                cb(null);
            });
        } else { // old
            audioContext.decodeAudioData(ab, function (buffer) {
                cb(buffer);
            }, function (err) {
                //console.warn('Failed to load audio');
                cb(null);
            });
        }
    } else {
        setTimeout(cb);
    }
};


IO.loadBase = function (data) {
    data.scripts = data.scripts || [];
    data.costumes = IO.loadArray(data.costumes, IO.loadCostume);
    data.sounds = IO.loadArray(data.sounds, IO.loadSound);
    data.variables = data.variables || [];
    data.lists = data.lists || [];
};

IO.collectProject = function (data) {
    IO.totalAssets = IO.collectArray(data.children, IO.collectObject) + IO.collectBase(data);
};

IO.collectObject = function (data) {
    if (!data.cmd && !data.listName) {
        return IO.collectBase(data);
    } else {
        return 0;
    }
};
IO.collectBase = function (data) {
    var cnt = 0;
    cnt += IO.collectArray(data.costumes, IO.collectCostume);
    cnt += IO.collectArray(data.sounds, IO.collectSound);
    return cnt;
};
IO.collectArray = function (data, process) {
    if (!data) return 0;
    var cnt = 0;
    for (var i = 0; i < data.length; i++) {
        cnt += process(data[i]);
    }
    return cnt;
};
IO.collectCostume = function (data) {
    var cnt = 1;
    if (data.textLayerMD5) {
        cnt++;
    }
    return cnt;
};

IO.collectSound = function (data) {
    return 1;
};

IO.loadArray = function (data, process) {
    if (!data) return [];
    for (var i = 0; i < data.length; i++) {
        process(data[i]);
    }
    return data;
};

IO.loadObject = function (data) {
    if (!data.cmd && !data.listName) {
        IO.loadBase(data);
    }
};

IO.loadCostume = function (data) {
    IO.loadMD5(data.baseLayerMD5, data.baseLayerID, data.nosKey, function (asset) {
        data.$image = asset;
        IO.loadedAssets += 1;
        IO.updateProgress();
    });
    if (data.textLayerMD5) {
        IO.loadMD5(data.textLayerMD5, data.textLayerID, data.nosKey, function (asset) {
            data.$text = asset;
            IO.loadedAssets += 1;
            IO.updateProgress();
        });
    }
};

IO.loadSound = function (data) {
    IO.loadMD5(data.md5, data.soundID, data.nosKey, function (asset) {
        data.$buffer = asset;
        IO.loadedAssets += 1;
        IO.updateProgress();
    }, true);
};

IO.fixSVG = function (svg, element) {
    if (element.nodeType !== 1) return element;
    if (element.nodeName.slice(0, 4).toLowerCase() === 'svg:') {
        var newElement = document.createElementNS('http://www.w3.org/2000/svg', element.localName);
        var attributes = element.attributes;
        var newAttributes = newElement.attributes;
        for (var i = attributes.length; i--;) {
            newAttributes.setNamedItemNS(attributes[i].cloneNode());
        }
        while (element.firstChild) {
            newElement.appendChild(element.firstChild);
        }
        element = newElement;
    }
    if (element.nodeName === 'text') {

        var font = element.getAttribute('font-family') || '';

        font = IO.FONTS[font] || font;
        if (font) {
            element.setAttribute('font-family', font);
            if (font === 'Helvetica') element.style.fontWeight = 'bold';
        }
        var size = +element.getAttribute('font-size');
        if (!size) {
            element.setAttribute('font-size', size = 18);
        }
        var lineHeight = IO.LINE_HEIGHTS[font] || 2;
        //TODO: Find out what actual values have to be put here.
        element.setAttribute('x', '0');
        element.setAttribute('y', String(size * lineHeight));

        element.setAttribute('xml:space','preserve'); //保留空格

        var lines = element.textContent.split('\n');
        if (lines.length > 1) {
            element.textContent = lines[0];
            for (var i = 1, l = lines.length; i < l; i++) {
                var tspan = document.createElementNS(null, 'tspan');
                tspan.textContent = lines[i];
                tspan.setAttribute('x', '0');
                tspan.setAttribute('y', String(size * (i + 1) * lineHeight));//y + size * i * lineHeight);
                tspan.setAttribute('id', 'ID' + Math.random());
                element.appendChild(tspan);
            }
        }

        // svg.style.cssText = '';
        // console.log(element.textContent, 'data:image/svg+xml;base64,' + btoa(svg.outerHTML));
    } else if ((element.hasAttribute('x') || element.hasAttribute('y')) && element.hasAttribute('transform')) {
        element.setAttribute('x', 0);
        element.setAttribute('y', 0);
    }

    if (element.nodeName === 'linearGradient' || element.nodeName === 'radialGradient') {

        element.setAttribute('id', element.getAttribute('id') + svg.getAttribute('id'));

        if (element.getAttribute('gradientUnits')) {
            element.setAttribute('gradientUnits', 'objectBoundingBox');
            //I really don't know what kind of algorithm scratch is following here, so this is just guesswork.
            var x1 = Number(element.getAttribute('x1'));
            var x2 = Number(element.getAttribute('x2'));
            var y1 = Number(element.getAttribute('y1'));
            var y2 = Number(element.getAttribute('y2'));

            if (x1 === x2) {
                x1 = 0;
                x2 = 0;
            }
            else if (x1 < x2) {
                x1 = 0;
                x2 = 1;
            }
            else {
                x1 = 1;
                x2 = 0;
            }
            if (y1 === y2) {
                y1 = 0;
                y2 = 0;
            }
            else if (y1 < y2) {
                y1 = 0;
                y2 = 1;
            }
            else {
                y1 = 1;
                y2 = 0;
            }

            element.setAttribute('x1', x1);
            element.setAttribute('x2', x2);
            element.setAttribute('y1', y1);
            element.setAttribute('y2', y2);
        }
    }

    if (element.getAttribute('fill') ? element.getAttribute('fill').indexOf("url") > -1 : false) {
        element.setAttribute('fill', element.getAttribute('fill').replace(/.$/, svg.getAttribute('id')));
    }
    if (element.getAttribute('stroke') ? element.getAttribute('stroke').indexOf("url") > -1 : false) {
        element.setAttribute('stroke', element.getAttribute('stroke').replace(/.$/, svg.getAttribute('id')));
    }

    [].forEach.call(element.childNodes, function (child) {
        var newChild = IO.fixSVG(svg, child);
        if (newChild !== child) {
            element.replaceChild(newChild, child);
        }
    });
    return element;
};

IO.loadMD5 = function (md5, id, nosKey, callback, isAudio) {
    if (IO.zip) {
        var f = isAudio ? IO.zip.file(id + '.wav') : IO.zip.file(id + '.gif') || IO.zip.file(id + '.png') || IO.zip.file(id + '.jpg') || IO.zip.file(id + '.svg');
        md5 = f.name;
    }
    var ext = md5.split('.').pop();
    if (ext === 'svg') {
        var cb = function (source) {
            var div = document.createElement('div');
            div.innerHTML = source;
            var svg = div.getElementsByTagName('svg')[0];
            div.innerHTML = source.replace(/(<\/?)svg:/g, '$1');
            var svg = div.firstElementChild;
            //var svg = new DOMParser().parseFromString(source, 'image/svg+xml').firstElementChild;
            svg.id = 'svg' + Math.random();
            if (svg.getAttribute('width') === '0' || svg.getAttribute('height') === '0') {
                svg = document.createElementNS('http://www.w3.org/2000/svg', svg.localName);
            }
            else svg = IO.fixSVG(svg, svg);

            //svg.style.visibility = 'hidden';
            //svg.style.position = 'absolute';
            //svg.style.left = '-10000px';
            //svg.style.top = '-10000px';

            //SVG is downright ignoring everything I try to do, so I simply give up. I've tried to fix this and am extremely frustrated because not even the most simple things will work. Either I am completely stupid, or the way svg behaves is linked to a random number generator controlled by Donald Trump. Either way. I GIVE UP. Whatever works, works, and the rest; I don't care.

            document.body.appendChild(svg);
            var bbox = svg.getBBox();
            // var viewBox = svg.viewBox.baseVal;
            // var width = svg.width.baseVal;
            // var height = svg.height.baseVal;
            //console.log(md5 + ':' + bbox.width + ',' +bbox.height);
            // if (viewBox && (viewBox.x || viewBox.y)) {
            //   //svg.width.baseVal.value = viewBox.width - viewBox.x;
            //   //svg.height.baseVal.value = viewBox.height - viewBox.y;
            //   //viewBox.x = 0;
            //   //viewBox.y = 0;
            //   //viewBox.width = 0;
            //   //viewBox.height = 0;
            //   viewBox.width  = svg.width.baseVal.value = Math.ceil(bbox.x + bbox.width + 1);
            //   viewBox.height = svg.height.baseVal.value = Math.ceil(bbox.y + bbox.height + 1);
            //   viewBox.x = 0;
            //   viewBox.y = 0;
            // }
            // if( (width && width.value == 0) || (height && height.value == 0) ) {
            //     console.log(width);
            //     svg.setAttribute('width', bbox.width);
            //     svg.setAttribute('height', bbox.height);
            //     svg.setAttribute('viewBox', bbox.x + ' ' + bbox.y + ' '+ bbox.width + ' '+ bbox.height );
            // }
            //console.log(width);


            //@fix svg incorrect measurements
            svg.setAttribute('width', Math.ceil(bbox.x + bbox.width + 1));
            svg.setAttribute('height', Math.ceil(bbox.y + bbox.height + 1));
            svg.setAttribute('viewBox', 0 + ' ' + 0 + ' ' + Math.ceil(bbox.x + bbox.width + 1) + ' ' + Math.ceil(bbox.y + bbox.height + 1));

            //IO.fixSVG(svg, svg);
            //while (div.firstChild) div.removeChild(div.lastChild);
            //div.appendChild(svg);
            //svg.style.visibility = 'visible';
            //svg.style.cssText = '';

            svg.style['image-rendering'] = '-moz-crisp-edges';
            svg.style['image-rendering'] = 'pixelated';

            //svg.style.overflow = 'visible';
            //svg.style.width = '100%';

            var request = new Request;
            var image = new Image;

            var newSource = (new XMLSerializer()).serializeToString(svg)
            //svg.id = 'svg' + Math.random();
            // console.log(md5, 'data:image/svg+xml;base64,' + btoa(source), 'data:image/svg+xml;base64,' + btoa(newSource));
            image.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(newSource)));

            svg.style.display = 'none';

            image.onload = function () {
                if (callback) callback(image);
                request.load();
            };
            image.onerror = function (e) {
                //console.error(e, image);
                //console.log(image.src);
                console.error(md5, image.src);
                request.error(new Error());
            };
            IO.projectRequest.add(request);
        };
        if (IO.zip) {
            cb(f.asText());
        } else {
            if(nosKey) {
                IO.projectRequest.add(IO.load(IO.NOS_URL + nosKey, cb));
            } else {
                IO.projectRequest.add(IO.load(IO.ASSET_URL + md5, cb));
            }
        }
    } else if (ext === 'wav') {
        var request = new Request;
        var cb = function (ab) {
            IO.decodeAudio(ab, function (buffer) {
                callback(buffer);
                request.load(buffer);
            });
        }
        IO.projectRequest.add(request);
        if (IO.zip) {
            var audio = new Audio;
            var ab = f.asArrayBuffer();
            cb(ab);
        } else {
            if(nosKey) {
                IO.projectRequest.add(IO.load(IO.NOS_URL + nosKey, cb, null, 'arraybuffer'));
            } else {
                IO.projectRequest.add(IO.load(IO.ASSET_URL + md5, cb, null, 'arraybuffer'));
            }
        }
    } else {
        if (IO.zip) {
            var request = new Request;
            var image = new Image;
            image.onload = function () {
                if (callback) callback(image);
                request.load();
            };
            image.src = 'data:image/' + (ext === 'jpg' ? 'jpeg' : ext) + ';base64,' + btoa(f.asBinary());
            IO.projectRequest.add(request);
        } else {
            if(nosKey) {
                IO.projectRequest.add(
                    IO.loadImage(IO.NOS_URL + nosKey, function (result) {
                        callback(result);
                    }));
            } else {
                IO.projectRequest.add(
                    IO.loadImage(IO.ASSET_URL + md5, function (result) {
                        callback(result);
                    }));
            }
        }
    }
};

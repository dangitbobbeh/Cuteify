chrome.runtime.onMessage.addListener(function(request){
    let imgs = document.getElementsByTagName("img");
    let imgSrcs = [];

    const cuties = {
        1: "https://i.imgur.com/bnZ3zHT.jpg",
        2: "https://i.imgur.com/OvHqr65.jpg",
        3: "https://i.imgur.com/XIEAB2A.jpg",
        4: "https://i.imgur.com/JBBgDyW.jpg",
        5: "https://i.imgur.com/Lch1kdD.jpg",
        6: "https://i.imgur.com/ItvELyZ.jpg",
        7: "https://i.imgur.com/Hudnvdg.jpg",
        8: "https://i.imgur.com/1O5iqOa.jpg",
        9: "https://i.imgur.com/hT4wXRU.jpg",
        10: "https://i.imgur.com/1Rcy9el.jpg",
        11: "https://i.imgur.com/gynJzWl.jpg",
        12: "https://i.imgur.com/8Oj0utV.jpg",
        13: "https://i.imgur.com/zG4BY0e.jpg",
        14: "https://i.imgur.com/yW5zzGa.jpg",
        15: "https://i.imgur.com/1GG6B0M.jpg",
        16: "https://i.imgur.com/I2hTKNL.png",
        17: "https://i.imgur.com/WZAex06.jpg",
        18: "https://i.imgur.com/OjaOhiw.jpg",
        19: "https://i.imgur.com/gzkMWBY.jpg",
        20: "https://i.imgur.com/bbDNevC.jpg",
        21: "https://i.imgur.com/UoKC9aS.png",
        22: "https://i.imgur.com/1SETFk0.png",
        23: "https://i.imgur.com/UdYKD3F.jpg",
        24: "https://i.imgur.com/b4aH3b1.jpg",
        25: "https://i.imgur.com/tm18CGR.jpg",
        26: "https://i.imgur.com/EX5LEG1.jpg",
        27: "https://i.imgur.com/nq4Y5Ot.jpg",
        28: "https://i.imgur.com/SlNTlyc.jpg",
        29: "https://i.imgur.com/R1OE5Jw.jpg"
    }

    const codies = {
        1: "https://i.imgur.com/PLA2EJl.jpg",
        2: "https://i.imgur.com/FRlB8Pu.jpg",
        3: "https://i.imgur.com/A0CBPgb.jpg",
        4: "https://i.imgur.com/LCIUmmR.jpg",
        5: "https://i.imgur.com/873paYO.jpg",
        6: "https://i.imgur.com/UaraJoR.jpg",
        7: "https://i.imgur.com/CYrTmck.jpg",
        8: "https://i.imgur.com/usEiLgl.png",
        9: "https://i.imgur.com/P8lodTb.png",
        10: "https://i.imgur.com/h1K7fAu.png",
        11: "https://i.imgur.com/d8whF6y.png",
        12: "https://i.imgur.com/hLewaXS.jpg",
        13: "https://i.imgur.com/q36lyZR.png",
        14: "https://i.imgur.com/Wy8HRL9.png",
        15: "https://i.imgur.com/a1X3BLz.png",
        16: "https://i.imgur.com/C3JjvJ2.png",
        17: "https://i.imgur.com/jSlIEkQ.png",
        18: "https://i.imgur.com/I2hTKNL.png",
        19: "https://i.imgur.com/D4pETnY.png",
        20: "https://i.imgur.com/ZC597Vl.png",
        21: "https://i.imgur.com/SQJxwuQ.png",
        22: "https://i.imgur.com/j3dt77q.png",
        23: "https://i.imgur.com/eQBS7FK.jpg",
        24: "https://i.imgur.com/1tIdgyU.png",
        25: "https://i.imgur.com/kHlfryu.png",
        26: "https://i.imgur.com/eiXHTK8.png",
        27: "https://i.imgur.com/VJ5FF4S.png",
        28: "https://i.imgur.com/7DlHhnQ.png",
        29: "https://i.imgur.com/X313CBl.png",
        30: "https://i.imgur.com/9HmhypV.png",
        31: "https://i.imgur.com/4C4Yu8A.png",
        32: "https://i.imgur.com/fnNYeAo.png",
        33: "https://i.imgur.com/YFKNjz1.png",
        34: "https://i.imgur.com/W6hEk09.jpg",
        35: "https://i.imgur.com/HJSlxre.png",
        36: "https://i.imgur.com/YP9YpJr.png",
        37: "https://i.imgur.com/coO27MJ.png",
        38: "https://i.imgur.com/C2B1rKl.png",
        39: "https://i.imgur.com/VPuabJ0.png",
        40: "https://i.imgur.com/gy12tLc.png",
        41: "https://i.imgur.com/wF2kewB.png",
        42: "https://i.imgur.com/fSuZjx4.png",
        43: "https://i.imgur.com/hvDjwrt.png",
        44: "https://i.imgur.com/aZ2K0IY.png",
        45: "https://i.imgur.com/Y2rBrx9.jpg",
        46: "https://i.imgur.com/vU2A04u.jpg",
        47: "https://i.imgur.com/st8RHsb.jpg",
        48: "https://i.imgur.com/LIoD3uH.jpg",
        49: "https://i.imgur.com/HJkEZpX.jpg"

    }

    let divContainer = null;
    let img1 = null;
    let img2 = null;


    for (var i = 0; i < imgs.length; i++) {
        imgSrcs.push(imgs[i])
    }
    if(request === "cuties"){
        // confettiCannon();
    imgSrcs.forEach(imageObj=>{
        imageObj.src = cuties[Math.floor(Math.random() * (29- 1 + 1)) + 1]
        // if(imageObj.style){
        //     imageObj.style.backgroundColor = 'black';
        // } else {
        //     imageObj.width = "0px";
        //     imageObj.height = "0px";
        // }
    })
    // setTimeout(() => {
        
    //     console.log(img1);
    //     divContainer.remove(divContainer);
    // }, 1500);
    }

    if(request === "codies"){
        imgSrcs.forEach(imageObj => {
            imageObj.src = codies[Math.floor(Math.random() * (49 - 1 + 1)) + 1]
            // if (imageObj.style) {
            //     imageObj.style.backgroundColor = 'black';
            // } else {
            //     imageObj.width = "0px";
            //     imageObj.height = "0px";
            // }
        })
    }
    if (request === "confetti") {
        confettiCannon();
        setTimeout(() => {
            console.log(img1);
            divContainer.remove(divContainer);
        }, 1500);
    }
    function confettiCannon() {
        const windowBottom = window.scrollY;
        const windowHeight = window.innerHeight;

        divContainer = document.createElement('div');
        divContainer.style.position = 'absolute';
        divContainer.style.top = windowBottom + windowHeight - 300 + 'px';
        divContainer.style.height = '300px';
        divContainer.style.width = '100%';
        divContainer.style.zIndex = '100000';

        document.body.prepend(divContainer);

        const div = document.createElement('div');
        div.style.display = 'inline-block';
        img1 = document.createElement('img');
        img1.style.width = '400px';
        img1.style.height = '400px';
        img1.src =
            'https://cdn.streamelements.com/uploads/1afe7ae8-a4bc-4df1-bdbb-3a085dbd5592.gif';

        div.append(img1);
        divContainer.append(div);

        div2 = document.createElement('div');
        div2.style.display = 'inline-block';
        img2 = document.createElement('img');
        img2.style.width = '400px';
        img2.style.height = '400px';
        img2.src =
            'https://cdn.streamelements.com/uploads/1afe7ae8-a4bc-4df1-bdbb-3a085dbd5592.gif';

        div2.append(img2);
        divContainer.append(div2);

        div3 = document.createElement('div');
        div3.style.display = 'inline-block';
        div3.style.float = 'right';
        img3 = document.createElement('img');
        img3.style.width = '600px';
        img3.style.height = '400px';
        img3.src =
            'https://cdn.streamelements.com/uploads/1afe7ae8-a4bc-4df1-bdbb-3a085dbd5592.gif';

        div3.append(img3);
        divContainer.append(div3);
    }

    if(request === "cutiecannon"){
        confettiCannon();
    imgSrcs.forEach(imageObj=>{
        imageObj.src = cuties[Math.floor(Math.random() * (29- 1 + 1)) + 1]
        // if(imageObj.style){
        //     imageObj.style.backgroundColor = 'black';
        // } else {
        //     imageObj.width = "0px";
        //     imageObj.height = "0px";
        // }
    })
    setTimeout(() => {
        console.log(img1);
        divContainer.remove(divContainer);
    }, 1500);
    }
});
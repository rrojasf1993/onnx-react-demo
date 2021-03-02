
import loadImage from 'blueimp-load-image';
import {Tensor, InferenceSession} from 'onnxjs';
const getOnnxModelInstance= async()=>
{
    let mlSession=new InferenceSession({
        backendHint:"cpu"
    });
    let model=await mlSession.loadModel('../model/Model.onnx');
    return model;
}

const loadImages=async(files)=>
{
    let imageLoadResults=[];
    for(let i=0; i<=files.length; i++)
    {
        let file = files[i];
        if(file){
           let uploadResult=await loadImage(files,{maxHeight:416, maxWidth:416, canvas:true});
           imageLoadResults.push(uploadResult);
        }
    }
    return imageLoadResults;
}
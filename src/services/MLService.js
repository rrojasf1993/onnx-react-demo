
import loadImage from 'blueimp-load-image';
import {InferenceSession} from 'onnxjs';
export const getOnnxModelInstance= async()=>
{
    let mlSession=new InferenceSession({
        backendHint:"cpu"
    });
    let model=await mlSession.loadModel('../model/Model.onnx');
    return model;
}

export const loadImages=async(files)=>
{
    let imageLoadResults=[];
    for(let i=0; i<=files.length; i++)
    {
        let file = files[i];
        if(file)
        {
            try
            {
                let uploadResult=await loadImage(file,{canvas:true});
                imageLoadResults.push(uploadResult);
            }
            catch(e){
                console.log('Error loading images',e);
            }
        }
    }
    return imageLoadResults;
}
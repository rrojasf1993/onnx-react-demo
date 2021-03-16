
import loadImage from 'blueimp-load-image';
import {InferenceSession} from 'onnxjs';
import ndarray from "ndarray";

const getOnnxModelInstance= async()=>
{
    let mlSession=new InferenceSession({
        backendHint:"cpu"
    });
    let model=await mlSession.loadModel('../model/Model.onnx');
    return model;
}

export const loadImages=async(files)=>
{

    for(let i=0; i<=files.length; i++)
    {
        let file = files[i];
        if(file)
        {
            try
            {
                let uploadResult=await loadImage(file,
                {
                    canvas:true, 
                    maxWidth: 224,
                    maxHeight: 224,
                    cover: true,
                    crop: true
                });
                let drawingResult = uploadResult.image.getContext('2d');
                getTensorFromImage(drawingResult);
            }
            catch(e){
                console.log('Error loading images',e);
            }
        }
    }
}

const getTensorFromImage=(canvasDrawingContext)=>
{
    let imageData=canvasDrawingContext.getImageData(0,0, canvasDrawingContext.canvas.width,canvasDrawingContext.canvas.height);
    const { data, width, height } = imageData;
    const tensor=ndarray(new Float32Array(data),[width,height,4]);
    
}
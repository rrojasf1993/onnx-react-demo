
import {Tensor, InferenceSession} from 'onnxjs';
const getOnnxModelInstance= async()=>
{
    var mlSession=new InferenceSession({
        backendHint:"cpu"
    });
    var model=await mlSession.loadModel('../model/Model.onnx');
    return model;
}


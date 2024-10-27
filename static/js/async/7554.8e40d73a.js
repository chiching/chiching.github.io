"use strict";(self.webpackChunkrspress_doc_template=self.webpackChunkrspress_doc_template||[]).push([["7554"],{2872:function(e,n,t){t.r(n),t.d(n,{default:()=>c});var o=t("5893"),r=t("65");let i=t.p+"static/image/image-2.44cac3ba.png",s=t.p+"static/image/image-1.db47a45d.png",a=t.p+"static/image/image.5aec1086.png";function l(e){let n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",img:"img",pre:"pre",em:"em"},(0,r.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"model-converting",children:["model converting",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#model-converting",children:"#"})]}),"\n",(0,o.jsxs)(n.h2,{id:"yolov8-to-onnx-model",children:["yolov8 to onnx model",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#yolov8-to-onnx-model",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"yolo mode=export model=yolov8n.pt format=onnx dynamic=False"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)("img",{src:a,alt:"Alt text"})}),"\n",(0,o.jsxs)(n.h2,{id:"docker",children:["docker",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#docker",children:"#"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"version=1.9_enc\r\ndocker run -it --net host --rm -v $PWD:/data pulsar2:${version}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["onnxruntime.capi.onnxruntime_pybind11_state.InvalidArgument: [ONNXRuntimeError] : 2 : INVALID_ARGUMENT : Failed to load model with error: /onnxruntime_src/onnxruntime/core/graph/model_load_utils.h:47 void onnxruntime::model_load_utils::ValidateOpsetForDomain(const std::unordered_map<std::basic_string",", int>&, const onnxruntime::logging::Logger&, bool, const string&, int) ONNX Runtime only ",(0,o.jsx)(n.em,{children:"guarantees"})," support for models stamped with official released onnx opset versions. Opset 17 is under development and support for this is limited. The operator schemas and or other functionality may change before next ONNX release and in this case ONNX Runtime will not guarantee backward compatibility. Current official support for domain ai.onnx is till opset 16."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)("img",{src:s,alt:"Alt text"})}),"\n",(0,o.jsxs)(n.p,{children:["pip install onnx=1.15 -i  ",(0,o.jsx)(n.a,{href:"https://pypi.tuna.tsinghua.edu.cn/simpl",target:"_blank",rel:"noopener noreferrer",children:"https://pypi.tuna.tsinghua.edu.cn/simpl"}),"\r\npip install onnxruntime=1.15 -i  ",(0,o.jsx)(n.a,{href:"https://pypi.tuna.tsinghua.edu.cn/simpl",target:"_blank",rel:"noopener noreferrer",children:"https://pypi.tuna.tsinghua.edu.cn/simpl"})]}),"\n",(0,o.jsxs)(n.p,{children:["onnxsim yolov8n.onnx yolov8nsim.onnx\r\n",(0,o.jsx)("img",{src:i,alt:"Alt text"})]}),"\n",(0,o.jsx)(n.p,{children:"pulsar2 build --input yolov8nsim.onnx --output_dir output --config config.json"})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}let c=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["notes%2F07-AI%20%26%20Machine%20Learning%2Fyolo%2Fmodel_con.md"]={toc:[{text:"yolov8 to onnx model",id:"yolov8-to-onnx-model",depth:2},{text:"docker",id:"docker",depth:2}],title:"model converting",frontmatter:{}}}}]);
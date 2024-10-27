"use strict";(self.webpackChunkrspress_doc_template=self.webpackChunkrspress_doc_template||[]).push([["2763"],{8690:function(e,n,o){o.r(n),o.d(n,{default:()=>h});var r=o("5893"),i=o("65");let t=o.p+"static/image/image-6.8d425dca.png",s=o.p+"static/image/image-5.98c93ac3.png",a=o.p+"static/image/image-4.1057e019.png",d=o.p+"static/image/image-3.339a73fa.png";function l(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",code:"code",img:"img",pre:"pre"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"yolov8模型转换",children:["yolov8模型转换",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#yolov8模型转换",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"尝试一下将最新的yolov8模型转换为爱芯派的模型。"}),"\n",(0,r.jsxs)(n.h2,{id:"环境准备",children:["环境准备",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#环境准备",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"准备docker环境",children:["准备Docker环境",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#准备docker环境",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"首先自己在任意机器准备好docker环境。"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://pan.baidu.com/s/1_aeGILGZCAmFrWrRXhwgKg?pwd=pmj8",target:"_blank",rel:"noopener noreferrer",children:"Docker 镜像文件"})}),"\n",(0,r.jsxs)(n.h3,{id:"准备-yolo8-模型并转换为onnx格式",children:["准备 yolo8 模型，并转换为onnx格式。",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#准备-yolo8-模型并转换为onnx格式",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["下载",(0,r.jsx)(n.a,{href:"https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8n.pt",target:"_blank",rel:"noopener noreferrer",children:"yolov8n.pt"})]}),"\n",(0,r.jsxs)(n.p,{children:["将PyTorch模型格式转为onnx模型格式。",(0,r.jsx)(n.code,{children:"yolo mode=export model=yolov8n.pt format=onnx dynamic=False"}),"。 这里需要有yolo的环境，自己安装 ",(0,r.jsx)(n.code,{children:"pip install ultralytics -i https://pypi.tuna.tsinghua.edu.cn/simple"}),"，有其他需要的依赖包，接着继续安装。"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)("img",{src:d,alt:"Alt text"})}),"\n",(0,r.jsx)(n.p,{children:"转换完了之后，会生成一个yolov8n.onnx文件。"}),"\n",(0,r.jsxs)(n.h2,{id:"axmodel模型转换",children:["axmodel模型转换",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#axmodel模型转换",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"version=1.9_enc\r\ndocker run -it --net host --rm -v $PWD:/data pulsar2:${version}\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"预先已使用-onnxsim-将-mobilenetv2onnx-进行计算图优化",children:["预先已使用 onnxsim 将 mobilenetv2.onnx 进行计算图优化",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#预先已使用-onnxsim-将-mobilenetv2onnx-进行计算图优化",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"如果用docker 环境，可能会遇到以下错误"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"onnxruntime.capi.onnxruntime_pybind11_state.InvalidArgument: [ONNXRuntimeError] : 2 : INVALID_ARGUMENT : Failed to load model with error: /onnxruntime_src/onnxruntime/core/graph/model_load_utils.h:47 void onnxruntime::model_load_utils::ValidateOpsetForDomain(const std::unordered_map<std::basic_string<char>, int>&, const onnxruntime::logging::Logger&, bool, const string&, int) ONNX Runtime only *guarantees* support for models stamped with official released onnx opset versions. Opset 17 is under development and support for this is limited. The operator schemas and or other functionality may change before next ONNX release and in this case ONNX Runtime will not guarantee backward compatibility. Current official support for domain ai.onnx is till opset 16.\r\n\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)("img",{src:a,alt:"Alt text"})}),"\n",(0,r.jsx)(n.p,{children:"主要是onnx和onnxruntime版本不对，更新一下就可以了"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"pip install onnxruntime==1.15 -i  https://pypi.tuna.tsinghua.edu.cn/simple\n"})}),"\n",(0,r.jsxs)(n.p,{children:["然后再运行 ",(0,r.jsx)(n.code,{children:"onnxsim yolov8n.onnx yolov8nsim.onnx"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)("img",{src:s,alt:"Alt text"})}),"\n",(0,r.jsxs)(n.h3,{id:"axmodel转换",children:["axmodel转换",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#axmodel转换",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["准备好config.json文件，然后运行命令。",(0,r.jsx)(n.code,{children:"pulsar2 build --input yolov8nsim.onnx --output_dir output --config config.json"}),", 将会得到output/compiled.axmodel文件。"]}),"\n",(0,r.jsxs)(n.h2,{id:"开发板上运行模型评测",children:["开发板上运行模型评测",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#开发板上运行模型评测",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["通过开发板上预制的ax_run_model 工具，测试模型速度和精度。\r\n",(0,r.jsx)("img",{src:t,alt:"Alt text"})]})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}let h=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["notes%2F07-AI%20%26%20Machine%20Learning%2FAXera-Pi%20Pro%2Fyolo8%2Fyolo8.md"]={toc:[{text:"环境准备",id:"环境准备",depth:2},{text:"准备Docker环境",id:"准备docker环境",depth:3},{text:"准备 yolo8 模型，并转换为onnx格式。",id:"准备-yolo8-模型并转换为onnx格式",depth:3},{text:"axmodel模型转换",id:"axmodel模型转换",depth:2},{text:"预先已使用 onnxsim 将 mobilenetv2.onnx 进行计算图优化",id:"预先已使用-onnxsim-将-mobilenetv2onnx-进行计算图优化",depth:3},{text:"axmodel转换",id:"axmodel转换",depth:3},{text:"开发板上运行模型评测",id:"开发板上运行模型评测",depth:2}],title:"yolov8模型转换",frontmatter:{}}}}]);
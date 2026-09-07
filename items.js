window.DIGEST = {
  updated: "2026-09-07",
  highlights: {
    "2026-09-07": "今天能压成一条看点的是：实验室开始把「内部有多依赖 Agent」说出来。OpenAI 披露研究加速数据，Simon 盯上 7 月 token 陡升；Dylan 观察到 AI 公司员工的使用强度已经赶上分析机构。算力侧 SemiAnalysis 还在用 F-35 单价给 HBM 做换算。",
    "2026-09-06": "产业讨论从评测榜转到默认工具栈：Ben 降级 Claude 全改 Astra，Raschka 把 KV cache 和显存账算清楚。",
    "2026-09-02": "Demis 把 Gemini 3.8 Flash 和 Cyber 变体一起推出来，Flash 线继续按周迭代。",
    "2026-08-18": "Stratechery 曝出 Stripe 收购 OpenRouter。AI 的仗从「比模型」打到「比入口」。"
  },
  items: [
    {"date":"2026-09-07","author":"Ian Cutress","handle":"IanCutress","topic":"芯片 & 基础设施","title":"商业专线正在替代消费级备用网络","what":"Ian 提到所在地没有消费级备选运营商，但商业用途有直连不共享线路可选。","why":"推理和数据回传变成刚需后，网络会从消费宽带切到可承诺带宽的专线。","impact":"跑本地集群和远程实验的人，最后一公里会变成隐性成本。","time":"2026-09-07 17:27 +08","url":"https://x.com/IanCutress/status/2096893175491182888"},
    {"date":"2026-09-06","author":"Simon Willison","handle":"simonw","topic":"模型能力 & 研究","title":"OpenAI 公开模型加速研究数据，编码 Agent 用量陡升","what":"Simon 引用 OpenAI 研究员披露：公司开始公开模型如何加速内部研究，并点出 7 月中旬 token 消耗突然拉升。","why":"少有一线实验室把递归自我改进落到内部工具用量上。","impact":"公众讨论会从跑分转到「实验室飞轮转得有多快」。","time":"2026-09-07 01:10 +08","url":"https://x.com/simonw/status/2096647325049626918"},
    {"date":"2026-09-06","author":"SemiAnalysis","handle":"SemiAnalysis_","topic":"算力 & 硬件","title":"一张 F-35 能换多少 Rubin Ultra HBM","what":"SemiAnalysis 用 F-35 造价对比旧款 1024GB HBM 和新款 192GB HBM。","why":"HBM 已经贵到要用国家项目单位来理解。","impact":"内存规格从 1024GB 收到 192GB，说明系统级权衡在改。","time":"2026-09-07 05:01 +08","url":"https://x.com/SemiAnalysis_/status/2096705256545550623"},
    {"date":"2026-09-06","author":"Dylan Patel","handle":"dylan522p","topic":"大公司 & 商业模式","title":"AI 公司员工现在也像分析机构一样猛用 AI","what":"Dylan 说 AI 公司员工用 AI 的强度已接近 SemiAnalysis，今年早些时候更少。","why":"内部采用率是产能指标。","impact":"编码 Agent 变成默认工位后，研究产出节奏会被带快。","time":"2026-09-07 00:38 +08","url":"https://x.com/dylan522p/status/2096639082793222406"},
    {"date":"2026-09-06","author":"Sebastian Raschka","handle":"rasbt","topic":"模型能力 & 研究","title":"从零实现系列继续铺 KV cache，并放出显存计算器","what":"Raschka 说训练不用 KV cache，推理才用，并给出可交互显存计算器。","why":"把训练和推理的内存账讲清楚比再发架构图有用。","impact":"小模型 + 长上下文才是真实瓶颈。","time":"2026-09-07 01:42 +08","url":"https://x.com/rasbt/status/2096655320172962176"},
    {"date":"2026-09-06","author":"Ben Bajarin","handle":"BenBajarin","topic":"大公司 & 商业模式","title":"他把 Claude 降级了，全面转向 Astra","what":"Ben 直接说 Claude 已降配，日常全压在 Astra 上。","why":"产业分析师的默认工具栈比评测榜更早反映谁好用。","impact":"份额叙事会从谁分高变成谁被设成默认。","time":"2026-09-07 03:48 +08","url":"https://x.com/BenBajarin/status/2096686975923470800"},
    {"date":"2026-09-02","author":"Demis Hassabis","handle":"demishassabis","topic":"模型能力 & 研究","title":"Gemini 3.8 Flash 与 3.8 Flash Cyber 发布","what":"Demis 宣布 Flash 一个月内再次升级，并推出偏网络防御的 Cyber 变体。","why":"Flash 线在用小版本抢 Agent / 编码场景。","impact":"应用层会更少绑定某一代最大杯。","time":"2026-09-03 00:44 +08","url":"https://x.com/demishassabis/status/2095191106665284046"},
    {"date":"2026-08-18","author":"Stratechery","handle":"stratechery","topic":"大公司 & 商业模式","title":"Stripe 把 OpenRouter 给收购了","what":"Stratechery 8 月 17 日日报把 Stripe 收购 OpenRouter 放在头条。","why":"支付公司买模型聚合平台，说明争头从模型强度转向分发入口和计费通道。","impact":"中小模型厂商触达成本变高；「用谁家模型」可能被入口代选。","time":"8-17 日报","url":"https://x.com/stratechery"}
  ]
};

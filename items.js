window.DIGEST = {
  updated: "2026-11-24",
  highlights: {
    "2026-11-24": "今日焦点集中在以太网多机架规模扩展与新模型架构：SemiAnalysis独家揭示AMD MI550x通过集中式光学交换机行实现单跳以太网多机架（>500-1k GPU）规模扩展，机架内仍保持铜背板，直接挑战NVLink单跳垄断与高毛利；Simon Willison测试Z.ai的GLM-5.4（首个循环Transformer架构），并指出从5.2到5.3风格显著变化更接近主流模型。",
    "2026-11-23": "今日焦点集中在推理硬件性能与营销差距：SemiAnalysis详细质疑Cerebras对Kimi K3.1 2.8T模型2000 tok/s交互性声称仅限短上下文，并指出长上下文与p99 TPOT及功耗数据不足；同时报道SGLang Rubin NVL72提交相对GB300实现6.5倍每美元性能优势。",
    "2026-11-22": "今日焦点集中在Gemini 4模型思考级别优化：Simon Willison详细对比Gemini 4 Hydrogen在high与xhigh思考努力上的显著差距（成本与token用量相差数倍），并分享Carbon、Neon、Hydrogen全系列推理级别对比网格。",
    "2026-11-21": "今日焦点集中在生物AI合作与数学突破：Demis Hassabis宣布Isomorphic Labs与默克合作设计新型癌症药物；Jim Fan回应Anthropic研究员用Claude证明黎曼猜想，强调物理机器人学需加紧追赶。SemiAnalysis报道Ayar Labs光学激光量产统计达标；Simon Willison探讨Gemini 4 Neon与Carbon/Argon定位。",
    "2026-11-20": "今日焦点集中在物理AI演示与开源架构透明：Jim Fan发布GR00T 2真实灵巧手端到端自主控制视频；Sebastian Raschka深度点评Marin Mochi 535B检查点发布，揭示Latent MoE、XSA等架构选择。Simon Willison展示Gemini 4 Neon生成复杂Three.js动画的能力；SemiAnalysis以meme对比GB300机架内存与PS5供应，凸显AI算力对消费硬件的影响。Stratechery访谈探讨代理商务趋势。"
  },
  items: [
    {
      date: "2026-11-24",
      author: "SemiAnalysis",
      handle: "@SemiAnalysis_",
      topic: "芯片 & 基础设施",
      title: "AMD MI550x以太网单跳多机架规模扩展",
      what: "SemiAnalysis在Networking Model中独家揭示AMD MI550x多机架规模扩展新时代：通过集中式光学交换机行实现>500-1k GPU的单跳以太网规模扩展，机架内仍使用铜背板，光学不会立即取代铜。不是Rubin Ultra NVL576的两跳方案。多家网络公司近月已有暗示。",
      why: "突破机架内铜连接的规模上限，开放以太网可能达到接近NVLink的单跳大规模连接。",
      impact: "若AMD延迟匹配NVLink，可能侵蚀英伟达NVLink高毛利垄断，加速开放互联方案普及。",
      time: "2026-11-24 08:02",
      url: "https://x.com/SemiAnalysis_/status/2125017089693843541"
    },
    {
      date: "2026-11-24",
      author: "Simon Willison",
      handle: "@simonw",
      topic: "模型能力 & 研究",
      title: "GLM-5.4发布：首个循环Transformer与pelican风格变化",
      what: "Z.ai发布GLM-5.4，首次采用循环Transformer架构（权重共享层多次迭代精炼隐状态）。Simon Willison跑pelican骑自行车测试发现5.2到5.3风格显著变化，5.3/5.4更接近OpenAI/Anthropic风格，而5.1/5.2更有独特画风。并提供对比网格。模型尚未开放权重，需通过Coding Plan API访问。",
      why: "循环架构允许不增加参数量的情况下深度推理，尤其适合代理编程；pelican测试直观反映模型风格与能力演进。",
      impact: "中国实验室在架构创新上加速，循环Transformer或成为下一波推理效率优化方向。",
      time: "2026-11-24 08:04",
      url: "https://x.com/simonw/status/2125017693917155424"
    },
    {
      date: "2026-11-24",
      author: "Simon Willison",
      handle: "@simonw",
      topic: "AI应用 & 工具",
      title: "Datasette-charts插件：自动为任意数据生成可信可视化",
      what: "Simon Willison借助Fable 5.2帮助开发了datasette-charts插件，能为任意丢入Datasette的数据自动选择合理可信的可视化图表。可在Datasette Lite（浏览器内Pyodide）直接试用。",
      why: "降低数据探索门槛，让非专业用户也能快速得到有用图表。",
      impact: "推动AI辅助数据工具更加普及，提升开源数据库工具的可用性。",
      time: "2026-11-24 07:22",
      url: "https://x.com/simonw/status/2125007029442114041"
    },
    {
      date: "2026-11-23",
      author: "SemiAnalysis",
      handle: "@SemiAnalysis_",
      topic: "算力 & 硬件",
      title: "Cerebras对Kimi K3.1高交互性声称存疑",
      what: "SemiAnalysis质疑Cerebras声称在Kimi K3.1 2.8T上2000 tok/s/user的输出交互性，仅适用于短上下文（prompt少于100 tokens）。他们指出未展示中长上下文（100k+到600k+）的p99 TPOT，尤其是agentic多轮工作负载，因为需要加载全KV缓存（Gated MLA全注意力）。同时，对比GB300 NVL72时引用最大功率150kW，但实际低延迟测试全机架功率低于30%。邀请在AgentX Preview上演示。",
      why: "揭示营销声称与实际长上下文性能差距，强调真实agentic工作负载测试重要性。",
      impact: "可能促使硬件厂商更透明披露长上下文性能，影响推理加速器选择与部署决策。",
      time: "2026-11-23 10:00",
      url: "https://x.com/SemiAnalysis_/status/2124684387761430549"
    },
    {
      date: "2026-11-23",
      author: "SemiAnalysis",
      handle: "@SemiAnalysis_",
      topic: "算力 & 硬件",
      title: "SGLang Rubin NVL72实现6.5x性价比优势",
      what: "SemiAnalysis报道新SGLang Rubin NVL72提交在开源Kimi K3.1 Pro模型（2.8T参数，类似Anthropic Fable 5）上，相比GB300 NVL72实现6.5x更好的每美元性能。该模型架构不到3周。",
      why: "展示开源推理框架与新硬件组合的显著效率提升。",
      impact: "可能加速开源推理栈采用，挑战封闭硬件优势，降低算力部署成本。",
      time: "2026-11-23 06:54",
      url: "https://x.com/SemiAnalysis_/status/2124637709176016998"
    },
    {
      date: "2026-11-22",
      author: "Simon Willison",
      handle: "@simonw",
      topic: "模型能力 & 研究",
      title: "Gemini 4 Hydrogen high vs xhigh思考级别差异巨大",
      what: "Simon Willison分享Gemini 4提示：Hydrogen模型在\"high\"与\"xhigh\"思考努力级别上差异非常显著。以pelican为例，high成本3.99美分使用5311输出token，xhigh成本23.61美分使用31477输出token。他同时提供了Carbon、Neon和Hydrogen在所有推理级别的完整对比网格链接。",
      why: "帮助用户理解不同思考级别对输出质量和成本的巨大影响，指导实际使用选择。",
      impact: "可能推动开发者更精细地控制思考努力以平衡成本与性能，优化AI应用效率。",
      time: "2026-11-22 03:06",
      url: "https://x.com/simonw/status/2124217876777464269"
    }
  ]
};
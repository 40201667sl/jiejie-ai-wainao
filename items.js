window.DIGEST = {
  updated: "2026-11-23",
  highlights: {
    "2026-11-23": "今日焦点集中在推理硬件性能与营销差距：SemiAnalysis详细质疑Cerebras对Kimi K3.1 2.8T模型2000 tok/s交互性声称仅限短上下文，并指出长上下文与p99 TPOT及功耗数据不足；同时报道SGLang Rubin NVL72提交相对GB300实现6.5倍每美元性能优势。",
    "2026-11-22": "今日焦点集中在Gemini 4模型思考级别优化：Simon Willison详细对比Gemini 4 Hydrogen在high与xhigh思考努力上的显著差距（成本与token用量相差数倍），并分享Carbon、Neon、Hydrogen全系列推理级别对比网格。",
    "2026-11-21": "今日焦点集中在生物AI合作与数学突破：Demis Hassabis宣布Isomorphic Labs与默克合作设计新型癌症药物；Jim Fan回应Anthropic研究员用Claude证明黎曼猜想，强调物理机器人学需加紧追赶。SemiAnalysis报道Ayar Labs光学激光量产统计达标；Simon Willison探讨Gemini 4 Neon与Carbon/Argon定位。",
    "2026-11-20": "今日焦点集中在物理AI演示与开源架构透明：Jim Fan发布GR00T 2真实灵巧手端到端自主控制视频；Sebastian Raschka深度点评Marin Mochi 535B检查点发布，揭示Latent MoE、XSA等架构选择。Simon Willison展示Gemini 4 Neon生成复杂Three.js动画的能力；SemiAnalysis以meme对比GB300机架内存与PS5供应，凸显AI算力对消费硬件的影响。Stratechery访谈探讨代理商务趋势。"
  },
  items: [
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
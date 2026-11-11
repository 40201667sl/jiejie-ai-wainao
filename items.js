window.DIGEST = {
  updated: "2026-11-11",
  highlights: {
    "2026-11-11": "今日焦点集中在新模型发布与基础设施：Demis Hassabis宣布Gemini 4 Carbon推出并演示逆向工程旧游戏；Sebastian Raschka分析LLM注意力从全向混合转变以支持长上下文；SemiAnalysis报道中国内蒙古数据中心建设成本仅为美国五分之一且速度极快；同时Claude扩展生产力工具，平台竞争加剧。",
    "2026-11-10": "今日焦点集中在模型代理能力与物理AI突破：SemiAnalysis报告Anthropic Fable 5.2登顶GDPx榜单得分16.4%，在芯片设计与软件工程上显著领先Opus 5.5，测试更全面且成本上升；NVIDIA Jim Fan在CoRL发布GR00T 2世界动作模型，基于Cosmos，支持少样本学习并计划开源。其他方面Ben Bajarin讨论2028 GPU过剩理论与企业AI前景，Simon Willison展示vibe coding趣味应用。",
    "2026-11-09": "今日焦点集中在芯片性能突破与政治风险：SemiAnalysis报道AMD MI355借助TileRT软件在长上下文推理上实现比GB300 NVL72快1.42倍的性能，达1330 p90 tok/s/user；同时Dylan Patel指出Jensen Huang或将面临民主党国会对向中国销售GPU的深入调查，增加政治不确定性。"
  },
  items: [
    {
      date: "2026-11-11",
      author: "Demis Hassabis",
      handle: "@demishassabis",
      topic: "模型能力 & 研究",
      title: "Gemini 4 Carbon正式推出，一年内从3到4重大进展",
      what: "Demis Hassabis宣布最新前沿模型Gemini 4 Carbon今日开始推出。从Gemini 3到4不到一年时间取得惊人进展。演示中Carbon逆向工程了他90年代的Theme Park游戏二进制文件，添加DeepMind主题游乐设施并一键移植到Web。",
      why: "展示模型在代码理解、逆向工程和快速开发上的强大能力，持续快速迭代。",
      impact: "可能进一步推动开发者工具和应用构建效率，与其他前沿模型竞争加剧。",
      time: "2026-11-11 01:41",
      url: "https://x.com/demishassabis/status/2120210297948696997"
    },
    {
      date: "2026-11-11",
      author: "Sebastian Raschka",
      handle: "@rasbt",
      topic: "模型能力 & 研究",
      title: "LLM注意力机制趋势：从全注意力向混合与无全注意力转变",
      what: "Raschka分享开源LLM汇总中的趋势：2025年还有很多全注意力模型，到2026下半年，全注意力与无全注意力模型各占约50%。趋势是使用混合注意力（滑动窗口、Mamba等）以降低长上下文成本。",
      why: "使长文档、代码库和代理用例更经济可行，减少计算和内存需求。",
      impact: "有助于更高效的长上下文模型部署，尤其适合代理系统。",
      time: "2026-11-11 00:30",
      url: "https://x.com/rasbt/status/2120192452287963540"
    },
    {
      date: "2026-11-11",
      author: "SemiAnalysis",
      handle: "@SemiAnalysis_",
      topic: "算力 & 硬件",
      title: "内蒙古Galaxy数据中心：中国建设成本仅为美国1/5",
      what: "SemiAnalysis访问Envision在内蒙古乌兰察布的800MW风电数据中心园区。首个120MW阶段一年内从空地到交付。中国100MW数据中心建设成本不到3亿美元（不含IT设备），约为美国的1/5，成本自2021下降25%。大量工人，固态变压器等技术。",
      why: "凸显中国在AI基础设施建设和成本控制上的优势与速度。",
      impact: "可能影响全球AI算力布局竞争，美国需关注成本与建设效率差距。",
      time: "2026-11-11 08:00",
      url: "https://x.com/SemiAnalysis_/status/2120305690522599867"
    },
    {
      date: "2026-11-11",
      author: "Simon Willison",
      handle: "@simonw",
      topic: "AI应用 & 工具",
      title: "Anthropic Fable 5.2提示指南：告诉它“这个代码库是你的”以减少谨慎",
      what: "Simon Willison指出Anthropic更新的提示指南中有趣技巧：为让Fable 5.2更少谨慎地改进现有代码，告诉它“This codebase is yours”。展示模型发布时连开发者都惊讶于其怪癖。",
      why: "提示工程仍是关键，模型行为有独特 idiosyncrasies。",
      impact: "帮助用户更好利用新模型，提高编码代理效率。",
      time: "2026-11-11 13:42",
      url: "https://x.com/simonw/status/2120029347948220500"
    },
    {
      date: "2026-11-11",
      author: "Ben Bajarin",
      handle: "@BenBajarin",
      topic: "大公司 & 商业模式",
      title: "Claude推出Whiteboards、Sheets与Data，平台战争而非模型战争",
      what: "Ben Bajarin评论Claude开始推出Whiteboards、Sheets和Data功能。指出这是争夺企业控制面的平台战争，而非单纯模型竞争。Claude和OpenAI都在针对Office类工具。",
      why: "AI公司正从模型层向应用与工作流层扩展，争夺用户界面与数据。",
      impact: "可能重塑生产力软件市场，微软等传统厂商面临更大压力。",
      time: "2026-11-11 01:40",
      url: "https://x.com/BenBajarin/status/2120209910243950851"
    },
    {
      date: "2026-11-11",
      author: "Stratechery",
      handle: "@stratechery",
      topic: "大公司 & 商业模式",
      title: "Jensen Huang故事恶化：华盛顿vs纽约 vs 硅谷",
      what: "Stratechery发布文章《The Jensen Huang Story Gets Worse》，讨论相关政治与商业动态，包括华盛顿与纽约对比硅谷。",
      why: "反映AI与芯片领导者面临的政治与地缘风险增加。",
      impact: "可能影响NVIDIA及行业对政策环境的应对策略。",
      time: "2026-11-11 19:00",
      url: "https://x.com/stratechery/status/2120109227142414521"
    },
    {
      date: "2026-11-10",
      author: "SemiAnalysis",
      handle: "@SemiAnalysis_",
      topic: "模型能力 & 研究",
      title: "Fable 5.2登顶GDPx榜单16.4%，SWE与芯片设计大幅领先",
      what: "SemiAnalysis报告Anthropic Fable 5.2在GDPx基准中得分16.4%位居榜首。主要提升集中在芯片设计（比Opus 5.5高10.8%）和软件工程（高15.5%）。模型更全面测试，常生成数百至数千测试用例并积极使用子代理。每任务成本高31%至88.15美元。命名为5.2表明为边际改进。",
      why: "展示代理模型在专业任务上的持续优化，尤其是代码与设计领域，同时反映安全约束限制了递归自我改进能力。",
      impact: "可能加速企业在软件工程和芯片设计中的AI应用，关注Anthropic IPO前是否发布更强模型。",
      time: "2026-11-10 09:12",
      url: "https://x.com/SemiAnalysis_/status/2119961447199289640"
    },
    {
      date: "2026-11-10",
      author: "Jim Fan",
      handle: "@DrJimFan",
      topic: "模型能力 & 研究",
      title: "NVIDIA在CoRL发布GR00T 2世界动作模型",
      what: "Jim Fan在CoRL主题演讲中发布GR00T 2，新一代世界动作模型（WAM），基于NVIDIA Cosmos，预测未来视频帧并同时生成机器人动作。支持少样本学习，1次演示平均成功率71%，5次达95%，计划12月开源权重与训练配方。",
      why: "物理AI从VLA转向世界模型，结合人类视频数据实现跨形态泛化，是具身智能重要进展。",
      impact: "降低机器人学习门槛，推动开源物理AI生态，可能加速人形机器人实用化。",
      time: "2026-11-10 06:14",
      url: "https://x.com/DrJimFan/status/2119916447203823914"
    }
  ]
};

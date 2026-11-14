window.DIGEST = {
  updated: "2026-11-14",
  highlights: {
    "2026-11-14": "今日焦点集中在超大规模算力建设与领导层变动：SemiAnalysis详述SpaceX Colossus 2年内将IT算力从0.4GW扩至2.4GW，并用近6GWh大规模BESS填补约300MW电力缺口；AMD MI355X经开源内核优化在MiniMax推理上超越Blackwell。Stratechery总结Jensen Huang突然卸任Nvidia CEO带来的行业冲击与不确定性。",
    "2026-11-13": "今日焦点集中在Gemini 4 Hydrogen发布：Demis Hassabis宣布新模型，速度与智能均衡，面向日常编码与代理使用，并对所有用户开放。Simon Willison分析其定价策略，Hydrogen比Carbon/Argon便宜25%，但性能有所折中。SemiAnalysis关注Trump访深圳APEC期间芯片供应链与推理优化，Nvidia领导层传闻持续发酵。",
    "2026-11-12": "今日焦点集中在生物AI与硬件突破：Demis Hassabis宣布AlphaGenome 2，能按特定细胞类型预测DNA变异影响，识别因果变异近乎翻倍；SemiAnalysis报道Google TPU 8i Max（Whalefish）双芯片封装、HBM带宽翻倍以支持大上下文推理；NVIDIA与RadixArk将SGLang在Rubin上的性能再提升最多10倍。同时持久代理成为AI使用下一关键解锁，Nvidia领导层变动传闻升温。",
    "2026-11-11": "今日焦点集中在新模型发布与基础设施：Demis Hassabis宣布Gemini 4 Carbon推出并演示逆向工程旧游戏；Sebastian Raschka分析LLM注意力从全向混合转变以支持长上下文；SemiAnalysis报道中国内蒙古数据中心建设成本仅为美国五分之一且速度极快；同时Claude扩展生产力工具，平台竞争加剧。",
    "2026-11-10": "今日焦点集中在模型代理能力与物理AI突破：SemiAnalysis报告Anthropic Fable 5.2登顶GDPx榜单得分16.4%，在芯片设计与软件工程上显著领先Opus 5.5，测试更全面且成本上升；NVIDIA Jim Fan在CoRL发布GR00T 2世界动作模型，基于Cosmos，支持少样本学习并计划开源。其他方面Ben Bajarin讨论2028 GPU过剩理论与企业AI前景，Simon Willison展示vibe coding趣味应用。",
    "2026-11-09": "今日焦点集中在芯片性能突破与政治风险：SemiAnalysis报道AMD MI355借助TileRT软件在长上下文推理上实现比GB300 NVL72快1.42倍的性能，达1330 p90 tok/s/user；同时Dylan Patel指出Jensen Huang或将面临民主党国会对向中国销售GPU的深入调查，增加政治不确定性。"
  },
  items: [
    {
      date: "2026-11-14",
      author: "SemiAnalysis",
      handle: "@SemiAnalysis_",
      topic: "算力 & 硬件",
      title: "SpaceX Colossus 2急速扩张：年内IT算力从0.4GW增至2.4GW",
      what: "SemiAnalysis报道SpaceX在孟菲斯/密西西比边境校园从1月的0.4GW IT算力扩至2026年底的2.4GW，涵盖Macrohard、MiniHard、Macroharder、Project SPAM与Gun Range等多个项目。建设速度极快，MiniHard约5个月完成，Gun Range约4个月，远快于行业8-12个月标准。电力方面面临约300MW缺口，但通过近6GWh的大规模BESS（1377个Megapacks）与燃气轮机协调，结合低PUE可能覆盖缺口。",
      why: "展示极端快速的数据中心建设能力与创新电力解决方案，直接支撑AI算力需求爆发。",
      impact: "可能加速超大规模AI训练与推理基础设施部署，影响能源、芯片与整体算力布局竞争。",
      time: "2026-11-14 08:36",
      url: "https://x.com/SemiAnalysis_/status/2121401747734208740"
    },
    {
      date: "2026-11-14",
      author: "SemiAnalysis",
      handle: "@SemiAnalysis_",
      topic: "芯片 & 基础设施",
      title: "AMD MI355X经优化在MiniMax推理上超越Blackwell",
      what: "SemiAnalysis称MI355X配合vLLM借助FlyDSL内核在MiniMax M3.1上击败Blackwell，部分交互性超越Grace Blackwell。Inferact团队（含AMD）开源内核于GitHub，性能提升超3倍，端到端延迟因更快TTFT甚至优于Vera Rubin。",
      why: "软件与内核深度优化充分释放AMD硬件潜力，显著缩小与Nvidia在推理侧的差距。",
      impact: "增强AMD在高效推理市场的竞争力，推动开源内核生态，利好多样化硬件选择。",
      time: "2026-11-14 00:06",
      url: "https://x.com/SemiAnalysis_/status/2121273407488618995"
    },
    {
      date: "2026-11-14",
      author: "Stratechery",
      handle: "@stratechery",
      topic: "大公司 & 商业模式",
      title: "Stratechery本周总结：Jensen Huang任期突然终结",
      what: "Stratechery发布2026.46《The End of Jensen》，总结本周最佳内容，核心是Jensen Huang作为Nvidia CEO长达32年任期的突然结束。涉及个人丑闻、中国相关指控与华盛顿动态，讨论对Nvidia、科技行业及美国的广泛影响。",
      why: "AI核心硬件供应商领导层剧变带来重大不确定性，影响战略连续性与市场信心。",
      impact: "可能改变Nvidia未来路线图执行、投资节奏及整体AI产业生态协调方式。",
      time: "2026-11-14 02:03",
      url: "https://x.com/stratechery/status/2121303021225418934"
    },
    {
      date: "2026-11-13",
      author: "Demis Hassabis",
      handle: "@demishassabis",
      topic: "模型能力 & 研究",
      title: "Gemini 4 Hydrogen正式发布：极速智能模型面向大众",
      what: "Demis Hassabis宣布发布Gemini 4 Hydrogen，一个极具速度与智能的模型，专为日常编码、代理工作和全面使用而建造。可在Google AI Studio、Gemini API、Gemini应用、Google Search等所有层级使用，面向所有用户开放。",
      why: "将Gemini 4的能力带给更广泛用户，平衡速度与智能，推动实际应用落地。",
      impact: "降低使用门槛，可能加速开发者和普通用户的AI采用，与其他模型竞争加剧。",
      time: "2026-11-13 02:11",
      url: "https://x.com/demishassabis/status/2120942605466800374"
    }
  ]
};

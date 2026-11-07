window.DIGEST = {
  updated: "2026-11-07",
  highlights: {
    "2026-11-07": "今日焦点集中在算力融资与封装材料：SemiAnalysis认为GPU融资收紧更可能支撑租金而非造成过剩，因减缓新部署而需求仍紧；2027年约50GW容量中最多2-3GW有风险，一年期H100合同价格自3月上涨约21%。同时介绍Nittobo Vlex超低CTE玻璃布，助力下一代更大半导体封装基板的尺寸稳定性。",
    "2026-11-06": "今日焦点集中在物理AI推理加速与基准评估质量：NVIDIA Jim Fan团队发布VFlash System-1 VLM，通过并行解码视觉原语实现机器人动作解码最高12倍提速、整体推理5.1倍加速，并降低3D轨迹误差最高61%；SemiAnalysis批评流行AI基准质量低下、易含不公平设计；SGLang团队为Kimi K3.1提供Day-0高性能支持并开箱即用megakernel。",
    "2026-11-05": "今日焦点集中在算力基础设施的政治与质量挑战：SemiAnalysis报道Microsoft因IREN延迟导致Q3资本开支少50亿美元，IREN被指为最差站点；Stratechery分析数据中心在选举中普遍失利，政治阻力可能成为长期约束；Dylan分享Together Compiler用agent实现持续编译优化推理性能；Karpathy反思如何从1970年代正确预测AI发展路径。",
    "2026-11-04": "今日焦点集中在算力扩张与模型创新：SemiAnalysis深度分析SpaceX计划1.5年内建成13GW AI云成为全球最大；Raschka盘点10款十月开源LLM架构新发布；Simon Willison本地验证前沿模型可直接解读权重。芯片市场方面，Ben Bajarin预测AMD可能在2027年服务器CPU营收超越Intel。",
    "2026-11-03": "今日焦点集中在算力硬件与AI应用工具：SemiAnalysis报道内存厂商运营利润率达约80%，短缺预计持续至2030，并分析DeepSeek模型托管经济性；Karpathy推荐用Claude Code快速构建YouTube缩略图扩展；Simon Willison指出人口普查局因行政令将AI改为“超级智能”影响调查趋势。大公司方面Stratechery讨论Google财报与Agent策略。",
    "2026-11-02": "今日焦点集中在AI应用与模型能力评估：Andrej Karpathy用Claude Opus 5.5在约2小时内构建HackerTube，从20年HN评论中筛选6454个高质量视频推荐，提供无登录个性化推荐与数据导出；SemiAnalysis发布GDPx基准，测试前沿模型在高ROI领域的代理能力，最佳模型仅得12%，并强调安全分类器对评分的影响。其他监控账号相对安静。",
    "2026-11-01": "今日焦点集中在算力硬件与软件优化：SemiAnalysis报道AMD MI355X通过软件调优与更大HBM容量，在Kimi K3代理推理上实现比B200高达2倍的性能每美元；同时社区为Hopper编写融合内核，将解码速度提升最高38%。大公司与模型研究方面相对平静。",
    "2026-10-31": "今日主要关注芯片与基础设施领域：SemiAnalysis报道混合键合技术在先进封装中的进展，以及AI网络模型对集群部署的分析；Canon因中国份额损失削减步进机计划，反映国产化进展。Ben Bajarin强调DPU在AI控制平面安全中的重要性。大公司方面，Stratechery周刊讨论Anthropic数字与互联网变化。"
  },
  items: [
    {
      date: "2026-11-07",
      author: "SemiAnalysis",
      handle: "@SemiAnalysis_",
      topic: "算力 & 硬件",
      title: "GPU融资收紧更可能支撑租金而非造成算力过剩",
      what: "SemiAnalysis认为更紧的GPU融资更可能支撑租金而非创造计算过剩，因为它减缓新部署而需求仍紧。2027年约50GW数据中心容量中，最多2-3GW有风险。一年期H100合同价格自2026年3月上涨约21%，客户承诺支付全年。",
      why: "融资约束减缓新供应，同时现有GPU需求强劲，长期合同价格上升反映客户承诺。",
      impact: "现有运行中的GPU获得更多定价权，有利于持有存量资产的提供商，可能推高短期租金。",
      time: "2026-11-07 08:29",
      url: "https://x.com/SemiAnalysis_/status/2118863369365045730"
    },
    {
      date: "2026-11-06",
      author: "SemiAnalysis",
      handle: "@SemiAnalysis_",
      topic: "芯片 & 基础设施",
      title: "Nittobo开发Vlex超低CTE玻璃布用于下一代封装基板",
      what: "SemiAnalysis介绍Nittobo开发的Vlex超低热膨胀玻璃布，用于下一代更大半导体封装基板。Vlex的CTE为2.0 ppm/°C（50-200°C），低于T玻璃2.8、NE 3.3、E玻璃5.6，旨在控制加热冷却时的尺寸变化。",
      why: "随着基板尺寸增大，热膨胀控制对先进封装可靠性至关重要。",
      impact: "支持更大、更复杂的AI芯片封装，推动先进封装材料创新。",
      time: "2026-11-07 04:03",
      url: "https://x.com/SemiAnalysis_/status/2118796401274487064"
    },
    {
      date: "2026-11-06",
      author: "Jim Fan",
      handle: "@DrJimFan",
      topic: "模型能力 & 研究",
      title: "NVIDIA发布VFlash：System-1 VLM并行解码加速物理AI",
      what: "Jim Fan与NVIDIA团队推出VFlash，一种System-1视觉语言模型解码框架，用于物理AI。通过利用视觉原语（如边界框、轨迹）的固定结构，一次性并行输出整个几何形状，而非逐token自回归解码。在Jetson Thor和DGX Spark等边缘GPU上实现动作解码最高12倍提速、整体机器人推理5.1倍加速，且3D轨迹误差降低最高61%。",
      why: "自回归解码存在级联误差，且对固定长度坐标向量效率低下；并行解码避免逐点累积错误，同时大幅降低延迟，适合实时机器人与自动驾驶规划。",
      impact: "推动物理AI向反射速度的视觉推理演进，加速边缘部署与开源生态，可能改变机器人与具身智能的推理架构。",
      time: "2026-11-06 00:31",
      url: "https://x.com/DrJimFan/status/2118380813498892301"
    }
  ]
};

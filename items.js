window.DIGEST = {
  updated: "2026-11-05",
  highlights: {
    "2026-11-05": "今日焦点集中在算力基础设施的政治与质量挑战：SemiAnalysis报道Microsoft因IREN延迟导致Q3资本开支少50亿美元，IREN被指为最差站点；Stratechery分析数据中心在选举中普遍失利，政治阻力可能成为长期约束；Dylan分享Together Compiler用agent实现持续编译优化推理性能；Karpathy反思如何从1970年代正确预测AI发展路径。",
    "2026-11-04": "今日焦点集中在算力扩张与模型创新：SemiAnalysis深度分析SpaceX计划1.5年内建成13GW AI云成为全球最大；Raschka盘点10款十月开源LLM架构新发布；Simon Willison本地验证前沿模型可直接解读权重。芯片市场方面，Ben Bajarin预测AMD可能在2027年服务器CPU营收超越Intel。",
    "2026-11-03": "今日焦点集中在算力硬件与AI应用工具：SemiAnalysis报道内存厂商运营利润率达约80%，短缺预计持续至2030，并分析DeepSeek模型托管经济性；Karpathy推荐用Claude Code快速构建YouTube缩略图扩展；Simon Willison指出人口普查局因行政令将AI改为“超级智能”影响调查趋势。大公司方面Stratechery讨论Google财报与Agent策略。",
    "2026-11-02": "今日焦点集中在AI应用与模型能力评估：Andrej Karpathy用Claude Opus 5.5在约2小时内构建HackerTube，从20年HN评论中筛选6454个高质量视频推荐，提供无登录个性化推荐与数据导出；SemiAnalysis发布GDPx基准，测试前沿模型在高ROI领域的代理能力，最佳模型仅得12%，并强调安全分类器对评分的影响。其他监控账号相对安静。",
    "2026-11-01": "今日焦点集中在算力硬件与软件优化：SemiAnalysis报道AMD MI355X通过软件调优与更大HBM容量，在Kimi K3代理推理上实现比B200高达2倍的性能每美元；同时社区为Hopper编写融合内核，将解码速度提升最高38%。大公司与模型研究方面相对平静。",
    "2026-10-31": "今日主要关注芯片与基础设施领域：SemiAnalysis报道混合键合技术在先进封装中的进展，以及AI网络模型对集群部署的分析；Canon因中国份额损失削减步进机计划，反映国产化进展。Ben Bajarin强调DPU在AI控制平面安全中的重要性。大公司方面，Stratechery周刊讨论Anthropic数字与互联网变化。"
  },
  items: [
    {
      date: "2026-11-05",
      author: "SemiAnalysis",
      handle: "@SemiAnalysis_",
      topic: "算力 & 硬件",
      title: "Microsoft因IREN延迟Q3资本开支少50亿美元，IREN被指最差站点",
      what: "据The Information，Microsoft Q3资本开支比计划少50亿美元，部分因IREN延迟。SemiAnalysis表示IREN常因多日停电、网络升级、存储故障、空气质量控制导致链路抖动、XID等问题被客户抱怨，是行业最差站点。",
      why: "neocloud建设质量参差不齐，直接影响超大规模买家的部署进度与资本开支。",
      impact: "可能减缓短期AI算力扩张，凸显可靠基础设施供应商的价值，影响neocloud估值与选择。",
      time: "2026-11-05 08:09",
      url: "https://x.com/SemiAnalysis_/status/2118133582979813819"
    },
    {
      date: "2026-11-04",
      author: "Stratechery",
      handle: "@stratechery",
      topic: "大公司 & 商业模式",
      title: "数据中心在选举中失利，政治阻力或成AI最大约束",
      what: "Stratechery分析中期选举中数据中心成为热门议题，几乎所有相关地方投票反对建设，德州新州长承诺暂停新数据中心。政治反对可能使建设许可成为永久约束。",
      why: "AI相关的就业替代担忧与本地反对结合，使数据中心建设从经济受益变为政治敏感问题。",
      impact: "可能导致算力长期稀缺，有利于已有设施的hyperscaler与neocloud，加速太空数据中心等替代方案，影响全球AI部署速度。",
      time: "2026-11-04 19:00",
      url: "https://x.com/stratechery/status/2117934887336612160"
    },
    {
      date: "2026-11-05",
      author: "Dylan Patel",
      handle: "@dylan522p",
      topic: "AI应用 & 工具",
      title: "Together Compiler：用Agent持续编译实现推理优化新高度",
      what: "Dylan分享Together Compiler工作，用agent持续优化推理部署。TKCC让agent每小时尝试252倍优化实验，在InferenceX工作负载上24小时内达到SOTA TPS，如MiniMax M3.1在B200上1111 TPS，DeepSeek v4.1 Flash在GB300上1205 TPS，支持NVIDIA、AMD、Trainium2，并服务数万亿token。",
      why: "推理流量多变，模型架构快速迭代，agentic compiler可突破人类归纳偏差限制，实现更高性能天花板。",
      impact: "提升开源与多架构推理效率，降低部署成本，推动agent在系统优化中的应用。",
      time: "2026-11-05 02:56",
      url: "https://x.com/dylan522p/status/2118054845559296427"
    },
    {
      date: "2026-11-05",
      author: "Andrej Karpathy",
      handle: "@karpathy",
      topic: "模型能力 & 研究",
      title: "Karpathy：从1970年代正确预测AI需多重飞跃",
      what: "Karpathy指出大多数前2000科幻未准确预见AI路径。要从1970年代正确想象，需预见数字化知识工作、互联网、大数据、统计学习（而非手工编程）、LLM作为高保真ELIZA，以及scaling laws。关键是短掉手工编程机器人的想法。",
      why: "强调AI发展依赖计算、数据与统计方法的复合飞跃，而非单一突破。",
      impact: "帮助理解当前LLM成功的历史偶然性与路径依赖，指导未来研究方向。",
      time: "2026-11-05 02:30",
      url: "https://x.com/karpathy/status/2118048337018712423"
    }
  ]
};

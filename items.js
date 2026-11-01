window.DIGEST = {
  updated: "2026-11-01",
  highlights: {
    "2026-11-01": "今日焦点集中在算力硬件与软件优化：SemiAnalysis报道AMD MI355X通过软件调优与更大HBM容量，在Kimi K3代理推理上实现比B200高达2倍的性能每美元；同时社区为Hopper编写融合内核，将解码速度提升最高38%。大公司与模型研究方面相对平静。",
    "2026-10-31": "今日主要关注芯片与基础设施领域：SemiAnalysis报道混合键合技术在先进封装中的进展，以及AI网络模型对集群部署的分析；Canon因中国份额损失削减步进机计划，反映国产化进展。Ben Bajarin强调DPU在AI控制平面安全中的重要性。大公司方面，Stratechery周刊讨论Anthropic数字与互联网变化。"
  },
  items: [
    {
      date: "2026-10-31",
      author: "SemiAnalysis",
      handle: "@SemiAnalysis_",
      topic: "算力 & 硬件",
      title: "AMD MI355X在Kimi K3代理推理上实现2倍性能每美元优势",
      what: "AMD团队通过调优AITER内核与MonoKernel解码，结合MI355X每服务器2304GB HBM，在Kimi K3 Agentic Inference上实现比B200高达2倍的性能每美元，避免跨服务器网络瓶颈。",
      why: "更大显存容量使单服务器即可承载大模型推理，软件优化进一步提升效率，显著降低TCO。",
      impact: "AMD在推理市场竞争力提升，可能缓解NVIDIA价格压力，带动更广泛硬件选择。",
      time: "2026-11-01 03:03",
      url: "https://x.com/SemiAnalysis_/status/2116606900271788210"
    },
    {
      date: "2026-10-31",
      author: "SemiAnalysis",
      handle: "@SemiAnalysis_",
      topic: "算力 & 硬件",
      title: "社区为Hopper开发融合内核，解码速度提升达38%",
      what: "由于NVIDIA主要优化Blackwell Ultra与Rubin的解码软件，社区开发者使用agent swarm编写约1万行融合Hopper内核，将解码速度提升最高38%。",
      why: "旧一代GPU用户仍可通过开源软件优化获得显著性能提升，延长硬件生命周期。",
      impact: "降低对最新一代GPU的依赖，提升整体推理算力可用性与性价比。",
      time: "2026-11-01 07:00",
      url: "https://x.com/SemiAnalysis_/status/2116666571728863431"
    },
    {
      date: "2026-10-30",
      author: "SemiAnalysis",
      handle: "@SemiAnalysis_",
      topic: "芯片 & 基础设施",
      title: "混合键合技术加速3D集成与先进封装",
      what: "在Semicon West上，EV Group展示了die-to-wafer混合键合的两种主要方法：直接放置和集体die-to-wafer。直接放置简单但overlay受限于键合头约1µm，集体方式将最终键合移至W2W工具以提高吞吐量。",
      why: "混合键合是实现更高密度3D集成和先进封装的关键技术，对AI芯片性能提升至关重要。",
      impact: "有望加速AI芯片的封装密度提升，降低成本并提高互连效率。",
      time: "2026-10-30 23:08",
      url: "https://x.com/SemiAnalysis_/status/2116185427593863556"
    },
    {
      date: "2026-10-30",
      author: "SemiAnalysis",
      handle: "@SemiAnalysis_",
      topic: "算力 & 硬件",
      title: "SemiAnalysis AI网络模型：底部向上构建集群BOM与TAM",
      what: "Clara Ee介绍AI Networking Model，通过底部向上构建每个买家（如Meta、Oracle、Nebius、Crusoe）的集群，给出每个集群的BOM和网络设备总可寻址市场。",
      why: "不同超大规模买家的网络部署策略差异巨大，理解这些有助于把握基础设施投资方向。",
      impact: "为AI基础设施网络设备供应商和投资者提供具体量化参考。",
      time: "2026-10-31 02:00",
      url: "https://x.com/SemiAnalysis_/status/2116228729282125827"
    },
    {
      date: "2026-10-30",
      author: "SemiAnalysis",
      handle: "@SemiAnalysis_",
      topic: "芯片 & 基础设施",
      title: "Canon第二次削减2026年i-line步进机计划，中国份额损失是主因",
      what: "Canon第二次削减2026年i-line步进机计划。SemiAnalysis认为中国份额损失是重要驱动。中国在后端和成熟节点光刻有显著进展，AMIES声称占据中国先进封装光刻安装的90%，并在i-line领域抢占Canon份额。",
      why: "中国仍在购买ASML DUVi用于先进AI芯片制造，但在成熟节点和后端正快速国产化。",
      impact: "凸显中国半导体设备国产化加速，对国际光刻设备商构成压力。",
      time: "2026-10-31 07:00",
      url: "https://x.com/SemiAnalysis_/status/2116304252565856470"
    },
    {
      date: "2026-10-30",
      author: "Ben Bajarin",
      handle: "@BenBajarin",
      topic: "芯片 & 基础设施",
      title: "当Agent成为用户时，DPU在AI控制平面中的角色加深",
      what: "Ben Bajarin强调，当AI agents成为用户时，运营商失去每个工作负载都可信的假设。DPU和硬件隔离需要更深入地进入AI控制平面。",
      why: "安全与网络安全计算正成为AI基础设施的标配需求，DPU可提供硬件级隔离。",
      impact: "可能推动DPU在AI数据中心中的更广泛应用，提升安全隔离能力。",
      time: "2026-10-31 07:30",
      url: "https://x.com/BenBajarin/status/2116311933758693544"
    },
    {
      date: "2026-10-30",
      author: "Stratechery",
      handle: "@stratechery",
      topic: "大公司 & 商业模式",
      title: "Stratechery周刊：Anthropic数字、互联网终结与其他",
      what: "本周最佳Stratechery内容包括Anthropic数字、我们所知互联网的终结，以及专制体制的今昔对比。",
      why: "深入分析AI公司商业进展及其对互联网生态和更广泛社会的影响。",
      impact: "提供对AI商业模式演变和宏观技术趋势的战略视角。",
      time: "2026-10-31 01:00",
      url: "https://x.com/stratechery/status/2116213541137248676"
    }
  ]
};

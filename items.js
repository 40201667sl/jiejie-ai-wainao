window.DIGEST = {
  updated: "2026-10-12",
  highlights: {
    "2026-10-12": "今日看点：Karpathy 重提上次 AI 能力理解鸿沟，现已变成尖锐漏斗：约 60 亿人几乎未触及 LLM，1-2 亿随意使用免费层看到 derpy chatbot，约 2000 万人专业使用前沿 agent 完成大型项目，仅约 5000 人内部接触到千前级系统。SemiAnalysis 指出先进封装中纯铜导热达到极限（~400 W/m·K），Cu/diamond 复合材料可达 ~800 W/m·K 并减少翘曲；同日播客讨论 AI 建设资本需求远超背书覆盖，NVIDIA 可支持约 46 GW 仍不足，需分层风险融资。",
    "2026-10-11": "今日看点：SemiAnalysis 拆所谓 Lambda–Anthropic 交易，实为 Nvidia、Lambda、Hut 8、Anthropic 四方结构，Anthropic 2028 年拿到约 350 MW Rubin 容量、单价约 5.80 美元/GPU-小时，Nvidia 用自身信用支撑融资并保留长期场地期权。Raschka 放出 Reasoning From Scratch 第二轮，详解 GRPO 的 clipped policy ratios、KL loss 与 format reward 等从零实现与稳定技巧。",
    "2026-10-09": "今日看点：Demis 说本周以 1.5 亿美元支持白宫与能源部的 Genesis Mission，公开报道里这是产业界合计约 24 亿美元算力与工具额度的一部分，Google 与 Anthropic 同档。SemiAnalysis 判断北京不会按前沿节奏放慢，规则管的是输出和应用，没有按训练算力触发的前沿义务；同日写 SK 海力士公开说 16-hi 很难，HBM 的 D2W 混合键合从何时变成是否。他们还转发金融时报，称 OpenAI 年化收入比此前信号少 200 亿美元。Bajarin 放出内存股定价报告，并说约 500 亿美元年化与自己的收入跟踪一致，仍在 S 曲线早期。",
    "2026-10-08": "今日看点：Demis 说 Isomorphic Labs 作为创始成员加入 CZI 的 Virtual Biology Initiative，要做开放的虚拟生物学资源，加速理解疾病和治疗。Jim Fan 认为人类会先解出黎曼猜想，才会通过「回家分不清是人还是机器人收拾」的物理图灵测试。SemiAnalysis 把 IREN 在加拿大不列颠哥伦比亚的 Prince George、Mackenzie 说成用户口中最差站点，并建议别再宣称已有托管集群；同日播客片段把 200 美元 Claude 套餐在 Opus 5.5 上折到约 1.2 万美元 API 等值。Simon 记了新 Claude Haiku 5.5 的定价，Stratechery 日更则写 Apple 与 LG、给其他人的房子，以及 Agent 标准和亚马逊。"
  },
  items: [
    {"date":"2026-10-12","author":"Andrej Karpathy","handle":"karpathy","topic":"模型能力 & 研究","title":"Karpathy：AI 能力理解漏斗加剧成尖锐分层","what":"Karpathy 重发 4 月旧帖，指出对 LLM 能力的共享理解鸿沟正在扩大，从两群人说话变成尖锐漏斗。约 60 亿人（~75%）几乎未触及 LLM；1-2 亿（~20%）随意使用免费层 ChatGPT 类产品，视为更好的搜索或写作助手；约 2000 万人（0.2%）专业在数学与代码领域使用前沿 agent，亲眼见证大型复杂项目可以一句 prompt 完成；最终仅约 5000 人（~0.00006%）内部接触到前沿级系统，看到千代理群协作数周完成超级项目、挖掘 zero-day、推进数学前沿。驱动因素包括野心规模、系统尖锐性（数字、可验证、高价值领域）以及接入层级。",
    "why":"把能力理解的分层从二元对立推进到漏斗型，量化了不同层级的人数与体验差距。",
    "impact":"讨论 AI 影响的人会更注意不同接入层级带来的认知偏差，而非统一评价模型强弱。",
    "time":"2026-10-12 03:12 +08",
    "url":"https://x.com/karpathy/status/2109361546505966046"},
    {"date":"2026-10-12","author":"SemiAnalysis","handle":"SemiAnalysis_","topic":"芯片 & 基础设施","title":"先进封装铜导热达限，Cu/diamond 复合材料登场","what":"SemiAnalysis 发帖指出先进封装中纯铜开始触及极限，纯 Cu 导热约 400 W/m·K，Semicon Taiwan 上 Cu/diamond 复合材料可达 ~800 W/m·K，帮助更快散热并减少局部热点。它们也能减少翘曲：硅的 CTE 约 3 ppm/K，铜约 17 ppm/K，Cu/diamond 可调到 ~6–10 ppm/K。挑战在于铜与钻石的界面，通常加入 Ti、Cr、Mo 或 W 形成碳化物键合层，但过厚会损害导热。业界正在用 PVD 或 CVD 预涂钻石颗粒以获得更好控制。",
    "why":"随着机架功率上升（如 2027 Kyber ~600 kW），热散板性能变得与芯片同等关键，铜已不足。",
    "impact":"封装材料供应链和散热方案会受到关注，可能影响高功率机架的可行性与成本。",
    "time":"2026-10-12 03:01 +08",
    "url":"https://x.com/SemiAnalysis_/status/2109358639030952117"},
    {"date":"2026-10-11","author":"SemiAnalysis","handle":"SemiAnalysis_","topic":"算力 & 硬件","title":"AI 建设资本需求远超背书，需分层风险融资","what":"SemiAnalysis 播客指出 AI 建设需要的资本远超背书能覆盖的范围。银行与保险不愿承担大风险，私募股权愿意冒险，私募信贷居中。解法是分层风险：损失先由股权承担，再到 B 片，再到 A2 部分，只有极端损失才会影响优先层。他们认为 NVIDIA 有能力支持约 46 GW，但远远不够，还有 240 GW 将要到来。贷贷市场必须进化，承担背书之外的风险，这是当下最大问题之一。",
    "why":"把 AI 基础设施的融资瓶颈从供给推到资本结构与风险分层。",
    "impact":"跟踪数据中心和 GPU 容量的人，会更关注非背书融资的可行性与价格。",
    "time":"2026-10-11 11:00 +08",
    "url":"https://x.com/SemiAnalysis_/status/2109116974705844313"},
    {"date":"2026-10-10","author":"SemiAnalysis","handle":"SemiAnalysis_","topic":"大公司 & 商业模式","title":"Lambda-Anthropic 交易实为四方结构","what":"SemiAnalysis 发帖拆解所谓 Lambda–Anthropic 交易，实为 Nvidia–Lambda–Hut 8–Anthropic 四方结构。Anthropic 在 2028 年获得约 350 MW 的 Rubin（VR NVL72）容量，单价约 5.80 美元/GPU-小时。Hut 8 签下两份 15 年三净租赁（Beacon Point，每份 98 亿美元），以 Nvidia 为租户，再以 6.129% 利率融资 42.5 亿美元 Baa2 票据；Nvidia 随后把租赁交给 Lambda。这是信用替代：建筑靠 Nvidia 的 AA 信用融资，出借人不会同意直接换租户，因此 Nvidia 很可能继续作为主要债务人直到项目去杠杆。Nvidia 在这笔交易上承载了 196 亿美元待重新分配的租赁。Nvidia 这么做是为了全利润销售约 11.5 万颗 Rubin、从 Lambda 收入中拿约 10% 分成，并在互连队列长达 4–7 年的情况下，拿到 704 MW 供电园区 7–15 年的期权。15 年租赁对 6 年 offtake 不是错配，而是期权。",
    "why":"把表面的云厂商对实验室协议，拆成 Nvidia 用自身信用支撑融资、销售 GPU 并保留长期场地期权的结构。",
    "impact":"看 neocloud 与前沿实验室算力协议的人，会先核对谁是真正的信用主体、租赁期限和 GPU 刷新责任落在哪一方。",
    "time":"2026-10-11 07:01 +08",
    "url":"https://x.com/SemiAnalysis_/status/2109056651231654310"},
    {"date":"2026-10-10","author":"Sebastian Raschka","handle":"rasbt","topic":"模型能力 & 研究","title":"Raschka：RLVR/GRPO 从零实现第二轮","what":"Raschka 发布 Reasoning From Scratch 系列第二轮视频：Reinforcement Learning with Verifiable Rewards (RLVR) round 2。内容覆盖 clipped policy ratios、KL loss term、format rewards 及其他 GRPO 技巧与坑，包括如何稳定训练、解读熵与优势、只对正确答案奖励格式、以及后续蒸馏方向。YouTube 链接同步放出。",
    "why":"把 GRPO 里容易让训练不稳或被奖励黑客的细节，从论文拆成可复现的从零实现与诊断步骤。",
    "impact":"自己做 verifiable reward 后训练的人，会先对照 clipped ratio 和 KL 项的实现，而不是直接套开源脚本。",
    "time":"2026-10-10 21:13 +08",
    "url":"https://x.com/rasbt/status/2108908657786355788"}
  ]
};
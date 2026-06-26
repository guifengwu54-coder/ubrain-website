export interface ProductBenefit {
  title: string;
  description: string;
  icon: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: 'focus' | 'motor' | 'migraine' | 'memory';
  categoryLabel: string;
  description: string;
  benefits: ProductBenefit[];
  targetAudience: string[];
  scientificPrinciple: {
    title: string;
    content: string;
    highlights: string[];
  };
  researchSupport: {
    institution: string;
    summary: string;
  }[];
  usageDirection: string;
  ingredients: string[];
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  color: string;
}

export const products: Product[] = [
  {
    id: 'ubrain-focus-memory',
    slug: 'ubrain-focus-memory',
    name: 'UBrain Focus & Memory',
    tagline: '提升专注力与记忆力，为年轻大脑提供日常预防保护',
    category: 'focus',
    categoryLabel: 'Performance 认知表现',
    description:
      'UBrain Focus & Memory 专为学生和年轻职场人士设计，帮助提升专注力与记忆力。研究表明，大脑退化可能在症状出现前 20 年就已开始——趁年轻开始预防，是对未来最好的投资。富含天然 ALA、EPA、DHA 和 L-苯丙氨酸，有效改善注意力和记忆力。',
    benefits: [
      { title: '提升专注力', description: '天然 ALA 与 DHA 支持前额叶皮层功能，延长有效专注时长', icon: '🎯' },
      { title: '增强记忆力', description: 'L-苯丙氨酸促进神经递质合成，优化记忆编码与提取', icon: '🧠' },
      { title: '年轻大脑预防', description: '在症状出现前 20 年开始保护脑细胞，延缓神经退行性变化', icon: '🛡️' },
      { title: '适合全年龄段', description: '5 岁至 50 岁均可使用，根据年龄调整剂量', icon: '👨‍👩‍👧‍👦' },
    ],
    targetAudience: ['学生 / 备考人群', '年轻职场人士', '高压工作者', '关注脑健康预防的人群'],
    scientificPrinciple: {
      title: '热带草本天然营养神经技术',
      content:
        'UBrain Focus & Memory 核心成分为马齿苋科（Portulacaceae）热带草本植物提取物，富含天然 α-亚麻酸（ALA）、二十碳五烯酸（EPA）、二十二碳六烯酸（DHA）和 L-苯丙氨酸。这些活性成分协同作用，为神经元提供必需营养，促进神经递质合成，增强脑细胞间信号传递效率，从而提升专注力与记忆力表现。',
      highlights: [
        '天然 ALA + EPA + DHA 三重营养',
        'L-苯丙氨酸促神经递质合成',
        '新加坡 GMP 认证工厂生产',
        '无兴奋剂 / 无成瘾性',
      ],
    },
    researchSupport: [
      { institution: '新加坡南洋理工大学（NTU）', summary: '2020-2023 年科研合作项目，通过细胞培养和动物模型验证了核心草本提取物的神经保护功效。' },
      { institution: 'The Biolabs Pte Ltd', summary: '专利配方的热带草本混合物，经过严格的第三方检测和质量控制。' },
    ],
    usageDirection: '5-16 岁：每次 1 粒，每日两次（早餐前和晚餐前）；17 岁及以上：每次 2 粒，每日两次（早餐前和晚餐前）。',
    ingredients: ['马齿苋科热带草本提取物（专利配方）', '天然 ALA（α-亚麻酸）', 'EPA（二十碳五烯酸）', 'DHA（二十二碳六烯酸）', 'L-苯丙氨酸'],
    price: 88,
    originalPrice: 108,
    rating: 4.8,
    reviewCount: 3240,
    imageUrl: '/images/ubrain-focus-memory.webp',
    color: '#1A7A5A',
  },
  {
    id: 'ubrain-motor-regain',
    slug: 'ubrain-motor-regain',
    name: 'UBrain Motor Regain 100',
    tagline: '运动功能恢复 · 对抗神经退行性疾病的最强配方',
    category: 'motor',
    categoryLabel: 'Health 健康恢复',
    description:
      'UBrain Motor Regain 100（原 UBrain 100）是我们最有效的产品，专为应对帕金森、痴呆和记忆力丧失等神经退行性疾病的症状而研发。核心成分马齿苋科草本植物不仅能补充大脑所需的关键营养，还能增加脑部血流量，补充因年龄增长而流失的多巴胺。适合 50 岁以上人群及神经退行性疾病患者。',
    benefits: [
      { title: '恢复运动功能', description: '增加脑部血流量 + 补充多巴胺，改善因年龄或疾病导致的运动功能障碍', icon: '🏃' },
      { title: '改善认知能力', description: '为脑细胞提供关键营养，逆转神经退行性变化带来的认知下降', icon: '🧠' },
      { title: '缓解震颤与平衡问题', description: '对帕金森患者的震颤、姿势不稳等症状有明显改善效果', icon: '⚖️' },
      { title: '提升记忆力', description: '促进海马体功能恢复，改善痴呆相关的记忆丧失', icon: '📚' },
    ],
    targetAudience: ['50 岁以上中老年人群', '帕金森病患者', '痴呆症患者', '记忆力衰退人群', '有神经退行性疾病家族史者'],
    scientificPrinciple: {
      title: '多巴胺补充 + 脑血流增强双通路技术',
      content:
        'UBrain Motor Regain 100 的核心有效成分为马齿苋科（Portulacaceae）草本植物叶提取物。该草本不仅能为大脑补充必需营养素，还能显著增加脑部血流量，补充因衰老而流失的多巴胺。通过这两条通路协同作用，有效逆转衰老和退行性疾病对大脑的影响。南洋理工大学（NTU）的研究合作项目已通过细胞和动物研究验证了其神经保护功效，人体临床试验正在筹备中。',
      highlights: [
        '补充因衰老流失的多巴胺',
        '增加脑部血流量',
        'NTU 科研合作验证',
        '新加坡 HSA GMP 认证',
      ],
    },
    researchSupport: [
      { institution: '新加坡南洋理工大学（NTU）', summary: '2020-2023 年科研合作，在细胞培养和动物模型中验证了提取物对运动功能和认知健康的显著改善效果。' },
      { institution: 'The Biolabs Pte Ltd', summary: '通过反馈收集发现，使用者在运动功能恢复和记忆改善方面表现出积极变化，人体验证数据持续积累中。' },
    ],
    usageDirection: '每次 2-3 粒，每日两次（早晚空腹服用）。神经退行性疾病患者（如帕金森）建议每次 3 粒，每日两次。通常持续使用一个月后开始看到改善。',
    ingredients: ['马齿苋科热带草本叶提取物（专利配方）', '天然多巴胺前体', 'ALA（α-亚麻酸）', 'DHA', '植物多酚'],
    price: 98,
    originalPrice: 128,
    rating: 4.9,
    reviewCount: 2890,
    imageUrl: '/images/ubrain-motor-regain.png',
    color: '#2D5F7E',
  },
  {
    id: 'ubrain-mg100',
    slug: 'ubrain-mg100',
    name: 'UBrain MG-100',
    tagline: '全天然偏头痛缓解方案 · 从根源减少发作频率与强度',
    category: 'migraine',
    categoryLabel: 'Migraine 偏头痛缓解',
    description:
      'UBrain MG-100 由马齿苋科和柏科热带草本提取物制成。灵感来源于 NTU 社区草药园——许多使用者反馈头痛状况显著改善，促成与 NTU 的科研合作开发这款产品。通过重新平衡脑内化学物质、清除可能引发偏头痛的有害物质，从根源减少偏头痛的发作频率和强度。适合急慢性偏头痛患者。',
    benefits: [
      { title: '减少偏头痛频率', description: '持续使用可显著降低偏头痛发作频率，非发作时才服用的临时止痛', icon: '📉' },
      { title: '缓解发作强度', description: '清除脑内致痛化学物质，减轻偏头痛发作时的疼痛程度', icon: '💆' },
      { title: '全天然无副作用', description: '马齿苋科 + 柏科草本提取，不含化学止痛成分', icon: '🌿' },
      { title: '脑化学平衡', description: '重新平衡脑内化学物质，从根本上改善偏头痛体质', icon: '⚗️' },
    ],
    targetAudience: ['慢性偏头痛患者', '偶发性偏头痛人群', '对化学止痛药不耐受者', '寻求天然替代方案的人群'],
    scientificPrinciple: {
      title: '脑化学平衡 + 致痛物质清除技术',
      content:
        'UBrain MG-100 采用马齿苋科（Portulacaceae）和柏科（Cupressaceae）热带草本配方。其作用机制是通过重新平衡脑内化学物质、清除已知会引发偏头痛的有害物质。来自 NTU 社区草药园的轶事证据触发了与 NTU 的正式科研合作，开发出这款靶向偏头痛的标准化产品。产品在新加坡 HSA GMP 认证工厂生产。',
      highlights: [
        '双草本家族协同配方',
        '平衡脑化学 + 清除致痛物质',
        'NTU 科研合作开发',
        '新加坡 HSA GMP 认证',
      ],
    },
    researchSupport: [
      { institution: '新加坡南洋理工大学（NTU）', summary: '基于 NTU 社区草药园使用者反馈启动的科研合作项目，开发出标准化 MG-100 配方。' },
      { institution: '用户反馈数据', summary: '大量轶事证据表明持续使用后偏头痛频率和强度显著降低，尤其是慢性偏头痛患者。' },
    ],
    usageDirection: '每次 2-4 粒，每日两次（早晚空腹服用）。慢性偏头痛需持续每日使用（非仅在疼痛时服用），以从根本上减少频率和强度。',
    ingredients: ['马齿苋科热带草本叶提取物', '柏科热带草本叶提取物', '天然 ALA（α-亚麻酸）', 'DHA', '柚皮苷（Naringin）', '类胡萝卜素'],
    price: 98,
    originalPrice: 128,
    rating: 4.7,
    reviewCount: 2156,
    imageUrl: '/images/ubrain-mg100.webp',
    color: '#7B3F5C',
  },
  {
    id: 'ubrain-memory-recovery',
    slug: 'ubrain-memory-recovery',
    name: 'UBrain Memory Recovery',
    tagline: '记忆恢复支持 · 延缓记忆衰退的双效方案',
    category: 'memory',
    categoryLabel: 'Memory 记忆恢复',
    description:
      'UBrain Memory Recovery 提供两种使用模式：解决方案模式帮助改善记忆恢复（尤其针对老年人群），预防模式帮助延缓记忆衰退。富含天然 ALA、EPA、DHA、L-苯丙氨酸、L-酪氨酸和 L-色氨酸，促进神经递质生成，帮助脑细胞维持有效通讯和精神清晰度。研究表明脑细胞退化可在症状出现前 20 年已开始，趁早预防至关重要。',
    benefits: [
      { title: '改善记忆恢复', description: '促进神经递质合成，帮助脑细胞间高效通讯，恢复记忆检索能力', icon: '🔄' },
      { title: '延缓记忆衰退', description: '在脑细胞退化 20 年窗口期内提供保护，延缓症状出现', icon: '⏳' },
      { title: '双模式灵活使用', description: '解决方案模式（每次 3 粒）与预防模式（每次 2 粒）按需选择', icon: '⚙️' },
      { title: '全年龄段适用', description: '老年人记忆恢复 + 中年人预防保护，覆盖不同需求', icon: '👴' },
    ],
    targetAudience: ['老年记忆衰退人群', '痴呆症早期患者', '有家族史的预防需求者', '中老年脑健康维护人群'],
    scientificPrinciple: {
      title: '神经递质促合成 + 脑细胞营养双通路',
      content:
        'UBrain Memory Recovery 含有丰富的天然氨基酸前体——L-苯丙氨酸、L-酪氨酸和 L-色氨酸，以及必需脂肪酸 ALA、EPA、DHA。L-苯丙氨酸和 L-酪氨酸是多巴胺和去甲肾上腺素的前体，L-色氨酸是血清素的前体。这些神经递质对维持脑细胞间通讯和精神清晰度至关重要。同时，ALA/EPA/DHA 为脑细胞膜提供结构支持，双通路协同促进记忆恢复并延缓衰退。',
      highlights: [
        'L-苯丙氨酸 + L-酪氨酸 + L-色氨酸三位氨基酸前体',
        'ALA + EPA + DHA 必需脂肪酸矩阵',
        '双模式灵活剂量（解决方案 3+3 / 预防 2+2）',
        '新加坡 HSA GMP 认证',
      ],
    },
    researchSupport: [
      { institution: '新加坡南洋理工大学（NTU）', summary: '2020-2023 年 The Biolabs 与 NTU 的科研合作项目验证了核心草本提取物的神经保护功效，人体临床试验筹备中。' },
      { institution: 'The Biolabs Pte Ltd', summary: '产品配方基于多年的研究和反馈收集，富含天然神经递质前体和必需脂肪酸。' },
    ],
    usageDirection: '解决方案模式：每次 3 粒，每日两次（早餐前和晚餐前）；预防模式：每次 2 粒，每日两次（早餐前和晚餐前）。空腹服用效果最佳。',
    ingredients: ['马齿苋科热带草本叶提取物', '唇形科热带草本叶提取物', 'ALA（α-亚麻酸）', 'EPA', 'DHA', 'L-苯丙氨酸', 'L-酪氨酸', 'L-色氨酸'],
    price: 98,
    originalPrice: 128,
    rating: 4.8,
    reviewCount: 1876,
    imageUrl: '/images/ubrain-memory-recovery.png',
    color: '#4A6FA5',
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getRelatedProducts(product: Product, count: number = 3): Product[] {
  return products
    .filter((p) => p.id !== product.id)
    .slice(0, count);
}

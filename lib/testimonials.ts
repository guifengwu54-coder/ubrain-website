export interface Testimonial {
  id: string;
  name: string;
  age: number;
  occupation: string;
  city: string;
  productId: string;
  productName: string;
  before: string;
  during: string;
  after: string;
  duration: string;
  rating: number;
  avatarUrl: string;
  tags: string[];
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Eric Tanoto',
    age: 35,
    occupation: 'IT 项目经理',
    city: 'Singapore',
    productId: 'ubrain-mg100',
    productName: 'UBrain MG-100',
    before:
      'I\'ve suffered from terrible migraines and brain fog since I was a child. The migraines would hit without warning, forcing me to cancel meetings and lie in a dark room for hours. I tried multiple prescription medications with limited success.',
    during:
      'In the months since I started taking UBrain, my migraines have almost all disappeared. The brain fog that used to hang over me every afternoon is gone. I can think clearly throughout the entire workday.',
    after:
      'I couldn\'t recommend this enough if you have similar issues. My quality of life has completely transformed. No more cancelled plans, no more dark rooms.',
    duration: '3 个月',
    rating: 5,
    avatarUrl: '',
    tags: ['Migraine', 'Brain Fog', 'Life-changing'],
  },
  {
    id: 't2',
    name: 'V Ramoo',
    age: 52,
    occupation: '高级工程师',
    city: 'Singapore',
    productId: 'ubrain-focus-memory',
    productName: 'UBrain Focus & Memory',
    before:
      'I started feeling lethargic and tired at work for the first time in my career. After decades of sharp performance, suddenly I couldn\'t stay focused through afternoon meetings. My productivity was slipping and I didn\'t know why.',
    during:
      'After struggling for a few months, I tried taking UBrain. Within the first few weeks, I noticed a gradual return of my mental sharpness. The afternoon slump became less severe.',
    after:
      'I\'ve been very happy with the results and improvements in my alertness. I feel like my old self again — sharp, focused, and energised throughout the workday.',
    duration: '2 个月',
    rating: 5,
    avatarUrl: '',
    tags: ['Energy', 'Focus', 'Career Performance'],
  },
  {
    id: 't3',
    name: 'Siew Hee Forde',
    age: 58,
    occupation: '退休护士',
    city: 'Ireland',
    productId: 'ubrain-motor-regain',
    productName: 'UBrain Motor Regain 100',
    before:
      'I\'ve been recovering from a brain aneurysm for 2 years. The aftermath was devastating — my short-term memory was unreliable, I felt constantly foggy, and worst of all I could only sleep 4-5 hours a night. The exhaustion was wearing me down.',
    during:
      'Taking UBrain has given me back my alertness and short-term memory. I started noticing changes within the first month — I could remember where I put things, recall conversations from earlier in the day.',
    after:
      'The biggest improvement since taking UBrain is that I can sleep a full 7-8 hours instead of the 4-5 I was getting. Quality sleep has accelerated my recovery in ways I didn\'t think possible.',
    duration: '4 个月',
    rating: 5,
    avatarUrl: '',
    tags: ['Brain Recovery', 'Sleep', 'Memory Restoration'],
  },
  {
    id: 't4',
    name: 'Anthony O\'Toole',
    age: 42,
    occupation: '企业培训师',
    city: 'Ireland',
    productId: 'ubrain-motor-regain',
    productName: 'UBrain Motor Regain 100',
    before:
      'My journey with anxiety has been a long and challenging one. As a 42-year-old, I had been struggling with anxiety for several years, significantly affecting my daily life, work performance, and relationships. I was on prescription medication, but often dealt with unwanted side effects.',
    during:
      'In June 2023, I started taking UBrain 100 — 3 capsules morning and night. Within two weeks, my mind felt clearer. By August, anxiety levels had noticeably reduced. By September, I felt confident enough to start reducing my prescription medication under my doctor\'s supervision.',
    after:
      'By October 2023, I was completely off prescription anxiety medication. I feel more like myself than I have in years. The clarity and calm I experience daily now is something I never thought possible.',
    duration: '5 个月',
    rating: 5,
    avatarUrl: '',
    tags: ['Anxiety Relief', 'Mental Clarity', 'Medication-free'],
  },
  {
    id: 't5',
    name: '李伟强',
    age: 68,
    occupation: '退休工程师',
    city: 'Singapore',
    productId: 'ubrain-memory-recovery',
    productName: 'UBrain Memory Recovery',
    before:
      '退休后发现自己越来越健忘——经常忘记孙子的名字，出门买菜会迷路。家人开始担心我是不是有痴呆的早期症状。那种"脑子不听使唤"的感觉让我很沮丧。',
    during:
      '女儿从医院了解到 UBrain 后给我买了 Memory Recovery。按照解决方案模式，每天早晚各 3 粒。大约一个月后，家人说我说话逻辑比之前清晰了，我自己也觉得脑子没那么"雾"了。',
    after:
      '坚持使用 3 个月后，社区医生评估我的 MMSE 评分有明显改善。现在能自己出门买菜了，还学会了用智能手机跟孙子视频。家人说像换了一个人。',
    duration: '3 个月',
    rating: 5,
    avatarUrl: '',
    tags: ['Memory Recovery', 'Elderly', 'Dementia Prevention'],
  },
  {
    id: 't6',
    name: 'Priya Menon',
    age: 29,
    occupation: '博士研究生',
    city: 'Singapore',
    productId: 'ubrain-focus-memory',
    productName: 'UBrain Focus & Memory',
    before:
      'PhD research demands intense focus for prolonged periods. I was struggling to maintain concentration during literature reviews and data analysis sessions. I\'d read the same paragraph three times without absorbing anything.',
    during:
      'A lab mate recommended UBrain Focus & Memory. Within 3 weeks, I noticed I could sustain deep work for 3-4 hour blocks without needing breaks. The mental fatigue that used to set in by 3pm was significantly reduced.',
    after:
      'My supervisor commented on the improvement in my research output quality. I submitted my first journal paper ahead of schedule. It\'s become an essential part of my research toolkit.',
    duration: '2 个月',
    rating: 5,
    avatarUrl: '',
    tags: ['Student', 'Research', 'Focus'],
  },
];

export function getTestimonialsByProduct(productId: string): Testimonial[] {
  return testimonials.filter((t) => t.productId === productId);
}

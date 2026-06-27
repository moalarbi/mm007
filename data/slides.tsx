import type { ReactNode } from "react";
import { FlowDiagram } from "@/components/FlowDiagram";
import { HighlightCard } from "@/components/HighlightCard";
import { ProductCard } from "@/components/ProductCard";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { Timeline } from "@/components/Timeline";

export type Slide = {
  id: number;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  content: ReactNode;
};

const serviceGroups = [
  {
    title: "التسويق والنمو",
    items: [
      "الاستراتيجية والمحتوى",
      "إدارة الحسابات الرقمية",
      "الحملات الموسمية والإطلاقات",
      "إدارة الحملات الإعلانية",
      "التقارير وتحسين الأداء"
    ]
  },
  {
    title: "المواقع والتجارب الرقمية",
    items: [
      "مواقع تعريفية للشركات",
      "صفحات هبوط للحملات",
      "متاجر إلكترونية",
      "صفحات خدمات ونماذج تواصل",
      "تحسين تجربة المستخدم وربط التحليلات"
    ]
  },
  {
    title: "الحلول التقنية وأنظمة الأعمال",
    items: [
      "تطبيقات الجوال",
      "CRM لإدارة العملاء",
      "ERP أو أنظمة تشغيل داخلية",
      "أنظمة الطلبات والمتابعة",
      "لوحات البيانات والأتمتة"
    ]
  },
  {
    title: "التشغيل والدعم المستمر",
    items: [
      "صيانة ودعم للمواقع والتطبيقات",
      "إدارة وتشغيل الأنظمة",
      "تحديثات وتحسينات دورية",
      "تدريب الفرق عند الحاجة",
      "تقارير تشغيل ومتابعة"
    ]
  }
];

const products = [
  {
    title: "باقة الإطلاق الرقمي",
    englishLabel: "Digital Launch Package",
    audience: "للشركات الجديدة أو المشاريع التي تحتاج إطلاقًا سريعًا",
    items: [
      "صفحة هبوط أو موقع بسيط",
      "إعداد الحسابات الرقمية",
      "محتوى إطلاق",
      "حملة إعلانية أولى",
      "ربط واتساب والتحليلات"
    ],
    goal: "إدخال العميل للسوق بسرعة وبشكل منظم."
  },
  {
    title: "بناء المواقع والمتاجر",
    englishLabel: "Website & E-commerce Build",
    audience: "للشركات التي تحتاج موقعًا أو متجرًا قابلًا للتسويق والبيع",
    items: [
      "موقع تعريفي",
      "صفحات خدمات",
      "متجر إلكتروني عند الحاجة",
      "نماذج تواصل",
      "ربط واتساب والتحليلات",
      "تهيئة أساسية لمحركات البحث"
    ],
    goal: "بناء أصل رقمي يمكن استخدامه في الحملات والمبيعات."
  },
  {
    title: "إدارة النمو الشهري",
    englishLabel: "Growth Retainer",
    audience: "للشركات التي تحتاج تشغيلًا تسويقيًا شهريًا",
    items: [
      "محتوى شهري",
      "تصاميم",
      "حملات إعلانية",
      "تقارير أداء",
      "تحسين مستمر",
      "اجتماع مراجعة شهري"
    ],
    goal: "بناء علاقة تشغيل شهرية وإيراد متكرر."
  },
  {
    title: "تنظيم العملاء والعمليات",
    englishLabel: "Business Systems Sprint",
    audience: "للشركات التي لديها عملاء وطلبات لكنها لا تملك نظام متابعة واضح",
    items: [
      "إعداد CRM",
      "تنظيم مراحل البيع",
      "أتمتة متابعة بسيطة",
      "Dashboard للإدارة",
      "نظام طلبات أو عمليات مبسط",
      "تدريب الفريق"
    ],
    goal: "ربط التسويق بالمبيعات والتشغيل."
  }
];

const timeline = [
  {
    title: "التأسيس",
    subtitle: "إعداد الأساس",
    items: [
      "اعتماد الاسم والتمركز",
      "تجهيز الهوية الأساسية",
      "تجهيز صفحة هبوط",
      "تجهيز بروفايل مختصر",
      "تجهيز 4 منتجات رئيسية",
      "تجهيز العروض التجارية",
      "إعداد نظام متابعة العملاء",
      "بناء قائمة عملاء مستهدفين"
    ]
  },
  {
    title: "البيع الأولي",
    subtitle: "اختبار السوق",
    items: [
      "بدء التواصل مع العملاء",
      "عقد اجتماعات",
      "تقديم Digital Growth & Systems Audit",
      "إرسال عروض",
      "إغلاق أول عقود",
      "تنفيذ أول مشاريع",
      "اختبار جودة التنفيذ"
    ]
  },
  {
    title: "إثبات النموذج",
    subtitle: "قرار مبني على أرقام",
    items: [
      "قياس الربحية",
      "تحديد الخدمة الأكثر طلبًا",
      "بناء أول دراسة حالة",
      "محاولة تحويل أول عميل إلى عقد شهري",
      "تجهيز تقرير أداء للإدارة",
      "تحديد قرار المرحلة التالية"
    ]
  }
];

function CapabilityGrid({
  items
}: {
  items: { title: string; description: string }[];
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
      {items.map((item) => (
        <article
          key={item.title}
          className="print-card border border-line bg-white p-5"
        >
          <h3 className="text-lg font-extrabold text-ink">{item.title}</h3>
          <p className="print-muted mt-3 text-sm font-medium leading-7 text-body">
            {item.description}
          </p>
        </article>
      ))}
    </div>
  );
}

function MetricChips({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="print-card border border-line bg-white px-3 py-2 text-xs font-bold text-body"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function SimpleList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-2 text-sm leading-7 text-body">
      {items.map((item) => (
        <li key={item} className="print-muted flex gap-2">
          <span className="mt-2.5 h-2 w-2 shrink-0 rotate-45 border border-champagne bg-paper" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function GroupedRevenueCards({
  groups
}: {
  groups: { title: string; items: string[] }[];
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {groups.map((group) => (
        <div
          key={group.title}
          className="print-card border border-line bg-paper p-4"
        >
          <h3 className="text-base font-extrabold text-ink">{group.title}</h3>
          <div className="mt-3">
            <SimpleList items={group.items} />
          </div>
        </div>
      ))}
    </div>
  );
}

export const slides: Slide[] = [
  {
    id: 1,
    eyebrow: "تصور إداري مختصر",
    title: "تأسيس شركة تسويق ونمو رقمي وحلول تقنية للأعمال في الرياض",
    subtitle:
      "تصور إداري مختصر لبناء شركة تجمع بين التسويق الرقمي، المنتجات التقنية، أنظمة الأعمال، وقياس الأداء لمساعدة الشركات على جذب العملاء وتنظيم المتابعة وتحسين النتائج.",
    content: (
      <div className="grid h-full content-between gap-6">
        <CapabilityGrid
          items={[
            {
              title: "التسويق والنمو",
              description: "محتوى، حملات، وإدارة قنوات رقمية."
            },
            {
              title: "المواقع والمتاجر",
              description:
                "مواقع إلكترونية، صفحات هبوط، ومتاجر قابلة للتسويق والبيع."
            },
            {
              title: "تطبيقات الجوال",
              description:
                "تطبيقات وخدمات رقمية حسب احتياج العميل ونطاق المشروع."
            },
            {
              title: "أنظمة الأعمال",
              description:
                "CRM، ERP، وأنظمة داخلية لتنظيم العملاء والعمليات."
            },
            {
              title: "القياس والتحسين",
              description: "Dashboards، تقارير، وتحسين مستمر للأداء."
            }
          ]}
        />
        <HighlightCard title="الهدف">
          الهدف هو بناء شركة لا تقدم خدمات تسويقية منفصلة فقط، بل تبني منظومة
          رقمية تساعد العميل على جذب العملاء، إدارتهم، وقياس النتائج.
        </HighlightCard>
      </div>
    )
  },
  {
    id: 2,
    title: "الفكرة الرئيسية",
    subtitle:
      "النموذج المقترح يبني للعميل منظومة نمو رقمية وتشغيلية، بدل تنفيذ خدمات متفرقة.",
    content: (
      <div className="grid gap-5">
        <p className="print-muted max-w-5xl text-xl font-semibold leading-10 text-ink">
          الفكرة ليست تأسيس وكالة تسويق تقليدية تقدم تصاميم وإعلانات فقط، بل
          بناء شركة تجمع بين التسويق، التقنية، وأنظمة الأعمال لمساعدة الشركات
          على تحويل الاهتمام إلى عملاء، والعملاء إلى مبيعات قابلة للقياس.
        </p>
        <div className="grid gap-3 lg:grid-cols-5">
          {[
            {
              title: "جذب الانتباه",
              description: "محتوى، حملات، إعلانات، ورسائل تسويقية."
            },
            {
              title: "استقبال الطلب",
              description:
                "موقع، صفحة هبوط، نموذج تواصل، واتساب، أو متجر إلكتروني."
            },
            {
              title: "تنظيم المتابعة",
              description: "CRM، Pipeline، تصنيف العملاء، وأتمتة المتابعة."
            },
            {
              title: "قياس الأداء",
              description: "تقارير، Dashboards، مؤشرات أداء، وتحليل النتائج."
            },
            {
              title: "التحسين والنمو",
              description:
                "تحسين الحملات، تحسين الصفحات، تطوير الأنظمة، ورفع جودة العملاء."
            }
          ].map((step, index) => (
            <article
              key={step.title}
              className="print-card relative border border-line bg-white p-5"
            >
              <span className="print-accent text-sm font-extrabold text-champagne">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-extrabold text-ink">
                {step.title}
              </h3>
              <p className="print-muted mt-3 text-sm font-medium leading-7 text-body">
                {step.description}
              </p>
              {index < 4 ? (
                <span className="print-accent absolute -left-3 top-1/2 hidden -translate-y-1/2 text-lg font-black text-champagne lg:block">
                  ←
                </span>
              ) : null}
            </article>
          ))}
        </div>
        <HighlightCard>
          القيمة ليست في تنفيذ الإعلان أو التصميم فقط، بل في بناء المسار الكامل
          من جذب العميل حتى قياس النتيجة وتحسينها.
        </HighlightCard>
      </div>
    )
  },
  {
    id: 3,
    title: "الفجوة في السوق",
    subtitle:
      "كثير من الشركات تنفق على التسويق، لكنها لا تملك منظومة واضحة تحوّل هذا الإنفاق إلى عملاء منظمين، مبيعات قابلة للمتابعة، وقرارات مبنية على بيانات.",
    content: (
      <div className="grid gap-5">
        <div className="print-card border-y border-line py-4 text-center">
          <p className="text-lg font-bold leading-8 text-ink">
            المشكلة ليست في وجود التسويق، بل في ضعف الربط بين التسويق، استقبال
            الطلبات، متابعة العملاء، والقياس.
          </p>
          <p className="mt-2 text-sm font-bold text-champagne">
            من الإعلان إلى الطلب إلى المتابعة إلى القرار
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {[
            {
              title: "تسويق بدون قياس",
              items: [
                "حملات إعلانية دون مؤشرات واضحة",
                "عدم وضوح تكلفة العميل المحتمل",
                "تقارير لا تساعد الإدارة على اتخاذ القرار"
              ]
            },
            {
              title: "قنوات رقمية غير فعّالة",
              items: [
                "حسابات تواصل نشطة دون أثر تجاري مباشر",
                "مواقع لا تساعد على توليد العملاء",
                "صفحات لا تقود العميل إلى إجراء واضح"
              ]
            },
            {
              title: "متابعة عملاء غير منظمة",
              items: [
                "اعتماد كبير على واتساب دون تنظيم",
                "ضعف في متابعة العملاء المحتملين",
                "غياب CRM أو Pipeline للمبيعات"
              ]
            },
            {
              title: "تشغيل غير مترابط",
              items: [
                "أنظمة داخلية غير مرتبطة بالتسويق والمبيعات",
                "ضياع الطلبات أو بطء المتابعة",
                "غياب لوحات بيانات موحدة للإدارة"
              ]
            }
          ].map((group) => (
            <article
              key={group.title}
              className="print-card border border-line bg-white p-5"
            >
              <h3 className="text-xl font-extrabold text-ink">
                {group.title}
              </h3>
              <div className="mt-5">
                <SimpleList items={group.items} />
              </div>
            </article>
          ))}
        </div>
        <HighlightCard>
          هذه الفجوة تخلق فرصة لشركة تقدم منظومة تجمع بين التسويق، القنوات
          الرقمية، المبيعات، والأنظمة التشغيلية في نموذج واحد قابل للقياس
          والتحسين.
        </HighlightCard>
      </div>
    )
  },
  {
    id: 4,
    title: "التموضع المقترح",
    subtitle:
      "شركة تسويق ونمو رقمي وحلول تقنية تساعد الشركات في الرياض على جذب العملاء، تنظيم متابعتهم، وربط التسويق بالمبيعات والتشغيل من خلال منظومة متكاملة قابلة للقياس والتحسين.",
    content: (
      <div className="grid gap-5">
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="print-card border border-line bg-white p-6">
            <p className="print-accent text-xs font-bold text-champagne">
              كيف نتموضع في السوق؟
            </p>
            <h3 className="mt-3 text-2xl font-extrabold text-ink">
              الشركة المقترحة
            </h3>
            <div className="mt-6">
              <SimpleList
                items={[
                  "شريك نمو رقمي وتشغيلي",
                  "يجمع بين التسويق والتقنية",
                  "يساعد على جذب العملاء وتنظيم المتابعة",
                  "يربط التسويق بالمبيعات والعمليات",
                  "يبني أنظمة واضحة قابلة للقياس",
                  "يركز على التحسين المستمر"
                ]}
              />
            </div>
          </article>
          <article className="print-card border border-line bg-white p-6">
            <h3 className="text-2xl font-extrabold text-ink">
              الفرق عن الوكالة التقليدية
            </h3>
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <section>
                <h4 className="text-base font-extrabold text-ink">
                  الوكالة التقليدية
                </h4>
                <div className="mt-4">
                  <SimpleList
                    items={[
                      "منشورات ومحتوى",
                      "حملات إعلانية",
                      "تقارير أداء بسيطة",
                      "خدمات منفصلة",
                      "تركيز على التنفيذ فقط"
                    ]}
                  />
                </div>
              </section>
              <section className="border-t border-line pt-6 md:border-r md:border-t-0 md:pr-6 lg:border-r-0 lg:border-t lg:pr-0 xl:border-r xl:border-t-0 xl:pr-6">
                <h4 className="text-base font-extrabold text-ink">
                  النموذج المقترح
                </h4>
                <div className="mt-4">
                  <SimpleList
                    items={[
                      "استراتيجية نمو",
                      "صفحات هبوط ومواقع",
                      "CRM ومتابعة عملاء",
                      "Dashboards وتقارير",
                      "حلول تقنية وأنظمة داخلية عند الحاجة",
                      "ربط التسويق بالتشغيل والنتائج"
                    ]}
                  />
                </div>
              </section>
            </div>
          </article>
        </div>
        <HighlightCard>
          الشركة لا تبيع خدمات تسويقية منفصلة فقط، بل تبني منظومة تساعد العميل
          على جذب العملاء، متابعتهم، وقياس النتائج بشكل أوضح وأفضل.
        </HighlightCard>
      </div>
    )
  },
  {
    id: 5,
    title: "الخدمات الرئيسية",
    subtitle:
      "تقدم الشركة أربع ركائز خدمات رئيسية تجمع بين التسويق، القنوات الرقمية، الحلول التقنية، وأنظمة الأعمال.",
    content: (
      <div className="grid gap-4 lg:grid-cols-2">
        {serviceGroups.map((service, index) => (
          <div key={service.title}>
            <ServiceCard
              title={service.title}
              items={service.items}
              index={index + 1}
            />
          </div>
        ))}
      </div>
    )
  },
  {
    id: 6,
    title: "المنتجات الأولية ومسار المشاريع المخصصة",
    subtitle:
      "بدل إطلاق كل الخدمات من البداية، يتم البدء بمنتجات واضحة وسهلة البيع والتنفيذ، مع إبقاء المشاريع التقنية الأكبر ضمن مسار مخصص حسب نطاق كل عميل.",
    content: (
      <div className="grid gap-5">
        <div className="grid gap-4 lg:grid-cols-2">
          {products.map((product) => (
            <ProductCard
              key={product.title}
              title={product.title}
              englishLabel={product.englishLabel}
              audience={product.audience}
              items={product.items}
              goal={product.goal}
            />
          ))}
        </div>
        <section className="print-card border border-line bg-ink p-6 text-paper">
          <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <h3 className="print-accent text-base font-extrabold text-beige">
                مسار المشاريع التقنية المخصصة
              </h3>
              <p className="print-muted mt-4 text-base font-medium leading-8 text-paper">
                تطبيقات الجوال، ERP الكامل، بوابات العملاء، الأنظمة الإدارية
                الداخلية، والتكاملات التقنية لا تُطرح كباقات بداية ثابتة، بل
                يتم تنفيذها كمشاريع مخصصة عند وجود عميل واضح، نطاق محدد،
                وميزانية مناسبة.
              </p>
            </div>
            <ul className="grid gap-2 text-sm font-bold leading-7 text-paper sm:grid-cols-2 lg:grid-cols-1">
              {[
                "تطبيقات جوال",
                "ERP وأنظمة إدارية داخلية",
                "بوابات عملاء",
                "أنظمة حجز أو طلبات",
                "تكاملات API",
                "Dashboards متقدمة",
                "دعم وصيانة بعد الإطلاق"
              ].map((item) => (
                <li key={item} className="print-muted flex gap-2">
                  <span className="mt-2.5 h-2 w-2 shrink-0 rotate-45 border border-beige bg-ink" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    )
  },
  {
    id: 7,
    title: "نموذج التشغيل المقترح",
    subtitle:
      "النموذج يعتمد على بناء شركة خفيفة ومنظمة في البداية، بدل تحميل المشروع بتكاليف عالية من أول يوم.",
    content: (
      <div className="grid gap-6">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="print-card border border-line bg-white p-5">
            <SectionTitle title="الأساس التشغيلي" />
            <div className="mt-5">
              <SimpleList
                items={[
                  "فريق أساسي صغير لإدارة العملاء والمبيعات والجودة",
                  "الاعتماد على موردين متخصصين عند الحاجة",
                  "تحويل التكاليف الإنتاجية إلى تكاليف مرتبطة بالمشاريع",
                  "ضبط الجودة داخليًا قبل تسليم أي عمل للعميل",
                  "بناء إجراءات واضحة للتسعير والتنفيذ والمتابعة",
                  "التوسع في التوظيف فقط بعد إثبات الطلب"
                ]}
              />
            </div>
          </div>
          <div className="print-card border border-champagne bg-white p-5">
            <SectionTitle title="ما يجب أن يبقى داخل الشركة" />
            <div className="mt-5">
              <SimpleList
                items={[
                  "علاقة العميل",
                  "المبيعات والعروض",
                  "التسعير",
                  "إدارة نطاق المشروع",
                  "إدارة المشاريع",
                  "مراجعة الجودة",
                  "التسليم النهائي",
                  "تحويل العملاء إلى عقود شهرية"
                ]}
              />
            </div>
          </div>
        </div>
        <FlowDiagram
          steps={[
            "إدارة داخلية",
            "موردون متخصصون",
            "مراجعة جودة",
            "تسليم للعميل"
          ]}
        />
        <HighlightCard>
          التنفيذ يمكن دعمه خارجيًا، لكن العلاقة والجودة والقرار التجاري يجب أن
          تكون تحت سيطرة الشركة.
        </HighlightCard>
      </div>
    )
  },
  {
    id: 8,
    title: "النموذج التجاري ومسار جلب العملاء",
    content: (
      <div className="grid gap-5">
        <div className="grid gap-4 xl:grid-cols-[0.95fr_0.95fr_1.3fr]">
          <div className="print-card border border-line bg-white p-5">
            <SectionTitle label="01" title="كيف نصل للعميل؟" />
            <div className="mt-5">
              <SimpleList
                items={[
                  "العلاقات المباشرة مع أصحاب القرار",
                  "فريق مبيعات وتطوير أعمال ميداني في الرياض",
                  "زيارات واجتماعات مباشرة مع الشركات المستهدفة",
                  "LinkedIn والتواصل المباشر",
                  "الإحالات والشراكات",
                  "محتوى تعليمي متخصص",
                  "Digital Growth & Systems Audit"
                ]}
              />
            </div>
          </div>
          <div className="print-card border border-line bg-white p-5">
            <SectionTitle label="02" title="كيف نحقق الإيراد؟" />
            <div className="mt-5">
              <SimpleList
                items={[
                  "مشاريع إطلاق رقمية",
                  "تطوير مواقع وصفحات هبوط",
                  "إنشاء متاجر إلكترونية",
                  "تطوير تطبيقات جوال",
                  "إعداد CRM وأنظمة متابعة",
                  "تنفيذ ERP أو أنظمة إدارية داخلية حسب نطاق العميل",
                  "لوحات بيانات وتقارير",
                  "استشارات تسويقية وتجارية وتشغيلية"
                ]}
              />
            </div>
          </div>
          <div className="print-card border border-line bg-white p-5">
            <SectionTitle label="03" title="كيف نحوله إلى دخل متكرر؟" />
            <div className="mt-5">
              <GroupedRevenueCards
                groups={[
                  {
                    title: "تشغيل التسويق",
                    items: [
                      "عقود إدارة تسويق شهرية",
                      "إدارة الحملات الإعلانية شهريًا",
                      "إدارة المحتوى الشهري",
                      "SEO وتحسين الظهور"
                    ]
                  },
                  {
                    title: "الدعم التقني",
                    items: [
                      "دعم وصيانة المواقع والمتاجر",
                      "دعم وصيانة تطبيقات الجوال",
                      "دعم فني شهري بنظام SLA"
                    ]
                  },
                  {
                    title: "إدارة الأنظمة",
                    items: [
                      "إدارة وتشغيل CRM",
                      "إدارة وتشغيل ERP أو الأنظمة الداخلية",
                      "أتمتة WhatsApp والبريد",
                      "تدريب ومتابعة فرق العميل"
                    ]
                  },
                  {
                    title: "التقارير والتحسين",
                    items: [
                      "تقارير أداء شهرية ولوحات بيانات",
                      "تحسين مستمر للحملات وصفحات الهبوط",
                      "استشارات نمو شهرية للإدارة"
                    ]
                  }
                ]}
              />
            </div>
          </div>
        </div>
        <HighlightCard title="Digital Growth & Systems Audit">
          <p>
            مراجعة مختصرة توضح للعميل وضعه التسويقي الحالي، أداء الموقع أو
            الصفحات، طريقة استقبال الطلبات، طريقة متابعة العملاء، هل يحتاج CRM
            أو نظام داخلي، وفرص تحسين المبيعات والتشغيل خلال أول 30 إلى 90 يوم.
          </p>
          <p className="mt-4 text-beige">
            العلاقة تبدأ بمراجعة مجانية أو اجتماع تشخيصي، ثم تتحول إلى مشروع
            تأسيسي، ثم إلى عقد تشغيل أو دعم شهري متكرر.
          </p>
        </HighlightCard>
      </div>
    )
  },
  {
    id: 9,
    title: "خطة أول 90 يوم ومؤشرات النجاح",
    content: (
      <div className="grid gap-6">
        <Timeline items={timeline} />
        <div className="print-card border border-line bg-white p-5">
          <SectionTitle title="مؤشرات النجاح" />
          <div className="mt-4">
            <MetricChips
              items={[
                "عدد العملاء المحتملين",
                "عدد الاجتماعات",
                "عدد العروض",
                "عدد العقود",
                "متوسط قيمة العقد",
                "نسبة الإغلاق",
                "هامش الربح",
                "الإيراد الشهري المتكرر",
                "جودة التسليم",
                "رضا العملاء",
                "صافي الربح",
                "التدفق النقدي"
              ]}
            />
          </div>
        </div>
      </div>
    )
  },
  {
    id: 10,
    title: "دوري المقترح والقرار المطلوب",
    content: (
      <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="grid gap-5">
          <div className="print-card border border-champagne bg-white p-5">
            <SectionTitle title="دوري المقترح" />
            <p className="print-muted mt-4 text-lg font-bold leading-8 text-ink">
              إدارة المشروع من الناحية التجارية والتشغيلية.
            </p>
            <div className="mt-5">
              <SimpleList
                items={[
                  "بناء نموذج الشركة",
                  "تجهيز الخدمات والباقات",
                  "قيادة المبيعات الأولية",
                  "مقابلة العملاء",
                  "بناء العلاقات",
                  "إدارة العروض",
                  "اختيار الموردين",
                  "إدارة المشاريع",
                  "ضبط الجودة",
                  "متابعة الأرقام والربحية",
                  "تقديم تقارير دورية للإدارة"
                ]}
              />
            </div>
          </div>
          <HighlightCard>
            القيمة التي أقدمها ليست فقط تنفيذ مهام، بل بناء نموذج تشغيل قابل
            للبيع والتوسع.
          </HighlightCard>
        </div>
        <div className="grid gap-5">
          <div className="print-card border border-line bg-white p-5">
            <SectionTitle title="المطلوب من الإدارة" />
            <div className="mt-5">
              <SimpleList
                items={[
                  "الموافقة على دراسة النموذج بشكل جدي",
                  "اعتماد مرحلة تأسيس أولية لمدة 90 يوم",
                  "تحديد ميزانية تشغيل أولية",
                  "اعتماد المنتجات الأربعة كبداية",
                  "تفويض إدارة التنفيذ الأولي",
                  "تقييم النتائج بعد نهاية أول 90 يوم"
                ]}
              />
            </div>
          </div>
          <div className="print-card border border-line bg-white p-5">
            <SectionTitle title="قرار ما بعد 90 يوم" />
            <MetricChips
              items={[
                "التوسع",
                "تعديل النموذج",
                "إعادة التركيز على خدمة أو قطاع محدد",
                "إيقاف أو تأجيل المشروع إذا لم تظهر مؤشرات إيجابية"
              ]}
            />
          </div>
          <HighlightCard title="التوصية النهائية">
            البدء بنموذج خفيف لمدة 90 يوم لاختبار السوق، إغلاق أول عملاء، قياس
            الربحية، ثم اتخاذ قرار مبني على نتائج فعلية.
          </HighlightCard>
        </div>
      </div>
    )
  }
];

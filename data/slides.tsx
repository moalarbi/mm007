import type { ReactNode } from "react";
import { ComparisonCard } from "@/components/ComparisonCard";
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

const operatingFlow = [
  "إعلان",
  "صفحة هبوط",
  "نموذج أو واتساب",
  "CRM",
  "Dashboard",
  "نظام متابعة داخلي"
];

const serviceGroups = [
  {
    title: "التسويق والمحتوى",
    items: [
      "إدارة حسابات التواصل",
      "خطط محتوى شهرية",
      "كتابة النصوص التسويقية",
      "تصاميم رقمية",
      "محتوى قصير للفيديو",
      "حملات إطلاق ومواسم"
    ]
  },
  {
    title: "الإعلانات الرقمية",
    items: [
      "إعلانات Meta",
      "إعلانات Snapchat",
      "إعلانات Google",
      "إعلانات TikTok",
      "تحسين الحملات",
      "تقارير أداء"
    ]
  },
  {
    title: "المواقع والمتاجر وصفحات الهبوط",
    items: [
      "مواقع تعريفية للشركات",
      "صفحات هبوط للحملات",
      "متاجر إلكترونية",
      "صفحات خدمات",
      "ربط واتساب والنماذج والتحليلات",
      "تحسين تجربة المستخدم"
    ]
  },
  {
    title: "تطبيقات الجوال والمنتجات الرقمية",
    items: [
      "تطبيقات iOS وAndroid",
      "تطبيقات طلبات وخدمات",
      "بوابات عملاء Client Portals",
      "واجهات استخدام UI/UX",
      "ربط التطبيقات بالموقع أو CRM",
      "دعم وصيانة بعد الإطلاق"
    ]
  },
  {
    title: "أنظمة الأعمال الداخلية",
    items: [
      "CRM لإدارة العملاء",
      "ERP مبسط لإدارة العمليات",
      "Sales Pipeline",
      "أنظمة إدارة الطلبات",
      "أنظمة الموارد البشرية أو الحضور عند الحاجة",
      "الفواتير والمتابعة",
      "Dashboards للإدارة",
      "أتمتة رسائل واتساب أو البريد"
    ]
  }
];

const products = [
  {
    title: "Digital Launch Package",
    audience: "للشركات الجديدة أو المشاريع التي تحتاج إطلاق سريع",
    items: [
      "صفحة هبوط أو موقع بسيط",
      "إعداد الحسابات الرقمية",
      "محتوى إطلاق",
      "حملة إعلانية أولى",
      "ربط واتساب والتحليلات"
    ]
  },
  {
    title: "Website & E-commerce Build",
    audience: "للشركات التي تحتاج موقعًا أو متجرًا قابلًا للتسويق والبيع",
    items: [
      "موقع تعريفي",
      "صفحات خدمات",
      "متجر إلكتروني عند الحاجة",
      "نماذج تواصل",
      "ربط واتساب والتحليلات",
      "تهيئة أساسية لمحركات البحث"
    ]
  },
  {
    title: "Growth Retainer",
    audience: "للشركات التي تحتاج إدارة تسويق شهرية",
    items: [
      "محتوى شهري",
      "تصاميم",
      "حملات إعلانية",
      "تقارير أداء",
      "تحسين مستمر",
      "اجتماع مراجعة شهري"
    ]
  },
  {
    title: "Business Systems Sprint",
    audience: "للشركات التي لديها عملاء وطلبات وعمليات لكنها لا تملك نظام متابعة واضح",
    items: [
      "إعداد CRM",
      "تنظيم مراحل البيع",
      "أتمتة متابعة بسيطة",
      "Dashboard للإدارة",
      "نظام داخلي مبسط للطلبات أو العمليات",
      "تدريب الفريق"
    ]
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

function BulletGrid({ items }: { items: string[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <div
          key={item}
          className="print-card border border-line bg-white p-4 text-sm font-bold leading-7 text-ink"
        >
          {item}
        </div>
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

export const slides: Slide[] = [
  {
    id: 1,
    eyebrow: "تصور إداري مختصر",
    title: "تأسيس شركة تسويق ونمو رقمي وحلول تقنية",
    subtitle:
      "تصور أولي لبناء شركة تقدم حلولًا متكاملة تجمع بين التسويق الرقمي، الحملات، المواقع الإلكترونية، تطبيقات الجوال، أنظمة CRM وERP، ولوحات البيانات، بهدف ربط التسويق بالمبيعات والتشغيل.",
    content: (
      <div className="grid h-full content-between gap-6">
        <BulletGrid
          items={[
            "التسويق الرقمي والمحتوى والحملات",
            "المواقع الإلكترونية وصفحات الهبوط والمتاجر",
            "تطبيقات الجوال والمنتجات الرقمية",
            "CRM وERP والأنظمة الإدارية الداخلية",
            "لوحات البيانات والأتمتة وربط التسويق بالمبيعات"
          ]}
        />
        <FlowDiagram steps={operatingFlow} />
        <HighlightCard title="الهدف">
          الهدف هو بناء شركة لا تقدم خدمات تسويقية فقط، بل تبني منظومة رقمية
          تساعد العميل على جذب العملاء، إدارتهم، وتحسين الأداء التجاري والتشغيلي.
        </HighlightCard>
      </div>
    )
  },
  {
    id: 2,
    title: "الفكرة الرئيسية",
    content: (
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="grid content-start gap-5">
          <p className="print-muted max-w-3xl text-xl font-semibold leading-10 text-ink">
            الفكرة ليست تأسيس وكالة تسويق تقليدية تقدم تصاميم وإعلانات فقط.
            الفكرة هي بناء شركة تجمع بين التسويق والتقنية، وتساعد الشركات على
            بناء منظومة نمو رقمية وتشغيلية.
          </p>
          <HighlightCard>
            النموذج المقترح لا يبيع “إعلانات وتصاميم” فقط، بل يبني للعميل
            منظومة نمو رقمية وتشغيلية.
          </HighlightCard>
        </div>
        <div className="print-card border border-line bg-white p-5">
          <SectionTitle label="القدرات" title="ماذا تبني الشركة للعميل؟" />
          <div className="mt-5 grid gap-3">
            {[
              "بناء حضور رقمي واضح",
              "جذب عملاء محتملين بجودة أفضل",
              "إنشاء مواقع وصفحات هبوط فعالة",
              "تطوير متاجر إلكترونية أو تطبيقات عند الحاجة",
              "تنظيم استقبال ومتابعة العملاء",
              "بناء CRM أو نظام داخلي لإدارة العمليات",
              "ربط التسويق بالمبيعات",
              "قياس النتائج عبر تقارير ولوحات بيانات"
            ].map((item) => (
              <div
                key={item}
                className="print-card border border-line bg-paper px-4 py-3 text-sm font-bold text-body"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "الفجوة في السوق",
    subtitle:
      "كثير من الشركات لديها نشاط تسويقي، لكنها لا تملك منظومة واضحة تربط التسويق بالنتائج.",
    content: (
      <div className="grid gap-6">
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {[
            "حملات إعلانية بدون قياس واضح",
            "حسابات تواصل نشطة بدون أثر تجاري مباشر",
            "مواقع إلكترونية لا تساعد على توليد العملاء",
            "اعتماد كبير على واتساب بدون تنظيم",
            "ضعف في متابعة العملاء المحتملين",
            "غياب CRM أو Pipeline للمبيعات",
            "عدم وضوح تكلفة العميل المحتمل",
            "عدم وجود تقارير تساعد الإدارة على اتخاذ القرار",
            "أنظمة داخلية غير مترابطة مع التسويق والمبيعات"
          ].map((point) => (
            <article
              key={point}
              className="print-card border border-line bg-white p-4 text-sm font-bold leading-7 text-body"
            >
              {point}
            </article>
          ))}
        </div>
        <HighlightCard>
          هذه الفجوة تخلق فرصة لشركة تقدم التسويق كمنظومة نمو مرتبطة بالمبيعات
          والتشغيل والتقنية.
        </HighlightCard>
      </div>
    )
  },
  {
    id: 4,
    title: "التموضع المقترح",
    subtitle:
      "شركة تسويق ونمو رقمي وحلول تقنية تساعد الشركات في الرياض على جذب العملاء، تنظيم متابعتهم، وتحويل التسويق إلى نتائج قابلة للقياس.",
    content: (
      <div className="grid gap-6">
        <MetricChips
          items={[
            "النمو",
            "المبيعات",
            "المتابعة",
            "القياس",
            "تحسين الأداء",
            "بناء أنظمة تسويقية وتشغيلية واضحة",
            "ربط التسويق بالتقنية والعمليات"
          ]}
        />
        <div className="grid gap-4 lg:grid-cols-2">
          <ComparisonCard
            title="النموذج التقليدي"
            items={["منشورات", "إعلانات", "تقارير بسيطة", "خدمات منفصلة"]}
          />
          <ComparisonCard
            title="النموذج المقترح"
            featured
            items={[
              "استراتيجية نمو",
              "صفحات هبوط",
              "CRM",
              "متابعة عملاء",
              "Dashboards",
              "تحسين مستمر",
              "أنظمة داخلية عند الحاجة"
            ]}
          />
        </div>
        <HighlightCard>
          الشركة لا تبيع “منشورات وإعلانات” فقط، بل تبيع نظامًا يساعد العميل
          على تحقيق نتائج أفضل.
        </HighlightCard>
      </div>
    )
  },
  {
    id: 5,
    title: "الخدمات الرئيسية",
    subtitle:
      "الشركة تقدم خمس مجموعات خدمات رئيسية، تغطي التسويق، القنوات الرقمية، المنتجات التقنية، وأنظمة الأعمال.",
    content: (
      <div className="grid gap-4 lg:grid-cols-6">
        {serviceGroups.map((service, index) => (
          <div
            key={service.title}
            className={index < 3 ? "lg:col-span-2" : "lg:col-span-3"}
          >
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
    title: "المنتجات التي نبدأ بها",
    subtitle:
      "بدل إطلاق كل الخدمات من البداية، يتم البدء بمنتجات واضحة قابلة للبيع والتنفيذ والقياس.",
    content: (
      <div className="grid gap-5">
        <div className="grid gap-4 lg:grid-cols-2">
          {products.map((product) => (
            <ProductCard
              key={product.title}
              title={product.title}
              audience={product.audience}
              items={product.items}
            />
          ))}
        </div>
        <HighlightCard title="ملاحظة تنفيذية">
          تطبيقات الجوال والـ ERP الكامل لا يتم إطلاقها كباقة أولى إلا عند
          وجود عميل واضح ونطاق محدد، لأنها مشاريع أكبر وتحتاج تقديرًا منفصلًا.
        </HighlightCard>
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
    title: "النموذج التجاري وجلب العملاء",
    content: (
      <div className="grid gap-5">
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="print-card border border-line bg-white p-5">
            <SectionTitle title="مصادر الإيراد" />
            <div className="mt-5">
              <SimpleList
                items={[
                  "مشاريع إطلاق رقمية",
                  "عقود تسويق شهرية",
                  "إدارة حملات إعلانية",
                  "تطوير مواقع وصفحات هبوط",
                  "إنشاء متاجر إلكترونية",
                  "تطوير تطبيقات جوال",
                  "إعداد CRM وأنظمة متابعة",
                  "تنفيذ ERP أو أنظمة إدارية داخلية حسب نطاق العميل",
                  "لوحات بيانات وتقارير",
                  "صيانة ودعم شهري",
                  "استشارات تسويقية وتجارية وتشغيلية"
                ]}
              />
            </div>
          </div>
          <div className="print-card border border-line bg-white p-5">
            <SectionTitle title="الإيراد المتكرر" />
            <div className="mt-5">
              <SimpleList
                items={[
                  "عقود تسويق شهرية",
                  "دعم وصيانة للمواقع والتطبيقات",
                  "إدارة CRM",
                  "تقارير شهرية",
                  "تحسين مستمر للحملات والأنظمة"
                ]}
              />
            </div>
          </div>
          <div className="print-card border border-line bg-white p-5">
            <SectionTitle title="جلب العملاء" />
            <div className="mt-5">
              <SimpleList
                items={[
                  "العلاقات المباشرة",
                  "فريق مبيعات وتطوير أعمال ميداني في الرياض",
                  "زيارات واجتماعات مباشرة مع الشركات المستهدفة",
                  "LinkedIn",
                  "التواصل المباشر مع أصحاب القرار",
                  "الإحالات",
                  "الشراكات",
                  "محتوى تعليمي متخصص",
                  "عرض مراجعة مجانية للأداء الرقمي والتشغيلي"
                ]}
              />
            </div>
          </div>
        </div>
        <HighlightCard title="Digital Growth & Systems Audit">
          مراجعة مختصرة توضح للعميل وضعه التسويقي الحالي، أداء الموقع أو الصفحات،
          طريقة استقبال الطلبات، طريقة متابعة العملاء، هل يحتاج CRM أو نظام داخلي،
          وفرص تحسين المبيعات والتشغيل خلال أول 30 إلى 90 يوم.
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

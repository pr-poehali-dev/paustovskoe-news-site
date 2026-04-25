import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "about", label: "О муниципальном образовании" },
  { id: "news", label: "Новости" },
  { id: "announcements", label: "Объявления" },
  { id: "services", label: "Услуги для населения" },
  { id: "contacts", label: "Контакты" },
];

const NEWS = [
  {
    id: 4,
    date: "18 апреля 2026",
    category: "Культура",
    title: "День Победы: программа праздничных мероприятий",
    excerpt: "Администрация муниципального образования приглашает жителей на праздничные мероприятия, посвящённые 81-летию Победы в Великой Отечественной войне.",
  },
];

const ANNOUNCEMENTS = [
  {
    id: 1,
    date: "9 мая 2026",
    title: "День Победы — праздничные мероприятия",
    text: "Приглашаем всех жителей на торжественные мероприятия, посвящённые 81-летию Победы в Великой Отечественной войне. Подробная программа будет опубликована дополнительно.",
    urgent: true,
  },
];

const SERVICES = [
  { icon: "FileText", title: "Выдача справок и документов", desc: "Справки о составе семьи, выписки из похозяйственной книги и иные документы" },
  { icon: "Home", title: "Вопросы ЖКХ", desc: "Обращения по вопросам коммунального хозяйства, благоустройства и дорог" },
  { icon: "Users", title: "Социальная поддержка", desc: "Льготы, субсидии, меры социальной поддержки для граждан" },
  { icon: "Building2", title: "Земельные отношения", desc: "Аренда, предоставление и оформление земельных участков" },
  { icon: "ShieldCheck", title: "Муниципальный контроль", desc: "Обращения по вопросам муниципального контроля и надзора" },
  { icon: "MapPin", title: "Градостроительство", desc: "Согласование строительства, разрешительная документация" },
];

const EVENTS = [
  { day: 9, month: "мая", label: "День Победы — праздничные мероприятия", type: "holiday" },
];

const EVENT_COLORS: Record<string, string> = {
  holiday: "bg-red-100 border-red-400 text-red-800",
  meeting: "bg-blue-100 border-blue-400 text-blue-800",
  deadline: "bg-amber-100 border-amber-400 text-amber-800",
  event: "bg-green-100 border-green-400 text-green-800",
};

const EVENT_LABELS: Record<string, string> = {
  holiday: "Праздник",
  meeting: "Заседание",
  deadline: "Срок",
  event: "Мероприятие",
};

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--gov-gray)", fontFamily: "'Golos Text', sans-serif" }}>

      {/* Top info bar */}
      <div className="text-white text-xs py-1.5 px-4" style={{ backgroundColor: "var(--gov-blue-dark)" }}>
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <span>⚠ Данный сайт является демонстрационным, новостным и не является официальным</span>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Icon name="Phone" size={12} />
              8 (800) 000-00-00
            </span>
            <span className="flex items-center gap-1">
              <Icon name="Mail" size={12} />
              admin@mo-official.ru
            </span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b-4" style={{ borderBottomColor: "var(--gov-gold)", borderBottomWidth: 4, borderBottomStyle: "solid" }}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-full border-2 flex items-center justify-center flex-shrink-0"
              style={{ borderColor: "var(--gov-blue)", backgroundColor: "#eaf0f7" }}>
              <Icon name="Shield" size={32} color="var(--gov-blue)" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest mb-0.5" style={{ color: "var(--gov-gold)" }}>
                Российская Федерация
              </div>
              <h1 className="font-bold leading-tight" style={{ color: "var(--gov-blue)", fontFamily: "'PT Serif', serif", fontSize: "1.2rem" }}>
                Администрация муниципального образования
              </h1>
              <div className="text-sm mt-0.5" style={{ color: "#6b7a8d" }}>
                Демонстрационный сайт · Не является официальным
              </div>
            </div>
            <div className="ml-auto hidden md:flex flex-col overflow-hidden rounded" style={{ width: 48, height: 32 }}>
              <div className="flex-1 bg-white border border-gray-200" />
              <div className="flex-1" style={{ backgroundColor: "#0039A6" }} />
              <div className="flex-1" style={{ backgroundColor: "#D52B1E" }} />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav style={{ backgroundColor: "var(--gov-blue)" }}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="hidden md:flex">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="px-4 py-3 text-sm font-medium transition-all"
                  style={{
                    color: activeSection === item.id ? "var(--gov-gold)" : "rgba(255,255,255,0.88)",
                    borderBottom: activeSection === item.id ? "3px solid var(--gov-gold)" : "3px solid transparent",
                    background: activeSection === item.id ? "rgba(0,0,0,0.2)" : "transparent",
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="md:hidden flex items-center justify-between py-2">
              <span className="text-white text-sm font-medium">Навигация</span>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white p-1">
                <Icon name={mobileMenuOpen ? "X" : "Menu"} size={22} />
              </button>
            </div>
            {mobileMenuOpen && (
              <div className="md:hidden flex flex-col pb-2">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="text-left px-4 py-2.5 text-sm text-white"
                    style={{ background: activeSection === item.id ? "rgba(0,0,0,0.2)" : "transparent", borderBottom: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 space-y-10">

        {/* HOME */}
        <section id="home" className="animate-fade-in">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 relative overflow-hidden rounded" style={{ minHeight: 320 }}>
              <img
                src="https://cdn.poehali.dev/projects/eaeeba9a-30c8-4641-9495-5b23cc817f7d/files/da5540ba-8e1b-4a51-86f2-b15a3e8e9029.jpg"
                alt="Здание администрации"
                className="w-full h-full object-cover"
                style={{ minHeight: 320 }}
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(15,37,64,0.75) 0%, transparent 65%)" }} />
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-white text-2xl font-bold leading-tight mb-2" style={{ fontFamily: "'PT Serif', serif" }}>
                  Добро пожаловать<br />на официальный сайт
                </h2>
                <p className="text-white/80 text-sm max-w-xs">
                  Здесь вы найдёте актуальную информацию о жизни муниципального образования, услугах и событиях
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="bg-white p-4 rounded" style={{ borderLeft: "4px solid var(--gov-blue)" }}>
                <div className="text-xs uppercase tracking-wide mb-1" style={{ color: "var(--gov-gold)" }}>Гражданам</div>
                <div className="text-sm font-semibold mb-3" style={{ color: "var(--gov-blue)" }}>Популярные услуги</div>
                {["Справка о составе семьи", "Земельный участок", "Социальная льгота"].map((s) => (
                  <button key={s} onClick={() => scrollTo("services")}
                    className="w-full text-left text-sm py-1.5 flex items-center justify-between hover:opacity-70 transition-opacity"
                    style={{ borderBottom: "1px solid var(--gov-border)", color: "var(--gov-blue-light)" }}>
                    <span>{s}</span>
                    <Icon name="ChevronRight" size={14} />
                  </button>
                ))}
              </div>
              <div className="bg-white p-4 rounded" style={{ borderLeft: "4px solid var(--gov-gold)" }}>
                <div className="text-xs uppercase tracking-wide mb-2" style={{ color: "var(--gov-gold)" }}>Приём граждан</div>
                <div className="text-xs space-y-2" style={{ color: "var(--gov-blue)" }}>
                  {[
                    { name: "Фунтов Д.С., глава администрации", day: "Каждый вторник", time: "09:00 – 12:00" },
                    { name: "Федоров С.А., зам. главы по ЖКХ", day: "Каждый понедельник", time: "09:00 – 12:00" },
                    { name: "Сергеева С.В., зам. главы по соц. вопросам", day: "Каждый понедельник", time: "09:00 – 12:00" },
                  ].map((r) => (
                    <div key={r.name} className="pb-1.5" style={{ borderBottom: "1px solid var(--gov-border)" }}>
                      <div className="font-medium leading-tight">{r.name}</div>
                      <div className="text-gray-500 mt-0.5">{r.day}, {r.time}</div>
                    </div>
                  ))}
                  <div className="text-gray-500 pt-0.5">
                    Специалисты: пн–чт 09:00–16:30, пятница — неприёмный день
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about">
          <SectionTitle title="О муниципальном образовании" />
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white p-6 rounded border" style={{ borderColor: "var(--gov-border)" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "var(--gov-blue)", fontFamily: "'PT Serif', serif" }}>
                История и общие сведения
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Муниципальное образование расположено в живописном районе Российской Федерации.
                Образовано в соответствии с Федеральным законом «Об общих принципах организации
                местного самоуправления в Российской Федерации». На территории МО проживает
                около 4 500 человек.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Администрация осуществляет исполнительно-распорядительные функции по вопросам
                местного значения, обеспечивает выполнение муниципальных программ развития,
                координирует деятельность предприятий и учреждений на территории МО.
              </p>
              <div className="mt-5 grid grid-cols-3 gap-4 pt-4" style={{ borderTop: "1px solid var(--gov-border)" }}>
                {[
                  { num: "4 500", label: "Жителей" },
                  { num: "12", label: "Населённых пунктов" },
                  { num: "2006", label: "Год образования" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold" style={{ color: "var(--gov-blue)", fontFamily: "'PT Serif', serif" }}>{stat.num}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded border" style={{ borderColor: "var(--gov-border)" }}>
                <div className="text-xs uppercase tracking-wide mb-2 font-semibold" style={{ color: "var(--gov-gold)" }}>Глава администрации</div>
                <div className="text-sm font-bold" style={{ color: "var(--gov-blue)" }}>Фунтов Денис Сергеевич</div>
                <div className="text-xs text-gray-500 mt-1">Глава местной администрации</div>
              </div>
              <div className="bg-white p-4 rounded border" style={{ borderColor: "var(--gov-border)" }}>
                <div className="text-xs uppercase tracking-wide mb-2 font-semibold" style={{ color: "var(--gov-gold)" }}>Режим работы</div>
                <div className="text-xs text-gray-700 space-y-1">
                  {[
                    { d: "Пн – Чт", t: "09:00 – 16:30" },
                    { d: "Пятница", t: "неприёмный день" },
                    { d: "Сб – Вс", t: "Выходной" },
                    { d: "Обед", t: "12:00 – 13:00" },
                  ].map((r) => (
                    <div key={r.d} className="flex justify-between py-0.5" style={{ borderBottom: "1px solid var(--gov-border)" }}>
                      <span>{r.d}</span>
                      <span className="font-medium">{r.t}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-4 rounded border" style={{ borderColor: "var(--gov-border)" }}>
                <div className="text-xs uppercase tracking-wide mb-2 font-semibold" style={{ color: "var(--gov-gold)" }}>Нормативная база</div>
                {["Устав МО", "Бюджет на 2026 год", "Муниципальные программы", "Решения Совета депутатов"].map((doc) => (
                  <div key={doc} className="flex items-center gap-2 py-1.5 text-sm cursor-pointer hover:opacity-70 transition-opacity"
                    style={{ borderBottom: "1px solid var(--gov-border)", color: "var(--gov-blue-light)" }}>
                    <Icon name="FileText" size={13} />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* RECEPTION SCHEDULE */}
        <section id="reception">
          <SectionTitle title="Приём граждан" />
          <div className="bg-white rounded border overflow-hidden" style={{ borderColor: "var(--gov-border)" }}>
            <div className="px-5 py-3 text-sm font-medium text-white" style={{ backgroundColor: "var(--gov-blue)" }}>
              График приёма населения работниками администрации муниципального образования Паустовское
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: "#eaf0f7" }}>
                    <th className="text-left px-4 py-2.5 font-semibold" style={{ color: "var(--gov-blue)", borderBottom: "1px solid var(--gov-border)", width: "50%" }}>Фамилия, имя, отчество / должность</th>
                    <th className="text-left px-4 py-2.5 font-semibold" style={{ color: "var(--gov-blue)", borderBottom: "1px solid var(--gov-border)" }}>Дни приёма</th>
                    <th className="text-left px-4 py-2.5 font-semibold" style={{ color: "var(--gov-blue)", borderBottom: "1px solid var(--gov-border)" }}>Время приёма</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Фунтов Денис Сергеевич", role: "глава местной администрации", day: "Каждый вторник", time: "09:00 – 12:00" },
                    { name: "Федоров Сергей Анатольевич", role: "заместитель главы по вопросам ЖКХ", day: "Каждый понедельник", time: "09:00 – 12:00" },
                    { name: "Сергеева Светлана Валентиновна", role: "заместитель главы по социальным вопросам", day: "Каждый понедельник", time: "09:00 – 12:00" },
                    { name: "Власова Ольга Вячеславовна", role: "главный специалист по вопросам ЖКХ", day: "Каждый понедельник", time: "09:00 – 12:00" },
                    { name: "Павлова Галина Николаевна", role: "заведующий отделом по работе с населением", day: "Каждый понедельник", time: "09:00 – 12:00" },
                  ].map((row, i) => (
                    <tr key={row.name} style={{ backgroundColor: i % 2 === 1 ? "#f7f9fb" : "white" }}>
                      <td className="px-4 py-3" style={{ borderBottom: "1px solid var(--gov-border)" }}>
                        <div className="font-medium" style={{ color: "var(--gov-blue)" }}>{row.name}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{row.role}</div>
                      </td>
                      <td className="px-4 py-3 text-gray-700" style={{ borderBottom: "1px solid var(--gov-border)" }}>{row.day}</td>
                      <td className="px-4 py-3 font-medium" style={{ borderBottom: "1px solid var(--gov-border)", color: "var(--gov-blue)" }}>{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-3 text-xs text-gray-600 space-y-1" style={{ backgroundColor: "#f7f9fb", borderTop: "1px solid var(--gov-border)" }}>
              <div>Приём граждан специалистами ведётся <strong>постоянно в течение рабочего дня</strong> с 09:00 до 16:30 (перерыв с 12:00 до 13:00)</div>
              <div style={{ color: "var(--gov-red)" }}>Пятница — неприёмный день. Суббота, воскресенье — выходной день.</div>
            </div>
          </div>
        </section>

        {/* NEWS */}
        <section id="news">
          <SectionTitle title="Новости" />
          <div className="grid md:grid-cols-2 gap-4">
            {NEWS.map((item) => (
              <div key={item.id}
                className="bg-white rounded border cursor-pointer hover:shadow-md transition-shadow"
                style={{ borderColor: "var(--gov-border)" }}>
                <div className="px-4 py-2 flex items-center justify-between" style={{ borderBottom: "1px solid var(--gov-border)" }}>
                  <span className="text-xs px-2 py-0.5 rounded font-medium text-white" style={{ backgroundColor: "var(--gov-blue)" }}>
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-500">{item.date}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm mb-2 leading-snug" style={{ color: "var(--gov-blue)", fontFamily: "'PT Serif', serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.excerpt}</p>
                  <button className="mt-3 text-xs font-medium flex items-center gap-1 hover:gap-2 transition-all" style={{ color: "var(--gov-blue-light)" }}>
                    Читать полностью <Icon name="ArrowRight" size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <button className="text-sm font-medium px-6 py-2 border rounded transition-colors hover:opacity-80"
              style={{ borderColor: "var(--gov-blue)", color: "var(--gov-blue)" }}>
              Все новости
            </button>
          </div>
        </section>

        {/* ANNOUNCEMENTS + CALENDAR */}
        <section id="announcements">
          <SectionTitle title="Объявления" />
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-3">
              {ANNOUNCEMENTS.map((item) => (
                <div key={item.id}
                  className="bg-white rounded border cursor-pointer hover:shadow-sm transition-shadow p-4"
                  style={{ borderLeft: `4px solid ${item.urgent ? "var(--gov-red)" : "var(--gov-blue)"}`, borderTop: `1px solid var(--gov-border)`, borderRight: `1px solid var(--gov-border)`, borderBottom: `1px solid var(--gov-border)` }}>
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-sm font-bold" style={{ color: "var(--gov-blue)" }}>
                      {item.urgent && (
                        <span className="inline-block mr-2 text-xs px-1.5 py-0.5 rounded text-white font-medium" style={{ backgroundColor: "var(--gov-red)" }}>
                          Важно
                        </span>
                      )}
                      {item.title}
                    </h3>
                    <span className="text-xs text-gray-400 whitespace-nowrap">{item.date}</span>
                  </div>
                  <p className="text-xs text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Calendar of events */}
            <div className="bg-white rounded border" style={{ borderColor: "var(--gov-border)" }}>
              <div className="px-4 py-3 flex items-center gap-2" style={{ backgroundColor: "var(--gov-blue)", borderBottom: "1px solid var(--gov-border)" }}>
                <Icon name="Calendar" size={16} color="white" />
                <span className="text-sm font-semibold text-white">Календарь событий</span>
              </div>
              <div className="p-3 space-y-2">
                {EVENTS.map((ev, i) => (
                  <div key={i} className={`flex items-start gap-2 p-2 rounded text-xs ${EVENT_COLORS[ev.type]}`}
                    style={{ borderLeft: "2px solid" }}>
                    <div className="flex-shrink-0 text-center" style={{ minWidth: 36 }}>
                      <div className="text-lg font-bold leading-none">{ev.day}</div>
                      <div className="text-xs opacity-75">{ev.month}</div>
                    </div>
                    <div>
                      <div className="font-medium leading-tight">{ev.label}</div>
                      <div className="opacity-70 mt-0.5">{EVENT_LABELS[ev.type]}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-4 py-2" style={{ borderTop: "1px solid var(--gov-border)" }}>
                <div className="flex flex-wrap gap-2 text-xs">
                  {Object.entries(EVENT_LABELS).map(([key, label]) => (
                    <span key={key} className={`px-2 py-0.5 rounded ${EVENT_COLORS[key]}`}>{label}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services">
          <SectionTitle title="Услуги для населения" />
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
            {SERVICES.map((svc) => (
              <div key={svc.title}
                className="bg-white rounded border p-5 cursor-pointer hover:shadow-md transition-all group"
                style={{ borderColor: "var(--gov-border)" }}>
                <div className="w-10 h-10 rounded flex items-center justify-center mb-3"
                  style={{ backgroundColor: "#eaf0f7" }}>
                  <Icon name={svc.icon} size={20} color="var(--gov-blue)" />
                </div>
                <h3 className="text-sm font-bold mb-1.5" style={{ color: "var(--gov-blue)", fontFamily: "'PT Serif', serif" }}>
                  {svc.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">{svc.desc}</p>
                <div className="mt-3 flex items-center gap-1 text-xs font-medium" style={{ color: "var(--gov-blue-light)" }}>
                  Подробнее <Icon name="ArrowRight" size={12} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACTS */}
        <section id="contacts">
          <SectionTitle title="Контакты" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-white p-5 rounded border" style={{ borderColor: "var(--gov-border)" }}>
                <h3 className="font-bold mb-4 text-sm uppercase tracking-wide" style={{ color: "var(--gov-blue)" }}>
                  Реквизиты администрации
                </h3>
                <div className="space-y-3 text-sm">
                  {[
                    { icon: "MapPin", label: "Адрес", val: "123456, РФ, [Субъект], [МО], ул. Советская, д. 1" },
                    { icon: "Phone", label: "Телефон приёмной", val: "8 (800) 000-00-00" },
                    { icon: "Phone", label: "Факс", val: "8 (800) 000-00-01" },
                    { icon: "Mail", label: "Электронная почта", val: "admin@mo-official.ru" },
                    { icon: "Globe", label: "Сайт", val: "www.mo-official.ru" },
                  ].map((row) => (
                    <div key={row.label} className="flex gap-3 pb-3" style={{ borderBottom: "1px solid var(--gov-border)" }}>
                      <Icon name={row.icon} size={16} color="var(--gov-gold)" />
                      <div>
                        <div className="text-xs text-gray-400 mb-0.5">{row.label}</div>
                        <div style={{ color: "var(--gov-blue)" }}>{row.val}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded border" style={{ borderColor: "var(--gov-border)" }}>
                <h3 className="font-bold mb-4 text-sm uppercase tracking-wide" style={{ color: "var(--gov-blue)" }}>
                  Отделы и подразделения
                </h3>
                <div className="space-y-0 text-sm">
                  {[
                    { name: "Отдел по работе с населением", phone: "доб. 101" },
                    { name: "Отдел ЖКХ и благоустройства", phone: "доб. 102" },
                    { name: "Отдел земельных отношений", phone: "доб. 103" },
                    { name: "Отдел социальной защиты", phone: "доб. 104" },
                    { name: "Отдел градостроительства", phone: "доб. 105" },
                    { name: "Финансовый отдел", phone: "доб. 106" },
                  ].map((dep) => (
                    <div key={dep.name} className="flex justify-between items-center py-2 text-xs"
                      style={{ borderBottom: "1px solid var(--gov-border)" }}>
                      <span style={{ color: "var(--gov-blue)" }}>{dep.name}</span>
                      <span className="font-medium text-gray-500">{dep.phone}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded border" style={{ backgroundColor: "#eaf0f7", borderColor: "var(--gov-border)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="MessageSquare" size={16} color="var(--gov-blue)" />
                  <span className="text-sm font-bold" style={{ color: "var(--gov-blue)" }}>Обратная связь</span>
                </div>
                <p className="text-xs text-gray-600 mb-3">Направьте обращение — ответим в течение 30 дней</p>
                <button className="w-full text-sm font-medium py-2 px-4 rounded text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "var(--gov-blue)" }}>
                  Написать обращение
                </button>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="mt-10 text-white py-8" style={{ backgroundColor: "var(--gov-blue-dark)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 pb-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.2)" }}>
            <div className="md:col-span-2">
              <div className="font-bold text-base mb-2" style={{ fontFamily: "'PT Serif', serif" }}>
                Администрация муниципального образования
              </div>
              <p className="text-xs text-white/60 leading-relaxed">
                Официальный сайт органа местного самоуправления. Все права защищены.
              </p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider mb-3 font-semibold" style={{ color: "var(--gov-gold)" }}>Разделы</div>
              {NAV_ITEMS.map((item) => (
                <button key={item.id} onClick={() => scrollTo(item.id)}
                  className="block text-xs text-white/70 hover:text-white transition-colors mb-1.5 text-left">
                  {item.label}
                </button>
              ))}
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider mb-3 font-semibold" style={{ color: "var(--gov-gold)" }}>Контакты</div>
              <div className="text-xs text-white/70 space-y-1.5">
                <div>8 (800) 000-00-00</div>
                <div>admin@mo-official.ru</div>
                <div className="pt-1">Пн–Чт: 08:30 – 17:30</div>
                <div>Пт: 08:30 – 16:30</div>
              </div>
            </div>
          </div>
          <div className="pt-4 flex flex-wrap justify-between items-center gap-2 text-xs text-white/40">
            <span>© 2026 Администрация муниципального образования. Все права защищены.</span>
            <span>Политика конфиденциальности</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="h-6 w-1 rounded" style={{ backgroundColor: "var(--gov-gold)" }} />
      <h2 className="text-xl font-bold" style={{ color: "var(--gov-blue)", fontFamily: "'PT Serif', serif" }}>
        {title}
      </h2>
      <div className="flex-1 h-px" style={{ backgroundColor: "var(--gov-border)" }} />
    </div>
  );
}
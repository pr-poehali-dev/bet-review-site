import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const bookmakers = [
    {
      id: 1,
      name: "1xBet",
      rating: 4.5,
      bonus: "До 26 000₽ на первый депозит",
      features: ["Широкая линия", "Высокие коэффициенты", "Live-ставки"],
      reviews: 1243
    },
    {
      id: 2,
      name: "Fonbet",
      rating: 4.7,
      bonus: "Фрибет 2500₽ новым игрокам",
      features: ["Легальная БК", "Быстрые выплаты", "Мобильное приложение"],
      reviews: 2156
    },
    {
      id: 3,
      name: "Parimatch",
      rating: 4.3,
      bonus: "Бонус 100% до 15 000₽",
      features: ["Киберспорт", "Казино", "Удобный интерфейс"],
      reviews: 987
    },
    {
      id: 4,
      name: "BetBoom",
      rating: 4.6,
      bonus: "Кешбэк до 10%",
      features: ["Российская лицензия", "Промокоды", "Акции каждую неделю"],
      reviews: 1654
    }
  ];

  const userReviews = [
    {
      id: 1,
      bookmaker: "1xBet",
      author: "Алексей М.",
      rating: 5,
      date: "15 января 2025",
      text: "Отличная букмекерская контора! Пользуюсь уже больше года. Широкая линия, много видов ставок, быстрые выплаты. Особенно нравятся live-ставки — можно успеть поставить даже во время матча.",
      verified: true
    },
    {
      id: 2,
      bookmaker: "Fonbet",
      author: "Мария К.",
      rating: 5,
      date: "12 января 2025",
      text: "Fonbet — моя любимая БК. Легальная компания, всё официально. Деньги выводятся быстро, обычно в течение часа. Служба поддержки отвечает моментально. Рекомендую!",
      verified: true
    },
    {
      id: 3,
      bookmaker: "Parimatch",
      author: "Дмитрий П.",
      rating: 4,
      date: "10 января 2025",
      text: "Хорошая контора для ставок на киберспорт. Коэффициенты средние, но зато большой выбор турниров по Dota 2 и CS2. Бонусная программа могла быть получше, но в целом доволен.",
      verified: false
    },
    {
      id: 4,
      bookmaker: "BetBoom",
      author: "Сергей Л.",
      rating: 5,
      date: "8 января 2025",
      text: "BetBoom радует акциями и промокодами. Каждую неделю что-то новое! Кешбэк реально возвращают, проверял. Интерфейс удобный, всё интуитивно понятно даже новичку.",
      verified: true
    },
    {
      id: 5,
      bookmaker: "1xBet",
      author: "Игорь В.",
      rating: 4,
      date: "5 января 2025",
      text: "Пользуюсь 1xBet для ставок на футбол. Коэффициенты выше, чем у конкурентов. Иногда бывают задержки с выводом, но в целом всё хорошо. Мобильное приложение работает стабильно.",
      verified: true
    }
  ];

  const faqs = [
    {
      question: "Как выбрать надёжную букмекерскую контору?",
      answer: "При выборе БК обращайте внимание на наличие лицензии, отзывы реальных пользователей, скорость выплат, качество службы поддержки и разнообразие способов пополнения счёта. Легальные российские БК имеют лицензию ФНС."
    },
    {
      question: "Что такое верифицированный отзыв?",
      answer: "Верифицированные отзывы оставляют пользователи, которые подтвердили свою личность и факт использования букмекерской конторы. Такие отзывы помечены специальным значком и заслуживают большего доверия."
    },
    {
      question: "Как получить бонус от букмекера?",
      answer: "Обычно бонусы предоставляются новым пользователям при регистрации и первом депозите. Условия получения бонуса указаны на сайте БК. Важно внимательно читать правила отыгрыша бонусов."
    },
    {
      question: "Можно ли доверять рейтингам букмекеров?",
      answer: "Наш рейтинг формируется на основе реальных отзывов пользователей, анализа условий работы БК и экспертных оценок. Мы учитываем множество факторов: коэффициенты, скорость выплат, качество поддержки, наличие лицензии."
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Icon
            key={star}
            name={star <= rating ? "Star" : "Star"}
            size={16}
            className={star <= rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        
        <header className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Рейтинг букмекерских контор
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Честные отзывы игроков и экспертные оценки лучших букмекеров России
          </p>
        </header>

        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="TrendingUp" size={28} className="text-primary" />
            <h2 className="text-3xl font-bold">Топ букмекеров 2025</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {bookmakers.map((bk, index) => (
              <Card 
                key={bk.id} 
                className="hover:shadow-lg transition-shadow duration-300 animate-fade-in border-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-2xl">{bk.name}</CardTitle>
                    <Badge variant="secondary" className="text-base px-3 py-1">
                      <Icon name="Star" size={14} className="mr-1 fill-amber-400 text-amber-400" />
                      {bk.rating}
                    </Badge>
                  </div>
                  <CardDescription className="text-base font-medium text-primary">
                    {bk.bonus}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {bk.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-sm">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Icon name="MessageSquare" size={16} />
                        {bk.reviews.toLocaleString('ru-RU')} отзывов
                      </span>
                      <Button className="gap-2">
                        Перейти на сайт
                        <Icon name="ExternalLink" size={16} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="MessageCircle" size={28} className="text-primary" />
            <h2 className="text-3xl font-bold">Отзывы игроков</h2>
          </div>
          
          <div className="space-y-4">
            {userReviews.map((review, index) => (
              <Card 
                key={review.id}
                className="animate-fade-in hover:shadow-md transition-shadow"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-lg">{review.author}</CardTitle>
                        {review.verified && (
                          <Badge variant="secondary" className="gap-1 text-xs">
                            <Icon name="CheckCircle" size={12} className="text-green-600" />
                            Проверен
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">{review.bookmaker}</span>
                        <span>•</span>
                        <span>{review.date}</span>
                      </div>
                    </div>
                    {renderStars(review.rating)}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-base leading-relaxed">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg" className="gap-2">
              Показать ещё отзывы
              <Icon name="ChevronDown" size={18} />
            </Button>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-8">
            <Icon name="HelpCircle" size={28} className="text-primary" />
            <h2 className="text-3xl font-bold">Частые вопросы</h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border rounded-lg px-6 bg-white shadow-sm"
              >
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <footer className="mt-20 pt-12 border-t text-center text-muted-foreground">
          <p className="text-sm">
            © 2025 Рейтинг букмекеров. Все отзывы проверяются модераторами.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;

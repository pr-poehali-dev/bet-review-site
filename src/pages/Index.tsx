import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const bookmakers = [
    {
      id: 1,
      name: "Fonbet",
      emoji: "⚡",
      rating: 9.5,
      bonus: "Фрибет до 15 000 ₽",
      features: ["Фрибет без депозита", "Live-ставки", "Лучшая линия"],
      reviews: 2456,
      url: "https://fonbet.ru"
    },
    {
      id: 2,
      name: "Марафонбет",
      emoji: "🎯",
      rating: 9.2,
      bonus: "Фрибет до 25 000 ₽",
      features: ["100% к первому депозиту", "Широкая роспись", "Статистика матчей"],
      reviews: 1987,
      url: "https://marathonbet.ru"
    },
    {
      id: 3,
      name: "Betboom",
      emoji: "🚀",
      rating: 9.0,
      bonus: "Фрибет до 10 000 ₽",
      features: ["5 фрибетов новичкам", "Кешбэк до 20%", "Бонусы за киберспорт"],
      reviews: 1654,
      url: "https://betboom.ru"
    },
    {
      id: 4,
      name: "Winline",
      emoji: "🏆",
      rating: 8.8,
      bonus: "Фрибет 3 000 ₽",
      features: ["Фрибет за регистрацию", "Программа лояльности", "Быстрый вывод"],
      reviews: 1342,
      url: "https://winline.ru"
    },
    {
      id: 5,
      name: "Betcity",
      emoji: "💎",
      rating: 8.6,
      bonus: "Фрибет до 3 000 ₽",
      features: ["Страховка первой ставки", "Надежность", "Промокоды"],
      reviews: 1198,
      url: "https://betcity.ru"
    },
    {
      id: 6,
      name: "Leon",
      emoji: "⭐",
      rating: 8.5,
      bonus: "Фрибет до 20 000 ₽",
      features: ["Бонус на первый депозит", "Простой интерфейс", "Поддержка 24/7"],
      reviews: 956,
      url: "https://leon.ru"
    }
  ];

  const userReviews = [
    {
      id: 1,
      bookmaker: "Fonbet",
      author: "Алексей М.",
      rating: 5,
      date: "15 января 2025",
      text: "Fonbet — моя любимая БК. Легальная компания, всё официально. Получил фрибет 3000₽, отыграл без проблем. Деньги выводятся быстро, обычно в течение часа. Служба поддержки отвечает моментально. Рекомендую!",
      verified: true
    },
    {
      id: 2,
      bookmaker: "Марафонбет",
      author: "Мария К.",
      rating: 5,
      date: "12 января 2025",
      text: "Отличная букмекерская контора! Пользуюсь уже больше года. Фрибет 5000₽ при регистрации — это очень щедро. Широкая линия, много видов ставок, быстрые выплаты. Особенно нравятся live-ставки.",
      verified: true
    },
    {
      id: 3,
      bookmaker: "BetBoom",
      author: "Дмитрий П.",
      rating: 5,
      date: "10 января 2025",
      text: "BetBoom радует акциями и промокодами. Каждую неделю что-то новое! Фрибет отработал за пару дней, кешбэк реально возвращают. Интерфейс удобный, всё интуитивно понятно даже новичку.",
      verified: true
    },
    {
      id: 4,
      bookmaker: "Winline",
      author: "Сергей Л.",
      rating: 4,
      date: "8 января 2025",
      text: "Winline порадовал быстрой регистрацией — буквально пару минут. Фрибет 1500₽ получил сразу после первой ставки. Поддержка работает круглосуточно, помогли разобраться с выводом средств.",
      verified: true
    },
    {
      id: 5,
      bookmaker: "Betcity",
      author: "Игорь В.",
      rating: 4,
      date: "5 января 2025",
      text: "Betcity — легальная контора с хорошим выбором видов спорта. Фрибет 2500₽ отыграл на футболе. Программа лояльности действительно работает, накопил уже немало баллов. Рекомендую!",
      verified: true
    },
    {
      id: 6,
      bookmaker: "Leon",
      author: "Анна С.",
      rating: 4,
      date: "3 января 2025",
      text: "Leon понравился простотой — зарегистрировалась за минуту. Фрибет 1000₽ небольшой, но условия отыгрыша лояльные. Очень удобно смотреть стримы матчей прямо на сайте. Cashout работает отлично!",
      verified: false
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
      question: "Что такое фрибет и как его получить?",
      answer: "Фрибет — это бесплатная ставка от букмекера. Обычно фрибеты предоставляются новым пользователям при регистрации, за первый депозит или в рамках акций. Важно внимательно читать условия отыгрыша фрибетов."
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
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        
        <header className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-3">
            <Badge variant="outline" className="text-sm font-semibold px-4 py-1.5">
              TBB RATING
            </Badge>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            The Best Bet
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Рейтинг лучших фрибетов букмекеров России
          </p>
        </header>

        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="TrendingUp" size={28} className="text-primary" />
            <h2 className="text-3xl font-bold">Топ фрибетов 2025</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookmakers.map((bk, index) => (
              <Card 
                key={bk.id} 
                className="hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 animate-fade-in border-2 border-border hover:border-primary/50 hover:scale-[1.02] relative overflow-hidden bg-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute top-4 left-4 text-4xl">{bk.emoji}</div>
                <CardHeader className="pt-16">
                  <div className="flex items-start justify-between mb-3">
                    <CardTitle className="text-2xl font-bold">{bk.name}</CardTitle>
                    <Badge className="text-lg px-3 py-1.5 bg-amber-400 text-amber-950 font-bold">
                      {bk.rating}
                    </Badge>
                  </div>
                  <CardDescription className="text-lg font-bold text-primary">
                    {bk.bonus}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-5">
                    <div className="space-y-2">
                      {bk.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Icon name="Check" size={16} className="text-primary" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      className="w-full gap-2 py-6 text-base font-semibold" 
                      size="lg"
                      asChild
                    >
                      <a href={bk.url} target="_blank" rel="noopener noreferrer">
                        ЗАБРАТЬ ФРИБЕТ
                        <Icon name="ArrowRight" size={18} />
                      </a>
                    </Button>
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
                className="animate-fade-in hover:shadow-md hover:shadow-primary/10 transition-shadow bg-card border-border"
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
                className="border border-border rounded-lg px-6 bg-card shadow-sm"
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
            © 2025 TBB RATING. The Best Bet — рейтинг лучших фрибетов. Все отзывы проверяются модераторами.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
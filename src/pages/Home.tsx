import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Zap, Shield, Clock, TrendingUp, Target } from "lucide-react";

export default function Home() {
  const handleBuyClick = () => {
    // Track Meta Pixel conversion event
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout', {
        content_name: 'Curso Rápido de Cajón',
        value: 87.00,
        currency: 'BRL'
      });
    }
    
    // Redirecionar para checkout/pagamento
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5">
      {/* Hero Section */}
      <section className="container py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-4">
            CURSO RÁPIDO DE CAJÓN
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Do Zero ao Palco em{" "}
            <span className="gradient-text">Tempo Recorde</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Pare de perder tempo. Se você quer dominar o cajón de verdade e pisar em um palco de verdade, continue lendo.
          </p>
        </div>
      </section>

      {/* Truth Section */}
      <section className="container py-16 md:py-24">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-card/50 backdrop-blur border-2 border-primary/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            A VERDADE QUE NINGUÉM TE CONTA:
          </h2>
          <div className="space-y-4 text-lg md:text-xl text-foreground/90">
            <p>Você não vai tocar bem "pegando no cajón só quando tiver vontade".</p>
            <p>Você não vai tocar bem "indo no seu tempo".</p>
            <p>E você definitivamente não vai tocar bem assistindo aula aleatória no YouTube.</p>
            <p className="pt-4 font-semibold">
              A real é essa: Ou você segue um sistema comprovado, passo a passo, ou você vai continuar travado nos mesmos 3 grooves pelos próximos 2 anos.
            </p>
            <p className="pt-4">
              Eu sei porque eu já treinei centenas de percussionistas. E a diferença entre quem toca no palco e quem toca sozinho no quarto é simples:
            </p>
            <p className="text-2xl font-bold text-primary pt-2">
              Método + Disciplina + Velocidade.
            </p>
          </div>
        </Card>
      </section>

      {/* What You'll Get Section */}
      <section className="container py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
            AQUI ESTÁ O QUE VOCÊ VAI <span className="gradient-text">CONSEGUIR</span>
          </h2>
          <p className="text-xl text-center mb-12 text-muted-foreground">
            Em 30 aulas diretas, sem enrolação:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 hover:border-primary/60 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Fundamentos Sólidos</h3>
              <p className="text-muted-foreground">
                Sons do cajón, postura correta, os 3 sons básicos, coordenação motora e seu primeiro groove completo. Em 8 aulas você já vai estar tocando músicas de verdade.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 hover:border-primary/60 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Nível Avançado</h3>
              <p className="text-muted-foreground">
                Ritmos populares (samba, baião, ritmos latinos), técnicas avançadas, dinâmica e improvisação básica. Aqui você sai do básico e vira músico.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 hover:border-primary/60 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Performance Profissional</h3>
              <p className="text-muted-foreground">
                Aqui você aprende a PERFORMAR, não só tocar. Aqui você se profissionaliza.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="container py-16 md:py-24">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-destructive/10 border-2 border-destructive/30">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-destructive">
            MAS TEM UM PROBLEMA:
          </h2>
          <div className="space-y-4 text-lg md:text-xl">
            <p>Se você não gosta de estudar, me perdoe, mas você NUNCA vai tocar bem.</p>
            <p>Não existe mágica. Não existe atalho que elimine a prática.</p>
            <p className="pt-4 font-semibold">
              O que existe é um caminho certo que te leva ao resultado 10x mais rápido que tentar sozinho.
            </p>
            <p className="pt-4">
              Você pode perder os próximos 3 anos tentando aprender sozinho...
            </p>
            <p className="text-2xl font-bold text-primary">
              Ou você pode seguir um sistema testado e estar no palco em 30 dias.
            </p>
            <p className="text-xl font-semibold pt-2">Sua escolha.</p>
          </div>
        </Card>
      </section>

      {/* What You Get Section */}
      <section className="container py-16 md:py-24 bg-primary/5 -mx-4 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
            O QUE VOCÊ LEVA <span className="text-muted-foreground text-2xl">(E POR QUE ISSO VALE 10X MAIS)</span>
          </h2>
          
          <div className="space-y-6 mb-12">
            <Card className="p-6 bg-card hover:bg-card/80 transition-colors border-l-4 border-l-primary">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">30 Aulas Diretas e Práticas</h3>
                  <p className="text-muted-foreground">Nada de teoria inútil. Cada aula te leva 1 passo mais perto do palco.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card hover:bg-card/80 transition-colors border-l-4 border-l-primary">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Certificado de Conclusão</h3>
                  <p className="text-muted-foreground">Prove que você concluiu o treinamento.</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Price Section */}
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground text-center animate-pulse-glow">
            <div className="space-y-6">
              <div>
                <p className="text-lg line-through opacity-70">Valor Real: R$ 197,00</p>
                <p className="text-2xl font-semibold mt-2">Seu Investimento Hoje:</p>
              </div>
              <div className="text-7xl md:text-8xl font-black">
                R$ 87<span className="text-4xl">,00</span>
              </div>
              <p className="text-xl opacity-90">ou 3x de R$ 29,00</p>
              <Button 
                size="lg" 
                onClick={handleBuyClick}
                className="bg-background text-primary hover:bg-background/90 text-xl px-12 py-8 h-auto font-bold shadow-2xl hover:scale-105 transition-transform"
              >
                👇 SIM, EU QUERO DOMINAR O CAJÓN E PISAR NO PALCO 👇
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Why This Price Section */}
      <section className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">POR QUE ESSE PREÇO?</h2>
          <div className="space-y-6 text-lg md:text-xl">
            <p className="text-xl font-semibold">Porque eu quero que você não tenha desculpa.</p>
            
            <div className="space-y-4 pl-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p>Se R$ 87,00 é muito para você aprender a tocar cajón e se apresentar no palco, então você não está levando isso a sério.</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p>Um almoço custa R$ 40,00.</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p>Poucas horas no bar custa bem mais que R$ 100,00. 30 aulas que te levam ao palco custam R$ 87,00.</p>
              </div>
            </div>
            
            <p className="text-2xl font-bold text-primary pt-4">
              Divida aí, faça as contas do preço por cada aula.
            </p>
            <p className="font-semibold">Faça as contas.</p>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="container py-16 md:py-24">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-gradient-to-br from-green-500/10 to-green-500/5 border-2 border-green-500/30">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-600 dark:text-green-400">
                GARANTIA SEM ENROLAÇÃO:
              </h2>
              <div className="space-y-4 text-lg md:text-xl">
                <p className="font-bold">15 dias. Sem perguntas.</p>
                <p>Se você não gostar, me manda um email e eu devolvo cada centavo.</p>
                <p>Sem burocracia. Sem enrolação. Porque desde o método até o reembolso NADA aqui tem enrolação.</p>
                <p className="pt-4 font-semibold text-primary">
                  Mas eu sei que você não vai pedir reembolso. Porque esse sistema funciona.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* No Video Section */}
      <section className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">ESSA PÁGINA NÃO TEM VÍDEO DE VENDAS.</h2>
          <p className="text-xl text-muted-foreground">Não tem gente falando do curso.</p>
          <p className="text-xl text-muted-foreground">Não tem NADA que vá te distrair do seu objetivo de tocar cajón.</p>
          <p className="text-2xl font-bold text-primary">E você já está perdendo muito tempo aqui.</p>
        </div>
      </section>

      {/* Last Thing Section */}
      <section className="container py-16 md:py-24">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-card/50 backdrop-blur">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">ÚLTIMA COISA:</h2>
          <div className="space-y-4 text-lg md:text-xl">
            <p>Eu não vou ficar te perseguindo.</p>
            <p>Eu não vou mandar 47 emails implorando para você comprar.</p>
            <p>Essa página vai continuar aqui. O preço vai continuar o mesmo (por enquanto).</p>
            <p className="pt-4 font-semibold text-destructive">
              Mas o tempo que você está perdendo não volta.
            </p>
            <p>Cada semana que você adia é mais uma semana longe do palco.</p>
            <p className="text-2xl font-bold text-primary pt-4">
              Você quer tocar cajón ou quer continuar pensando em tocar cajón?
            </p>
          </div>
        </Card>
      </section>

      {/* Final CTA Section */}
      <section className="container py-16 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Button 
            size="lg" 
            onClick={handleBuyClick}
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-2xl px-16 py-10 h-auto font-black shadow-2xl hover:scale-105 transition-transform animate-pulse-glow"
          >
            COMPRAR AGORA POR R$ 87,00
          </Button>
          <p className="text-lg text-muted-foreground">(ou 3x de R$ 29,00 no cartão)</p>
        </div>
      </section>

      {/* PS Section */}
      <section className="container py-16 border-t">
        <div className="max-w-4xl mx-auto space-y-6 text-lg">
          <p>
            <strong>P.S.:</strong> Enquanto você lê isso, alguém já comprou, já começou a Aula 1 e já está tocando os primeiros sons. A diferença entre você e essa pessoa não é talento. É decisão.
          </p>
          <p>
            <strong>P.P.S.:</strong> Lembra: 15 dias de garantia total. Você só tem a ganhar. A única forma de perder é não tentar.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="container py-8 border-t text-center text-muted-foreground">
        <p>© 2025 Curso Rápido de Cajón. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { CheckCircle, ArrowRight, Zap, Users, BarChart3, Clock } from "lucide-react";

export default function JiraIntegration() {
  const integrationFeatures = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Otomatik Görev Senkronizasyonu",
      description: "Jira'daki görevleriniz otomatik olarak Workyon'a aktarılır ve wellness takibi başlar."
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Takım Performans Analizi",
      description: "Jira verileri ile mood skorları birleştirilerek takım sağlığı analiz edilir."
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Akıllı Raporlama",
      description: "Sprint raporlarına wellness metrikleri eklenerek kapsamlı analiz sağlanır."
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Gerçek Zamanlı Güncellemeler",
      description: "Görev durumları değiştikçe takdir puanları ve wellness skorları güncellenir."
    }
  ];

  const workflowSteps = [
    {
      step: "1",
      title: "Jira Bağlantısı",
      description: "Workyon'u mevcut Jira workspace'inize kolayca bağlayın"
    },
    {
      step: "2", 
      title: "Otomatik Veri Akışı",
      description: "Görevler, sprintler ve projeler otomatik olarak senkronize edilir"
    },
    {
      step: "3",
      title: "Wellness Takibi",
      description: "Her görev için mood ve verimlilik takibi başlar"
    },
    {
      step: "4",
      title: "Akıllı Analiz",
      description: "Jira metrikleri ile wellness verileri birleştirilerek akıllı öneriler üretilir"
    }
  ];

  return (
    <section id="jira-integration" className="py-16 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
            🔗 Jira Entegrasyonu
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mevcut İş Akışınızı Bozmadan <br />Wellness Ekleyin
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Workyon, Jira ile mükemmel uyum içinde çalışır. Mevcut projelerinizi, görevlerinizi ve 
            sprintlerinizi koruyarak üzerine güçlü wellness ve produktivite katmanı ekler.
          </p>
        </div>

        {/* Integration Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {integrationFeatures.map((feature, index) => (
            <Card key={index} className="text-center border-2 hover:border-blue-200 transition-colors">
              <CardHeader className="pb-4">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-3">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Workflow Steps */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Entegrasyon Süreci</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {workflowSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                <h4 className="font-semibold mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
                {index < workflowSteps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-6 -right-3 w-6 h-6 text-muted-foreground" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Jira vs Workyon Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-2">
            <CardHeader className="bg-muted/30">
              <CardTitle className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-sm font-bold">J</span>
                </div>
                Sadece Jira
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Görev yönetimi</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Sprint planlama</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Proje takibi</span>
                </li>
                <li className="flex items-start gap-3 opacity-50">
                  <div className="w-5 h-5 mt-0.5 border-2 border-muted rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Çalışan wellness takibi</span>
                </li>
                <li className="flex items-start gap-3 opacity-50">
                  <div className="w-5 h-5 mt-0.5 border-2 border-muted rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Mood analizi</span>
                </li>
                <li className="flex items-start gap-3 opacity-50">
                  <div className="w-5 h-5 mt-0.5 border-2 border-muted rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Takdir sistemi</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-orange-50">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-orange-500 text-white">
              <CardTitle className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-blue-600 text-sm font-bold">W</span>
                </div>
                Jira + Workyon
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Tüm Jira özellikleri</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Otomatik wellness takibi</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Günlük mood analizi</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Akıllı takdir sistemi</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Kişiselleştirilmiş öneriler</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Gerçek zamanlı wellness metrikleri</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Jira Entegrasyonunu Hemen Deneyin</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            5 dakikada kurulum tamamlayın, mevcut projelerinizi koruyarak 
            wellness avantajlarından faydalanmaya başlayın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              Ücretsiz Entegrasyon Başlat
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Entegrasyon Dokümantasyonu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
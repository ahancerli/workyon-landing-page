import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Home, Heart, Calendar, Award } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Ana Sayfa",
      description: "Kişiselleştirilmiş dashboard ile günlük özet ve metrikler",
      details: [
        "Çalışan ismi ve profil",
        "Günlük mood puanı",
        "Tamamlanan görevler sayısı",
        "Takdir puanı ve seviye",
        "Haftalık hedef yüzdesi",
        "Son aktiviteler timeline"
      ]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Mood Takip",
      description: "Emoji tabanlı mood tracking ve kişiselleştirilmiş öneriler",
      details: [
        "Günlük mood check-in",
        "Emoji seçimleri ile kolay kullanım",
        "Müzik önerileri",
        "Egzersiz programları",
        "Mood trend analizi",
        "Takım mood ortalamalar"
      ]
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Planlama",
      description: "Entegre görev ve toplantı yönetimi sistemi",
      details: [
        "Toplantı takvimi",
        "Görev listesi ve durumları",
        "Hatırlatıcı sistemi",
        "Yeni görev ekleme",
        "Deadline takibi",
        "Proje kategorilendirme"
      ]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Takdir Sistemi",
      description: "Gamifikasyon ile motivasyon artırıcı ödül sistemi",
      details: [
        "Toplam puan hesaplama",
        "Seviye sistemi",
        "Zamanında tamamlama bonusu",
        "Görev geçmişi",
        "Teşekkür mesajları",
        "Özel ödüller ve rozetler"
      ]
    }
  ];

  return (
    <section id="features" className="py-16 bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-orange-100 to-blue-100 text-orange-800 border-orange-200">
            🚀 Güçlü Özellikler
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
            İş Yerinizi Dönüştüren Modüller
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Her modül, çalışan deneyimini iyileştirmek ve iş verimliliğini artırmak için özenle tasarlandı.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
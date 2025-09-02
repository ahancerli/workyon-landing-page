import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";

export default function Features() {
  const features = [
    {
      title: "Ana Sayfa Dashboard",
      description: "Çalışanın tüm aktivitelerini tek ekranda görün",
      icon: "🏠",
      details: [
        "Çalışan ismi ve profil bilgileri",
        "Mood puanı ve günlük durum",
        "Tamamlanan görevler listesi",
        "Takdir puanı ve seviye bilgisi",
        "Haftalık hedef tamamlama yüzdesi",
        "Günlük progress ve görev durumu",
        "Son aktiviteler ve bildirimleri"
      ]
    },
    {
      title: "Mood Takip Sistemi",
      description: "Çalışan wellness'ını günlük olarak izleyin",
      icon: "😊",
      details: [
        "Günlük mood check-in soruları",
        "Emoji ile kolay durum bildirimi",
        "Kişiselleştirilmiş öneriler",
        "Müzik ve egzersiz tavsiyeleri",
        "Mood geçmişi ve trend analizi",
        "Takım mood durumu özeti"
      ]
    },
    {
      title: "Akıllı Planlama",
      description: "Toplantılar, görevler ve hatırlatıcıları organize edin",
      icon: "📅",
      details: [
        "Toplantı planlama ve takibi",
        "Görev yönetimi ve atama",
        "Otomatik hatırlatıcılar",
        "Haftalık toplantı planlaması",
        "Takvim entegrasyonu",
        "Yeni etkinlik ekleme araçları"
      ]
    },
    {
      title: "Takdir Sistemi",
      description: "Başarıları takip edin ve ödüllendirin",
      icon: "🏆",
      details: [
        "Toplam puan ve seviye sistemi",
        "Zamanında tamamlanan görev takibi",
        "Görev tamamlama geçmişi",
        "Team Meeting Notes",
        "Project Planning başarıları",
        "Teşekkür ve ödül alanı"
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

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{feature.icon}</div>
                  <div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                      {detail}
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
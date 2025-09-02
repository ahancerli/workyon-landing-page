import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";

export default function Demo() {
  return (
    <section id="demo" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4" variant="secondary">
            👀 Canlı Demo
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
            Workyon'u Gerçek Zamanlı Görün
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Platform arayüzünü ve işleyişini interaktif demo ile deneyimleyin.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Mock Dashboard Demo */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold">Merhaba, Ahmet Yılmaz! 👋</h3>
                  <p className="text-muted-foreground">İyi bir günün olsun</p>
                </div>
                <Badge variant="secondary">Demo Mod</Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl mb-2">😊</div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">85%</div>
                    <div className="text-sm text-muted-foreground">Mood Puanı</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl mb-2">✅</div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">12/15</div>
                    <div className="text-sm text-muted-foreground">Tamamlanan Görevler</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl mb-2">🏆</div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">1250</div>
                    <div className="text-sm text-muted-foreground">Takdir Puanı</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl mb-2">📊</div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">83%</div>
                    <div className="text-sm text-muted-foreground">Haftalık Hedef</div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Günlük Progress</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Görevler</span>
                        <span>12/15</span>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Haftalık Hedef</span>
                        <span>1250/1500</span>
                      </div>
                      <Progress value={83} className="h-2" />
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Son Aktiviteler</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Görev tamamlandı: Project Planning</span>
                      <span className="text-muted-foreground ml-auto">-2s</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Mood check-in yapıldı</span>
                      <span className="text-muted-foreground ml-auto">-1d</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span>Teşekkür alındı</span>
                      <span className="text-muted-foreground ml-auto">-2d</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button size="lg" className="px-8 bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white border-0">
              Interaktif Demo'yu Deneyin
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
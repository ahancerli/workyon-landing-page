import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-orange-500 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent font-bold">W</span>
              </div>
              <span className="font-bold text-xl">Workyon</span>
            </div>
            <p className="text-white/80 text-sm">
              Geleceğin işini bugünden yaşa. Jira entegrasyonu ile çalışan wellness'ını 
              ve iş verimliliğini bir arada yönetin.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Ürün</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#features" className="hover:text-white transition-colors">Özellikler</a></li>
              <li><a href="#jira-integration" className="hover:text-white transition-colors">Jira Entegrasyonu</a></li>
              <li><a href="#demo" className="hover:text-white transition-colors">Demo</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Fiyatlandırma</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Şirket</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Hakkımızda</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kariyer</a></li>
              <li><a href="#" className="hover:text-white transition-colors">İletişim</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Destek</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Yardım Merkezi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dokümantasyon</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Topluluk</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Durum</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/80">
            © 2025 Workyon. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
              Gizlilik Politikası
            </a>
            <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
              Kullanım Şartları
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
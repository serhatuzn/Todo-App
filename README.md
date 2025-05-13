# React TodoMVC Uygulaması / React TodoMVC Application

## Türkçe

Bu proje, klasik TodoMVC uygulamasının React ile yapılmış bir versiyonudur. Orijinal HTML ve CSS temelli uygulama, modern React bileşenlerine dönüştürülmüştür.

### Özellikler

- Görev ekleme, silme ve düzenleme
- Görevleri tamamlandı olarak işaretleme
- Tüm görevleri, sadece tamamlanmış veya sadece aktif görevleri filtreleme
- Tamamlanmış görevleri topluca silme
- Tüm görevleri tek seferde tamamlandı/tamamlanmamış olarak işaretleme
- Yerel depolama kullanarak görevleri tarayıcıda saklama

### Kurulum

Projeyi yerel ortamınızda çalıştırmak için:

```bash
# Depoyu klonlayın
git clone [https://github.com/ahmetemreari/todo-app]

# Proje dizinine gidin
cd todo-react

# Bağımlılıkları yükleyin
npm install

# Uygulamayı başlatın
npm run dev
```

Uygulama varsayılan olarak [http://localhost:5173](http://localhost:5173) adresinde çalışacaktır.

### Kullanım

- Yeni bir görev eklemek için üst kısımdaki input alanına yazın ve Enter tuşuna basın
- Görevi tamamlandı olarak işaretlemek için soldaki checkbox'ı tıklayın
- Görevi düzenlemek için görev metnine çift tıklayın
- Görevi silmek için üzerine geldiğinizde sağda beliren çarpı işaretine tıklayın
- Alt kısımdaki filtreleri kullanarak görevleri filtreleyebilirsiniz
- "Clear completed" düğmesini kullanarak tamamlanmış tüm görevleri silebilirsiniz
- Sol üst köşedeki ok işaretini tıklayarak tüm görevleri toplu işaretleyebilirsiniz

### Teknik Detaylar

Bu uygulama React'in modern özelliklerini kullanmaktadır:

- Fonksiyonel bileşenler
- React Hooks (useState, useEffect)
- Koşullu render etme
- Form ve olay yönetimi
- LocalStorage ile durum yönetimi

## English

This project is a React version of the classic TodoMVC application. The original HTML and CSS-based application has been transformed into modern React components.

### Features

- Add, delete, and edit tasks
- Mark tasks as completed
- Filter all tasks, only completed tasks, or only active tasks
- Delete all completed tasks at once
- Mark all tasks as completed/incomplete at once
- Store tasks in the browser using local storage

### Installation

To run the project in your local environment:

```bash
# Clone the repository
git clone [https://github.com/ahmetemreari/todo-app]

# Go to the project directory
cd todo-react

# Install dependencies
npm install

# Start the application
npm run dev
```

The application will run at [http://localhost:5173](http://localhost:5173) by default.

### Usage

- To add a new task, type in the input field at the top and press Enter
- To mark a task as completed, click the checkbox on the left
- To edit a task, double-click on the task text
- To delete a task, click the x mark that appears on the right when you hover over it
- You can filter tasks using the filters at the bottom
- You can delete all completed tasks using the "Clear completed" button
- You can mark all tasks at once by clicking the arrow mark in the upper left corner

### Technical Details

This application uses modern React features:

- Functional components
- React Hooks (useState, useEffect)
- Conditional rendering
- Form and event handling
- State management with LocalStorage

---
emoji: "🤼‍♂️"
title: "スクラムをしばらくやった感想とメモ"
createdAt: "2021/10/02"
updatedAt: "2021/10/02"
published: true
genre: "tech"
tags: ["Scrum"]
---

# はじめに

所属組織にてスクラム開発が導入され、開発者（たまに兼スクラムマスター）としての経験をすることができた、知見・感想・課題感などをメモしておきます。

# 用語

ここでは敢えて「スクラムガイド」における原義に拠らず、私の理解で用語を整理します。（どうしても自分が所属している組織の肌感で書いてしまうので、原典のリンクも載せておきます！）

スクラムガイド™： <https://scrumguides.org/docs/scrumguide/v2017/2017-Scrum-Guide-Japanese.pdf>


## 基本概念

### スクラム開発

製品にかかわる各役割の人たちが、自己組織化しながら最大効率を目指す開発手法。

### スプリント

一定の期間で区切られたスクラム開発の実施単位。

---

## 役割

### スクラムマスター

スクラム開発において、開発が効率的に進むような仕組みづくりをする人。

基本的にはスクラムイベントの司会が主な作業になるが、バックログの整理をするようプロダクトオーナーを小突いたり、レトロスペクティブで決まった改善作業をやることもある。

### プロダクトオーナー

製品およびプロダクトバックログに対して責任を負う人。

ストーリーを作成して、開発者にタスク分割を依頼したりする。また、バックログの優先順位や、タスクのやる・やらもこの立場の人が決定権を持っている。

### 開発者

実際に手を動かして物を作る人。

詳細仕様については、プロダクトオーナーと相談のうえで開発者側が作成することが多い。

---

## 道具

### ストーリー

開発により実現されるひとつのユーザー体験を表現したもの。

### タスク

ストーリーを分解して見積もり・実施可能な最小単位にしたもの。

### プロダクトバックログ

優先度順にストーリーおよびタスクをならべたリスト。

### スプリントバックログ

毎スプリントごとに作成される、スプリント期間内に実施するタスクのリスト。

### プランニングポーカー

タスクエスティメーション（後述）時に、開発者全員でタスクのコストを見積もるための仕組み。

---

## スクラムイベント

### スプリントプランニング

そのスプリントでやるタスクをプロダクトバックログ→スプリントバックログへ移動させる場。

### デイリースクラム

日々の進捗共有をおこなうミーティング、ブロッキング要素などがあれば相談する場。

### バックログリファインメント

プロダクトバックログの優先度・タスク内容を見直す場。

### タスクエスティメーション

プロダクトバックログのうち、分解済みのタスクのコストを設定していく場。

### タスクブレイキング

プロダクトバックログのストーリーをタスクに分割する場。

### スプリントレトロスペクティブ

そのスプリントを通じての振り返り・改善点の洗い出しと次へのアクションを決める場。

# 気づきと感想

## 大変だなと感じたところ

### 開発者とスクラムマスターの兼任

優秀で熟練したスクラムマスターがひとりチームにいるだけで、圧倒的に安心感があります。「スクラムとはどういうものか？」という指針を与えてくれるのも大きいですが、それ以上に「開発以外のいろいろ」を意識の埒外に置くことができるので、本質的な開発タスクに集中しやすくなる効果が大きいです。

ただ、多くの組織は常にその体制を組めるともいかないのですよね。私の所属先でも、スクラムマスターと開発者を兼任体制へとチームが移行してしばらく経過しました。2スプリントに1回程度の頻度でスクラムマスター作業を担いましたが、やはりスクラムイベント関連の作業が開発の時間を多少圧迫する側面はあると思います。

また、本来的に言えば、スクラムマスターの責務はスクラムイベントのMCだけであるべきではなく、もっと改善系のタスクにしっかり時間を使えるべきなので、余裕のある組織には専任スクラムマスターがいるべきだなあ……というのは実感しました。複数スクラムチームがある場合などは、専任スクラムマスターというポストを開発組織の中に設置するのも、少し現実的になるのかなという印象です。

### タスクの作り方で全てが決まる

スクラムの前提として、タスクは「その内容を見るだけで誰でも取り組める」ような記述になっている必要があります。これには、「全員でエスティメーション（見積もり）をする以上は、誰にでもわかる形で記載されていないといけない」という側面と、タスクおよびサービス自体の属人化を防ぐ狙いがあります。

変化に強い組織を目指していくのであればとても大事なことではありますが、慣れないうちは「これでも詳細度足りないのか……」とか「ここまで書くなら実装しちゃったほうが早いんじゃね」みたいな安直な考えに向かってしまいがちです。ここをこらえて、しっかりとしたドキュメンテーションの文化を組織内で育てていかなければいけないと感じました。

また、ストーリー→タスクへと分割する粒度についても、極めて重要かつ難しいです。粗すぎればエスティメーションしようにも曖昧さが大きすぎてできない、という話になりますし、細かく分けすぎると1つのプルリクで5タスク分の内容です！みたいなことになりかねません。

ここは経験則で、もっとブレークダウンすべきタスク・逆にもっとまとめるべきタスクみたいなものが見えてくるようになるので、エスティメーションなどの際に粒度に違和感があったら口を突っ込むのも大事だなと思います。

---

## やってよかったと感じたところ

### 毎スプリント「小出しの達成感」を味わえる

単純な話ですが、ニンゲンは明確な締め切りがあるとお尻に火が付く生き物です。そして、締め切りは近ければ近いほど、またひとつひとつの作業単位は小さければ小さいほど、頑張りやすくて小出しの達成感を得られます。

タスクが速く片付けば、その分の時間を来スプリントからの仕様の作成や、より長大なリファクタリング構想に充当できたりもするので、早く終わらせようというインセンティブが働きやすいと思います。

逆に、タスクが終わり切っていない場合は（基本的にスプリントプランニングはPOと開発者の間で交わされる「確約」という性質を持つため）そこそこの心理的負荷を感じます。これについてはデイリーでの共有で状況を周りにしっかり伝える必要がありますが、いい意味での焦燥感だなという実感もあるので、スプリントを短く・タスクを小さくという基本的な発想自体は、とても良いものだと感じています。

### 仕様を記述する際に担当領域が異なるメンバーを巻き込みやすい

「次のエスティメーションに間に合わせるために、このストーリーを分解したいのですが、バックエンド周りでの不明点の調査とタスクのレビューお願いできますか？」みたいな感じで、いろいろと道具と理由が存在してくれるので、コミュニケーションが円滑になった気がします。

（現実的にはフロント→バックエンドという感じでお伺いを立てることが多く逆は割と少ないので、私が単にめっちゃ周りのバックエンド担当者にお世話になっているという話でもありますが…）

仕事を前に進めていくうえで、どれだけ関係者を巻き込めるか（自分だけではできない部分をどう埋めるか）は大事だと思っているので、道具立てとしてのスクラムは非常にありがたいと感じています。

### 大きなテーマでの開発を進められるようになった

タスクの優先度が明確にプロダクトバックログで測れるようになったことで、例えばリファクタや不具合修正がもっと大きなユーザー体験の実現を目指した開発タスクよりも上に来てる！みたいな状況にも気づくことができるようになりました。

また、タスクに分割していかなければ作業に着手できないという制約上、曖昧かつ巨大な問題に対しても、とにかく分解できる箇所から文化してはスプリントに入れる、という方針が実現できるので、「基本設計が網羅的に完了していないのでペンディングです…」みたいな状態がずっと続くということは避けやすくなったかと思います。

# 総括

スクラムってやってみないとわからないことがあまりにも多すぎるのですが、短絡的に始めると「形だけスクラム」になってしまいかねない、という怖さを持っている手法でもあります（特に、ウォーターフォールが板についた組織では）。だから、スタート初期には有資格あるいは経験者のスクラムマスターを引き連れてくるのが、成功のコツの一つではあると思います。

ただ、チーム自体がより「スクラム的」に改善を積み重ねていかないことには、すぐに陳腐化してしまうので、常に何らかの形で（ときには意図的に）変化しながら動いていくのが理想な気がします。
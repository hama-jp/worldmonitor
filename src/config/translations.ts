/**
 * Static UI translations for EN/JA.
 * Panel titles, header buttons, tooltips, loading/error messages.
 *
 * `t(key)` returns the key unchanged when language is 'en' (zero overhead).
 * When 'ja', it looks up the Japanese dictionary and falls back to the key.
 */
import { getLanguage } from '@/services/language';

// ─── Japanese dictionary ────────────────────────────────────────────────────
const ja: Record<string, string> = {
  // Panel Titles (from App.ts createPanels + component constructors)
  'World / Geopolitical': '世界 / 地政学',
  'Technology / AI': 'テクノロジー / AI',
  'Financial News': '金融ニュース',
  'Government / Policy': '政府 / 政策',
  'Intel Feed': 'インテリジェンス',
  'Middle East / MENA': '中東 / MENA',
  'Layoffs Tracker': 'レイオフ追跡',
  'AI / ML': 'AI / ML',
  'Startups & VC': 'スタートアップ & VC',
  'VC Insights & Essays': 'VCインサイト & エッセイ',
  'Global Startup News': 'グローバルスタートアップニュース',
  'Unicorn Tracker': 'ユニコーン追跡',
  'Accelerators & Demo Days': 'アクセラレーター & デモデイ',
  'Funding & VC': '資金調達 & VC',
  'Product Hunt': 'Product Hunt',
  'Cybersecurity': 'サイバーセキュリティ',
  'AI Policy & Regulation': 'AI政策 & 規制',
  'Semiconductors & Hardware': '半導体 & ハードウェア',
  'Cloud & Infrastructure': 'クラウド & インフラ',
  'Developer Community': '開発者コミュニティ',
  'GitHub Trending': 'GitHub トレンド',
  'IPO & SPAC': 'IPO & SPAC',
  'Think Tanks': 'シンクタンク',
  'Africa': 'アフリカ',
  'Latin America': '中南米',
  'Asia-Pacific': 'アジア太平洋',
  'Energy & Resources': 'エネルギー & 資源',
  'Markets': 'マーケット',
  'Sector Heatmap': 'セクターヒートマップ',
  'Commodities / VIX': 'コモディティ / VIX',
  'Crypto': '暗号資産',
  'Live Intelligence': 'ライブインテリジェンス',
  'Country Instability Index': '国家不安定指数',
  'Infrastructure Cascade': 'インフラカスケード',
  'Fires': '火災',
  'Strategic Risk Overview': '戦略リスク概要',
  'AI Strategic Posture': 'AI戦略態勢',
  'UCDP Conflict Events': 'UCDP紛争イベント',
  'UNHCR Displacement': 'UNHCR避難民',
  'Climate Anomalies': '気候異常',
  'Population Exposure': '人口暴露',
  'Live News': 'ライブニュース',
  'Tech Events': 'テックイベント',
  'Service Status': 'サービスステータス',
  'Tech Readiness Index': '技術準備指数',
  'Market Radar': 'マーケットレーダー',
  'BTC ETF Tracker': 'BTC ETF トラッカー',
  'Stablecoins': 'ステーブルコイン',
  'AI INSIGHTS': 'AIインサイト',
  'Prediction Markets': '予測市場',
  'My Monitors': 'マイモニター',
  'Economic Data': '経済データ',
  'AI Regulation Dashboard': 'AI規制ダッシュボード',
  'Geopolitical Hotspots': '地政学的ホットスポット',
  'Hot Tech Hubs': 'テックハブ',

  // Panel config names (from panels.ts, used in settings modal)
  'Global Map': 'グローバルマップ',
  'AI Insights': 'AIインサイト',
  'Country Instability': '国家不安定性',
  'World News': '世界ニュース',
  'Middle East': '中東',
  'Government': '政府',
  'Predictions': '予測',
  'Commodities': 'コモディティ',
  'Economic Indicators': '経済指標',
  'Financial': '金融',
  'Technology': 'テクノロジー',
  'AI/ML': 'AI/ML',
  'Global Tech Map': 'グローバルテックマップ',
  'Tech Headlines': 'テックヘッドライン',
  'AI/ML News': 'AI/MLニュース',
  'Tech Stocks': 'テック株式',
  'Tech Predictions': 'テック予測',

  // Header / UI
  'Search': '検索',
  'Copy Link': 'リンクコピー',
  'Copied!': 'コピー完了！',
  'PANELS': 'パネル',
  'SOURCES': 'ソース',
  'LIVE': 'ライブ',

  // Region Selector
  'Global': 'グローバル',
  'Americas': '南北アメリカ',
  'MENA': 'MENA',
  'Europe': 'ヨーロッパ',
  'Asia': 'アジア',
  'Oceania': 'オセアニア',

  // Modals
  'Panel Settings': 'パネル設定',
  'News Sources': 'ニュースソース',
  'Filter sources...': 'ソースを検索...',
  'Select All': 'すべて選択',
  'Select None': 'すべて解除',

  // Map Titles
  'Global Situation': 'グローバル情勢',
  'Global Tech': 'グローバルテック',

  // Loading / Error
  'Loading': '読み込み中',
  'Failed to load data': 'データの読み込みに失敗しました',
  'No news available': 'ニュースがありません',
  'new': '新着',
  'Scanning intelligence feeds': 'インテリジェンスフィードをスキャン中',
  'Loading climate data': '気候データを読み込み中',
  'Loading stablecoins...': 'ステーブルコインを読み込み中…',
  'Loading UCDP events': 'UCDP イベントを読み込み中',
  'Computing signals...': 'シグナルを計算中…',
  'Loading displacement data': '避難民データを読み込み中',
  'Loading ETF data...': 'ETFデータを読み込み中…',
  'Calculating exposure': '暴露を計算中',
  'Scanning thermal data': '熱データをスキャン中',
  'Failed to load intelligence feed': 'インテリジェンスフィードの読み込みに失敗しました',
  'Failed to load market data': '市場データの読み込みに失敗しました',
  'Failed to load sector data': 'セクターデータの読み込みに失敗しました',
  'Failed to load commodities': 'コモディティの読み込みに失敗しました',
  'Failed to load crypto data': '暗号資産データの読み込みに失敗しました',
  'Failed to cluster news': 'ニュースのクラスタリングに失敗しました',
  'No data': 'データなし',
  'Failed to load tech readiness data': '技術準備データの読み込みに失敗しました',
  'No data available': 'データがありません',
  'No active geopolitical hubs': 'アクティブな地政学的ハブなし',
  'Failed to load predictions': '予測の読み込みに失敗しました',
  'No active tech hubs': 'アクティブなテックハブなし',
  'Failed to build dependency graph': '依存関係グラフの構築に失敗しました',
  'Failed to calculate risk overview': 'リスク概要の計算に失敗しました',
  'Failed to calculate CII': 'CIIの計算に失敗しました',
  'All sources disabled': 'すべてのソースが無効です',
  'All Intel sources disabled': 'すべてのインテルソースが無効です',

  // Country Intel Modal
  'Identifying country...': '国を特定中…',
  'Locating region...': '地域を特定中…',
  'Instability Index': '不安定指数',
  'Unrest': '不安',
  'Conflict': '紛争',
  'Security': '安全保障',
  'Information': '情報',
  'rising': '上昇',
  'falling': '下降',
  'stable': '安定',
  'protests': '件の抗議',
  'mil. aircraft': '機の軍用機',
  'mil. vessels': '隻の軍艦',
  'outages': '件の障害',
  'earthquakes': '件の地震',
  'Loading index...': '指数を読み込み中…',
  'Loading prediction markets...': '予測市場を読み込み中…',
  'Generating intelligence brief...': 'インテリジェンスブリーフを生成中…',
  'Cached': 'キャッシュ',
  'Fresh': '最新',
  'No prediction markets found': '予測市場が見つかりません',

  // Service Status Panel
  'All': 'すべて',
  'Cloud': 'クラウド',
  'Dev Tools': '開発ツール',
  'Comms': '通信',
  'SaaS': 'SaaS',
  'Checking services...': 'サービスを確認中…',
  'Retry': '再試行',
  'All services operational': '全サービス正常稼働中',
  'OK': '正常',
  'Degraded': '低下',
  'Outage': '障害',
  'OPERATIONAL': '正常',
  'DEGRADED': '低下',
  'OUTAGE': '障害',
  'UNKNOWN': '不明',

  // Tech Readiness Panel
  'Fetching World Bank Data': '世界銀行データを取得中',
  'Internet Users': 'インターネット利用者',
  'Mobile Subscriptions': 'モバイル契約数',
  'Broadband Access': 'ブロードバンド普及率',
  'R&D Expenditure': '研究開発費',
  'Analyzing 200+ countries...': '200以上の国を分析中…',
  'Source: World Bank': 'ソース：世界銀行',
  'Updated:': '更新：',

  // Tech Events Panel
  'Loading tech events...': 'テックイベントを読み込み中…',
  'Upcoming': '今後の予定',
  'Conferences': 'カンファレンス',
  'Earnings': '決算',
  'No events to display': '表示するイベントなし',
  'conferences': 'カンファレンス',
  'on map': 'マップ上',
  'TODAY': '本日',
  'SOON': '間近',
  'is not currently live': 'は現在ライブ配信していません',

  // Regulation Panel
  'Timeline': 'タイムライン',
  'Deadlines': '期限',
  'Regulations': '規制',
  'Countries': '国別',
  'No recent regulatory actions': '最近の規制措置はありません',
  'Recent Regulatory Actions (Last 12 Months)': '最近の規制措置（過去12ヶ月）',
  'actions': '件',
  'No upcoming compliance deadlines in the next 12 months': '今後12ヶ月以内のコンプライアンス期限はありません',
  'Upcoming Compliance Deadlines': 'コンプライアンス期限',
  'deadlines': '件の期限',
  'days': '日',
  'Penalties:': '罰則：',
  'Active Regulations': '施行中の規制',
  'Proposed Regulations': '提案中の規制',
  'Key Provisions:': '主要条項：',
  'more...': '件追加…',
  'Learn More →': '詳細 →',
  'TBD': '未定',
  'comprehensive': '包括的',
  'sectoral': 'セクター別',
  'voluntary': '自主的',
  'proposed': '提案中',
  'active': '施行中',
  'HIGH': '高',
  'MEDIUM': '中',
  'LOW': '低',
  'Source:': 'ソース：',
  'Global Regulatory Landscape': 'グローバル規制状況',
  'Strict': '厳格',
  'Moderate': '中程度',
  'Permissive': '寛容',
  'Undefined': '未定義',
  'Active': '施行中',
  'Proposed': '提案中',
  'Updated': '更新',

  // Tech Hubs Panel
  'story': '件',
  'stories': '件',
  'ALERT': 'アラート',

  // Map Layers (DeckGLMap + Map)
  'Layers': 'レイヤー',
  'LEGEND': '凡例',
  'Startup Hubs': 'スタートアップ拠点',
  'Tech HQs': 'テック本社',
  'Accelerators': 'アクセラレーター',
  'Cloud Regions': 'クラウドリージョン',
  'AI Data Centers': 'AIデータセンター',
  'Undersea Cables': '海底ケーブル',
  'Internet Outages': 'インターネット障害',
  'Natural Events': '自然災害',
  'Startup Hub': 'スタートアップ拠点',
  'Tech HQ': 'テック本社',
  'Accelerator': 'アクセラレーター',
  'Cloud Region': 'クラウドリージョン',
  'Datacenter': 'データセンター',
  // Full variant layers
  'Intel Hotspots': 'インテルホットスポット',
  'Conflict Zones': '紛争地帯',
  'Military Bases': '軍事基地',
  'Nuclear Sites': '核施設',
  'Gamma Irradiators': 'ガンマ照射施設',
  'Spaceports': '宇宙港',
  'Pipelines': 'パイプライン',
  'Military Activity': '軍事活動',
  'Ship Traffic': '船舶航行',
  'Flight Delays': 'フライト遅延',
  'Protests': '抗議デモ',
  'UCDP Events': 'UCDP紛争',
  'Displacement Flows': '避難民フロー',
  'Weather Alerts': '気象警報',
  'Strategic Waterways': '戦略的水路',
  'Economic Centers': '経済中心地',
  'Critical Minerals': '重要鉱物',
  'High Alert': '高警戒',
  'Elevated': '警戒',
  'Monitoring': '監視',
  'Base': '基地',
  'Nuclear': '核施設',
  'Layer Guide': 'レイヤーガイド',
  'Map Layers Guide': 'マップレイヤーガイド',

  // Map Layer Help - Tech Variant
  'Tech Ecosystem': 'テックエコシステム',
  'STARTUPHUBS': 'スタートアップ拠点',
  'Major startup ecosystems (SF, NYC, London, etc.)': '主要スタートアップ拠点（SF、NYC、ロンドンなど）',
  'CLOUDREGIONS': 'クラウドリージョン',
  'AWS, Azure, GCP data center regions': 'AWS、Azure、GCPデータセンター地域',
  'TECHHQS': 'テック本社',
  'Headquarters of major tech companies': '大手テック企業の本社',
  'ACCELERATORS': 'アクセラレーター',
  'Y Combinator, Techstars, 500 Startups locations': 'Y Combinator、Techstars、500 Startupsの拠点',
  'Infrastructure': 'インフラ',
  'CABLES': '海底ケーブル',
  'Major undersea fiber optic cables (internet backbone)': '主要海底光ファイバーケーブル（インターネット基幹）',
  'DATACENTERS': 'AIデータセンター',
  'AI compute clusters ≥10,000 GPUs': 'GPU1万基以上のAI計算クラスター',
  'OUTAGES': 'インターネット障害',
  'Internet blackouts and service disruptions': 'インターネット遮断・サービス障害',
  'Natural & Economic': '自然・経済',
  'NATURAL': '自然災害',
  'Earthquakes, storms, fires (may affect data centers)': '地震、嵐、火災（データセンターに影響の可能性）',
  'WEATHER': '気象',
  'Severe weather alerts': '重大気象警報',
  'ECONOMIC': '経済',
  'Stock exchanges & central banks': '証券取引所・中央銀行',
  'COUNTRIES': '国名ラベル',
  'Country name overlays': '国名オーバーレイ',

  // Map Layer Help - Full Variant
  'Time Filter (top-right)': '時間フィルター（右上）',
  '1H/6H/24H': '1H/6H/24H',
  'Filter time-based data to recent hours': '時間ベースのデータを直近に絞り込み',
  '7D/30D/ALL': '7D/30D/ALL',
  'Show data from past week, month, or all time': '過去1週間、1ヶ月、全期間のデータを表示',
  'Affects: Earthquakes, Weather, Protests, Outages': '対象：地震、気象、抗議、障害',
  'Geopolitical': '地政学',
  'CONFLICTS': '紛争地帯',
  'Active war zones (Ukraine, Gaza, etc.) with boundaries': '現在の戦闘地域（ウクライナ、ガザなど）',
  'HOTSPOTS': 'ホットスポット',
  'Tension regions - color-coded by news activity level': '緊張地域 — ニュース活動量で色分け',
  'SANCTIONS': '制裁',
  'Countries under US/EU/UN economic sanctions': '米国/EU/国連の経済制裁対象国',
  'PROTESTS': '抗議デモ',
  'Civil unrest, demonstrations (time-filtered)': '市民不安、デモ（時間フィルター対応）',
  'Military & Strategic': '軍事・戦略',
  'BASES': '軍事基地',
  'US/NATO, China, Russia military installations (150+)': '米国/NATO、中国、ロシアの軍事施設（150+）',
  'NUCLEAR': '核施設',
  'Power plants, enrichment, weapons facilities': '原子力発電所、濃縮施設、兵器施設',
  'IRRADIATORS': 'ガンマ照射施設',
  'Industrial gamma irradiator facilities': '産業用ガンマ線照射施設',
  'MILITARY': '軍事活動',
  'Live military aircraft and vessel tracking': 'リアルタイム軍用機・艦艇追跡',
  'Major undersea fiber optic cables (20 backbone routes)': '主要海底光ファイバーケーブル（20基幹ルート）',
  'PIPELINES': 'パイプライン',
  'Oil/gas pipelines (Nord Stream, TAPI, etc.)': '石油/ガスパイプライン（ノルドストリーム、TAPIなど）',
  'Transport': '輸送',
  'SHIPPING': '海運',
  'Vessels, chokepoints, 61 strategic ports': '船舶、チョークポイント、61の戦略港',
  'DELAYS': 'フライト遅延',
  'Airport delays and ground stops (FAA)': '空港遅延・地上停止（FAA）',
  'Earthquakes (USGS) + storms, fires, volcanoes, floods (NASA EONET)': '地震（USGS）＋嵐、火災、火山、洪水（NASA EONET）',
  'Labels': 'ラベル',
  'WATERWAYS': '水路',
  'Strategic chokepoint labels': '戦略的チョークポイントラベル',

  // Search Modal
  'Search companies, AI labs, startups, events...': '企業、AIラボ、スタートアップ、イベントを検索…',
  'HQs • Companies • AI Labs • Startups • Accelerators • Events': '本社 • 企業 • AIラボ • スタートアップ • アクセラレーター • イベント',
  'Search news, pipelines, bases, markets...': 'ニュース、パイプライン、基地、市場を検索…',
  'News • Hotspots • Conflicts • Bases • Pipelines • Cables • Datacenters': 'ニュース • ホットスポット • 紛争 • 基地 • パイプライン • ケーブル • データセンター',

  // Mobile Warning Modal
  'Mobile View': 'モバイル表示',
  "You're viewing a simplified mobile version focused on MENA region with essential layers enabled.": 'MENA地域に焦点を当てた簡易モバイル版を表示中です。基本レイヤーが有効になっています。',
  'Tip: Use the view buttons (GLOBAL/US/MENA) to switch regions. Tap markers to see details.': 'ヒント：表示ボタン（GLOBAL/US/MENA）で地域を切替。マーカーをタップで詳細表示。',
  "Don't show again": '今後表示しない',
  'Got it': '了解',

  // Map Layer Buttons (D3/SVG mobile map)
  'Shipping': '海運',
  'Delays': '遅延',
  'Military': '軍事',
  'Conflicts': '紛争',
  'Hotspots': 'ホットスポット',
  'Sanctions': '制裁',
  'Bases': '基地',
  'Irradiators': '照射施設',
  'Cables': 'ケーブル',
  'Outages': '障害',
  'Datacenters': 'データセンター',
  'Natural': '自然',
  'Weather': '気象',
  'Economic': '経済',
  'Waterways': '水路',

  // Resize handle
  'Drag to resize (double-click to reset)': 'ドラッグでサイズ変更（ダブルクリックでリセット）',
};

// ─── Tooltip translations (keyed by panel ID) ──────────────────────────────
const jaTooltips: Record<string, string> = {
  'gdelt-intel': `<strong>GDELTインテリジェンス</strong>
リアルタイムのグローバルニュース監視：
<ul>
  <li>厳選されたトピックカテゴリ（紛争、サイバーなど）</li>
  <li>100以上の言語の記事を翻訳</li>
  <li>15分ごとに更新</li>
</ul>
ソース：GDELT Project (gdeltproject.org)`,

  'insights': `<strong>AI分析</strong><br>
• <strong>世界ブリーフ</strong>：AI要約（Groq/OpenRouter）<br>
• <strong>センチメント</strong>：ニュースのトーン分析<br>
• <strong>速度</strong>：急速に展開するストーリー<br>
• <strong>焦点</strong>：ニュースエンティティをマップシグナル（軍事、抗議、障害）と相関分析<br>
<em>デスクトップ専用 • Llama 3.3 + 焦点検出で動作</em>`,

  'cii': `<strong>CII算出方法</strong>
国別スコア（0-100）：
<ul>
  <li>40% ベースライン地政学的リスク</li>
  <li><strong>U</strong>nrest：抗議、死者、インターネット障害</li>
  <li><strong>S</strong>ecurity：領土上の軍用機/艦艇</li>
  <li><strong>I</strong>nformation：ニュース速度と焦点相関</li>
  <li>ホットスポット近接ブースト（戦略的地点）</li>
</ul>
<em>U:S:I の値はコンポーネントスコアを表示。</em>
焦点検出がニュースエンティティとマップシグナルを相関分析し正確なスコアリングを実現。`,

  'cascade': `<strong>カスケード分析</strong>
インフラ依存関係をモデル化：
<ul>
  <li>海底ケーブル、パイプライン、港湾、チョークポイント</li>
  <li>インフラを選択して障害をシミュレーション</li>
  <li>影響を受ける国と容量損失を表示</li>
  <li>冗長ルートを特定</li>
</ul>
データ：TeleGeography および業界情報源。`,

  'strategic-risk': `<strong>算出方法</strong>
総合スコア（0-100）：
<ul>
  <li>50% 国家不安定性（上位5カ国加重）</li>
  <li>30% 地理的収束ゾーン</li>
  <li>20% インフラ障害</li>
</ul>
5分ごとに自動更新。`,

  'strategic-posture': `<strong>算出方法</strong>
<p>戦域別の軍用機・艦艇を集計。</p>
<ul>
  <li><strong>通常：</strong> ベースライン活動</li>
  <li><strong>上昇：</strong> 閾値超過（50機以上）</li>
  <li><strong>危機：</strong> 高密度集中（100機以上）</li>
</ul>
<p><strong>打撃能力あり：</strong> 持続的作戦に十分な空中給油機 + AWACS + 戦闘機が存在。</p>`,

  'polymarket': `<strong>予測市場</strong>
実資金の予測市場：
<ul>
  <li>価格は群衆の確率推定を反映</li>
  <li>高い取引量 = より信頼性の高いシグナル</li>
  <li>地政学・時事問題にフォーカス</li>
</ul>
ソース：Polymarket (polymarket.com)`,

  'satellite-fires': 'NASA FIRMS VIIRS衛星による監視対象紛争地域の熱検知。高強度 = 輝度360K超 &amp; 信頼度80%超。',

  'ucdp-events': `<strong>UCDP地理参照イベント</strong>
ウプサラ大学のイベントレベル紛争データ。
<ul>
  <li><strong>国家間：</strong> 政府 対 反政府勢力</li>
  <li><strong>非国家：</strong> 武装グループ 対 武装グループ</li>
  <li><strong>一方的：</strong> 民間人に対する暴力</li>
</ul>
死者数は最良推定値（低〜高の範囲）。
ACLED重複は自動除外。`,

  'displacement': `<strong>UNHCR避難民データ</strong>
UNHCRによるグローバルな難民、亡命希望者、国内避難民の数。
<ul>
  <li><strong>出身国</strong>：避難元の国</li>
  <li><strong>受入国</strong>：難民を受け入れている国</li>
  <li>危機バッジ：🔴 100万人超 | 🟠 50万人超の避難民</li>
</ul>
データは年次更新。CC BY 4.0ライセンス。`,

  'climate': `<strong>気候異常モニター</strong>
30日ベースラインからの気温・降水量の偏差。
データ：Open-Meteo（ERA5再解析）。
<ul>
  <li><strong>極端：</strong> 5°C超 または 80mm/日超の偏差</li>
  <li><strong>中程度：</strong> 3°C超 または 40mm/日超の偏差</li>
</ul>
紛争・災害リスクの高い15ゾーンを監視。`,

  'population-exposure': `<strong>人口暴露推定</strong>
イベント影響半径内の推定人口。
WorldPop国別密度データに基づく。
<ul>
  <li>紛争：半径50km</li>
  <li>地震：半径100km</li>
  <li>洪水：半径100km</li>
  <li>山火事：半径30km</li>
</ul>`,

  'tech-readiness': `<strong>グローバル技術準備度</strong><br>
世界銀行データに基づく総合スコア（0-100）：<br><br>
<strong>表示指標：</strong><br>
🌐 インターネット利用者（人口比%）<br>
📱 モバイル契約数（人口100人あたり）<br>
🔬 研究開発費（GDP比%）<br><br>
<strong>重み：</strong> R&D (35%)、インターネット (30%)、ブロードバンド (20%)、モバイル (15%)<br><br>
<em>— = 最新データなし</em><br>
<em>ソース：世界銀行オープンデータ（2019-2024）</em>`,

  'tech-hubs': `<strong>テックハブ活動状況</strong><br>
ニュース活動量の多いテックハブを表示。<br><br>
<em>活動レベル：</em><br>
• <span style="color: #00ff88">高</span> — 速報ニュースまたはスコア50以上<br>
• <span style="color: #ffc800">上昇</span> — スコア20-49<br>
• <span style="color: #888">低</span> — スコア20未満<br><br>
ハブをクリックすると地図上で拡大表示します。`,
};

// ─── Public API ─────────────────────────────────────────────────────────────

/**
 * Translate a static UI string.
 * Returns the key unchanged when language is 'en'.
 */
export function t(key: string): string {
  if (getLanguage() === 'en') return key;
  return ja[key] ?? key;
}

/**
 * Get translated tooltip HTML for a panel.
 * Returns null when language is 'en' or no translation exists (caller should use original).
 */
export function tTooltip(panelId: string): string | null {
  if (getLanguage() === 'en') return null;
  return jaTooltips[panelId] ?? null;
}

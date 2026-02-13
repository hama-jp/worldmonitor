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

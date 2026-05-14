const categories = [
  {
    id: "walking",
    name: "歩行補助具",
    note: "歩行状態、身長、屋内外、収納性から歩行器・歩行車を選定",
    color: "#7a5ca8",
  },
  {
    id: "handrail",
    name: "手すり・立ち座り",
    note: "ベッド・玄関・室内移動の立ち座りや短距離歩行を支援",
    color: "#9b5d86",
  },
  {
    id: "wheelchair",
    name: "車いす・車いす付属品",
    note: "車いす中心の生活、姿勢保持、移動負担に合わせて選定",
    color: "#1f7ea6",
  },
  {
    id: "slope",
    name: "スロープ",
    note: "玄関・屋外段差・車いす移動の環境条件から選定",
    color: "#a6652b",
  },
  {
    id: "lift",
    name: "移動用リフト・入浴関連",
    note: "浴槽またぎ、浴室内移動、入浴介助、移乗負担から選定",
    color: "#3c8b54",
  },
  {
    id: "toilet",
    name: "トイレ・排泄支援",
    note: "トイレ移動、ベッド上排泄、見守り通知の必要性から選定",
    color: "#c05d72",
  },
];

const products = [
  {
    category: "walking",
    name: "イーストアイ セーフティーアームウォーカー Lタイプ SAWLHR",
    maker: "イーストアイ",
    page: "カタログ p.30",
    specs: ["適応目安: 高さ885-985mm", "重量: 4.0kg", "最大使用者体重: 100kg"],
    tags: ["持ち上げ型", "屋内外", "非課税"],
    fit: { mobility: ["independent", "assisted"], place: ["both", "outdoor"], tall: true },
    reason: "身長が高めで、歩行のふらつきを両手でしっかり支えたい場合に向きます。折りたたみ式で、屋内外どちらにも使いやすい標準的な選択肢です。",
  },
  {
    category: "walking",
    name: "Rec01 コンパクトタイプ",
    maker: "イーストアイ",
    page: "カタログ p.30",
    specs: ["適応目安: 高さ700-850mm", "重量: 2.5kg", "座面付き・折りたたみ可"],
    tags: ["コンパクト", "屋内", "持ち上げ型"],
    fit: { mobility: ["independent", "assisted"], place: ["indoor"], narrow: true, compact: true },
    reason: "幅480mmの小さめ設計で、廊下や室内が狭い住宅でも扱いやすい候補です。座面があり、短い休憩を挟みたい人にも合います。",
  },
  {
    category: "walking",
    name: "アルコーSK型mini",
    maker: "星光医療器製作所",
    page: "カタログ p.31",
    specs: ["適応目安: 高さ750-1020mm", "重量: 11.8kg", "最大使用者体重: 80kg"],
    tags: ["前腕支持", "屋内", "4輪自在"],
    fit: { mobility: ["assisted"], place: ["indoor"], narrow: true, armSupport: true },
    reason: "前腕を預けて体幹を支えながら歩けるため、握力やバランスに不安がある人に向きます。miniは在宅向けにコンパクトです。",
  },
  {
    category: "walking",
    name: "アルコーステラ",
    maker: "星光医療器製作所",
    page: "カタログ p.32",
    specs: ["適応目安: 高さ772-889mm", "重量: 8.0kg", "最大使用者体重: 100kg"],
    tags: ["四輪歩行車", "抑速ブレーキ", "屋内外"],
    fit: { mobility: ["independent", "assisted"], place: ["both", "outdoor"], barrier: true },
    reason: "速度が出すぎにくい抑速ブレーキ付きで、屋外や坂道のある環境でも安心感を高めやすい歩行車です。",
  },
  {
    category: "walking",
    name: "ハッピーIIトール",
    maker: "竹虎",
    page: "カタログ p.33",
    specs: ["適応目安: 高さ780-920mm", "重量: 8.0kg", "最大使用者体重: 100kg"],
    tags: ["四輪歩行車", "座面あり", "屋内外"],
    fit: { mobility: ["independent"], place: ["both", "outdoor"], tall: true },
    reason: "通常のハッピーIIより高さを確保でき、身長が高めの人の外出歩行に合います。座面とカゴがあり、買い物にも使いやすい構成です。",
  },
  {
    category: "handrail",
    name: "ベスポジ BPZ レギュラー 基本セット",
    maker: "DIPPERホクメイ",
    page: "カタログ p.39",
    specs: ["取付範囲: 1900-2700mm", "天井と床で突っ張り設置", "丸型・T型天井ベース"],
    tags: ["室内手すり", "工事不要", "立ち座り"],
    fit: { mobility: ["independent", "assisted"], place: ["indoor"], home: ["standard", "narrow"] },
    reason: "床と天井を使って設置できる縦手すりです。トイレ前、寝室、廊下など立ち座りや方向転換の起点を作りたい時に役立ちます。",
  },
  {
    category: "handrail",
    name: "ウェーブ型手すりロング BPE-300-40",
    maker: "DIPPERホクメイ",
    page: "カタログ p.39",
    specs: ["長さ: 60cm", "樹脂被覆木製素材", "組み合わせ設置可"],
    tags: ["壁付け", "室内", "移動補助"],
    fit: { mobility: ["independent", "assisted"], place: ["indoor"], narrow: true },
    reason: "波形の持ち手で握る位置を選びやすく、室内の短い移動や立ち上がり動作の補助に向きます。",
  },
  {
    category: "handrail",
    name: "たよレールSOTOE ロング型 BZK-05",
    maker: "マツ六",
    page: "カタログ p.45",
    specs: ["手すり幅: 500mm", "高さ: 750-900mm", "ベース奥行: 800mm"],
    tags: ["屋外", "玄関", "工事不要"],
    fit: { mobility: ["independent", "assisted"], place: ["outdoor", "both"], barrier: true },
    reason: "玄関先や屋外での段差前後に置ける据置型手すりです。外出時の一歩目や靴の脱ぎ履きの支えに向きます。",
  },
  {
    category: "handrail",
    name: "BSモア6 625-160",
    maker: "シコク",
    page: "カタログ p.46",
    specs: ["ベース: 920×520mm", "手すり幅: 600mm", "重量: 約18.0kg"],
    tags: ["ベッドサイド", "歩行時", "開閉動作"],
    fit: { mobility: ["assisted", "wheelchair"], place: ["indoor"], toilet: ["transfer"] },
    reason: "ベッド横での起き上がりから歩き出しまでを支える据置型です。移乗や方向転換が不安な人に合います。",
  },
  {
    category: "wheelchair",
    name: "ジスタ WAW33",
    maker: "幸和製作所",
    page: "カタログ p.36",
    specs: ["押し手高さ: 700-910mm", "重量: 5.9kg", "最大積載荷重: 5kg"],
    tags: ["車いす対応", "屋内外", "軽量"],
    fit: { mobility: ["wheelchair"], place: ["both", "outdoor"], compact: true },
    reason: "車いす利用者の歩行練習や短距離移動を支えたい場合に選びやすい軽量歩行車です。",
  },
  {
    category: "wheelchair",
    name: "ジスタワイド WAW36",
    maker: "幸和製作所",
    page: "カタログ p.36",
    specs: ["押し手高さ: 775-985mm", "重量: 6.3kg", "最大使用者体重: 100kg"],
    tags: ["ワイド", "屋内外", "座面あり"],
    fit: { mobility: ["wheelchair", "assisted"], place: ["both"], tall: true },
    reason: "体格が大きめの人でも使いやすいワイドタイプです。座面付きで、屋内外の移動中に休憩しやすい構成です。",
  },
  {
    category: "wheelchair",
    name: "シトレア WAW23",
    maker: "幸和製作所",
    page: "カタログ p.36",
    specs: ["押し手高さ: 840-1120mm", "重量: 約7.9kg", "最大使用者体重: 75kg"],
    tags: ["前腕支持", "屋内外", "コンパクト"],
    fit: { mobility: ["wheelchair", "assisted"], place: ["both"], armSupport: true },
    reason: "前腕支持が必要な人向けの軽量・コンパクトな歩行車です。車いす中心でも、立位訓練や短距離移動の候補になります。",
  },
  {
    category: "slope",
    name: "可搬型スロープ ラインナップ",
    maker: "アコルくらぶ掲載品",
    page: "カタログ p.76-78",
    specs: ["玄関・屋外段差向け", "車いす移動を補助", "環境に合わせ長さを選択"],
    tags: ["段差", "車いす", "屋外"],
    fit: { mobility: ["wheelchair"], barrier: true, place: ["outdoor", "both"] },
    reason: "車いすで玄関や屋外段差を越える必要がある環境では、まず検討したいカテゴリです。段差高さと設置スペースで長さを選びます。",
  },
  {
    category: "slope",
    name: "玄関用ベストサポート手すり オプション踏台",
    maker: "シコク",
    page: "カタログ p.47",
    specs: ["ロータイプ・ハイタイプ", "手すりと組み合わせ", "玄関上がり框対応"],
    tags: ["玄関", "段差", "手すり併用"],
    fit: { mobility: ["independent", "assisted"], barrier: true, place: ["indoor"] },
    reason: "車いすではなく歩行で玄関段差を越える人には、踏台と手すりの組み合わせが現実的です。",
  },
  {
    category: "slope",
    name: "BS小路 626-110",
    maker: "シコク",
    page: "カタログ p.46",
    specs: ["段差目安: 0-150mm", "ベース: 620×730mm", "重量: 約15.6kg"],
    tags: ["小段差", "コンパクト", "手すり"],
    fit: { mobility: ["assisted", "wheelchair"], barrier: true, narrow: true },
    reason: "小さな段差や狭い場所で、手すりとステップをまとめて使いたい場合に向きます。",
  },
  {
    category: "lift",
    name: "移乗サポートロボット Hug L1",
    maker: "FUJI",
    page: "カタログ p.81",
    specs: ["身長目安: 140-180cm", "耐荷重: 100kg", "充電時間: 8時間"],
    tags: ["移乗", "立ち上がり", "介助負担軽減"],
    fit: { mobility: ["bedbound", "wheelchair"], caregiver: true, weightLimit: 100 },
    reason: "立ち上がりや便座への移乗をサポートする機器です。介助者がいる環境で、腰への負担を下げたい場合に合います。",
  },
  {
    category: "lift",
    name: "バスリフト EWB101RS",
    maker: "TOTO",
    page: "カタログ p.85",
    specs: ["浴槽内で昇降", "耐荷重: 100kg", "充電式電池"],
    tags: ["入浴", "浴槽", "コンパクト"],
    fit: { mobility: ["assisted", "wheelchair"], caregiver: true, bathing: ["bathtub", "transfer"], weightLimit: 100 },
    reason: "浴槽への立ち座りが不安な人向けの入浴支援です。浴槽条件に合えば、またぎ動作や沈み込みの負担を減らせます。",
  },
  {
    category: "lift",
    name: "独立宣言ローザ DSRS-W",
    maker: "コムラ製作所",
    page: "カタログ p.80",
    specs: ["座面高さ: 15-610mm", "耐荷重: 80kg", "低座面・移乗支援"],
    tags: ["昇降座椅子", "床座", "移乗"],
    fit: { mobility: ["assisted", "wheelchair"], place: ["indoor"], weightLimit: 80 },
    reason: "床に近い姿勢からの立ち上がりや、低い座面からの移乗が課題の人に向きます。",
  },
  {
    category: "lift",
    name: "床走行式電動介護リフト KQ-781",
    maker: "パラマウントベッド",
    page: "カタログ p.80",
    specs: ["安全使用荷重: 205kg", "全長: 1300mm", "全幅: 650-1060mm"],
    tags: ["全介助", "ベッド移乗", "高耐荷重"],
    fit: { mobility: ["bedbound"], caregiver: true, place: ["facility", "indoor"], bathing: ["assisted"] },
    reason: "立位が難しく、ベッドから車いすなどへの移乗を安全に行いたい場合の本格的なリフトです。",
  },
  {
    category: "lift",
    name: "バスラベンダー",
    maker: "西川",
    page: "カタログ p.85",
    specs: ["置くだけ簡単", "浴槽入浴リフト", "最大荷重: 100kg"],
    tags: ["入浴", "浴槽", "移乗"],
    fit: { mobility: ["assisted", "wheelchair"], caregiver: true, bathing: ["bathtub", "assisted"], weightLimit: 100 },
    reason: "浴槽への出入りや浴槽内での姿勢保持に不安がある場合の候補です。浴室条件と設置可能寸法を確認して使います。",
  },
  {
    category: "lift",
    name: "バスリフト EWB101RR",
    maker: "TOTO",
    page: "カタログ p.85",
    specs: ["浴槽内で昇降", "耐荷重: 100kg", "リモコン操作"],
    tags: ["入浴", "浴槽", "介助負担軽減"],
    fit: { mobility: ["assisted", "wheelchair"], caregiver: true, bathing: ["bathtub", "assisted"], weightLimit: 100 },
    reason: "浴槽またぎや沈み込み動作に介助が必要な場合に向きます。介助者の負担を下げながら浴槽入浴を検討できます。",
  },
  {
    category: "toilet",
    name: "スカットクリーン KW-65H",
    maker: "パラマウントベッド",
    page: "カタログ p.85",
    specs: ["採尿器本体", "重量: 5kg", "男性用・女性用レシーバーあり"],
    tags: ["自動排泄処理", "ベッド上", "購入品あり"],
    fit: { mobility: ["bedbound"], toilet: ["bed"], caregiver: true },
    reason: "トイレまでの移動が難しい場合に、ベッド上での排尿処理を支援します。レシーバー選定が必要です。",
  },
  {
    category: "toilet",
    name: "家族コール3A スマート",
    maker: "テクノスジャパン",
    page: "カタログ p.87",
    specs: ["床センサー", "受信器スマートK", "履歴表示・防滴"],
    tags: ["見守り", "離床検知", "ベッド周辺"],
    fit: { mobility: ["assisted", "wheelchair", "bedbound"], caregiver: true, toilet: ["transfer", "bed"] },
    reason: "夜間のトイレ移動や離床を介助者に知らせたい場合に合います。転倒リスクがある人の見守りに使いやすいセットです。",
  },
  {
    category: "toilet",
    name: "移乗サポートロボット Hug T1",
    maker: "FUJI",
    page: "カタログ p.81",
    specs: ["身長目安: 140-180cm", "耐荷重: 100kg", "最小回転半径: 910mm"],
    tags: ["トイレ移乗", "立ち上がり", "介助負担軽減"],
    fit: { mobility: ["wheelchair", "bedbound"], caregiver: true, toilet: ["transfer"], weightLimit: 100 },
    reason: "ベッドから便座への移乗や着座姿勢保持を助けます。介助者がいる環境で、トイレ移乗を安定させたい場合に有力です。",
  },
  {
    category: "toilet",
    name: "ベスポジ BPZ 基本セット",
    maker: "DIPPERホクメイ",
    page: "カタログ p.39",
    specs: ["取付範囲: 1900-2700mm", "工事不要", "縦手すり"],
    tags: ["トイレ前", "立ち座り", "室内"],
    fit: { mobility: ["independent", "assisted"], toilet: ["independent", "transfer"], place: ["indoor"] },
    reason: "トイレまで移動できるが、便座への立ち座りや方向転換が不安な人に使いやすい縦手すりです。",
  },
];

const form = document.querySelector("#needs-form");
const results = document.querySelector("#results");
const resetButton = document.querySelector("#reset-button");

const getState = () => ({
  height: Number(document.querySelector("#height").value || 160),
  weight: Number(document.querySelector("#weight").value || 60),
  mobility: document.querySelector("#mobility").value,
  place: document.querySelector("#place").value,
  home: document.querySelector("#home").value,
  toilet: document.querySelector("#toilet").value,
  bathing: document.querySelector("#bathing").value,
  caregiver: document.querySelector("#caregiver").checked,
  compact: document.querySelector("#compact").checked,
});

function scoreProduct(product, state) {
  let score = 42;
  const fit = product.fit || {};

  if (fit.mobility?.includes(state.mobility)) score += 26;
  if (fit.place?.includes(state.place)) score += 14;
  if (state.place === "both" && fit.place?.some((p) => ["indoor", "outdoor", "both"].includes(p))) score += 8;
  if (fit.home?.includes(state.home)) score += 10;
  if (fit.toilet?.includes(state.toilet)) score += 18;
  if (fit.bathing?.includes(state.bathing)) score += 20;
  if (fit.narrow && state.home === "narrow") score += 14;
  if (fit.barrier && state.home === "barrier") score += 18;
  if (fit.compact && state.compact) score += 10;
  if (fit.caregiver && state.caregiver) score += 12;
  if (fit.caregiver && !state.caregiver) score -= 20;
  if (fit.tall && state.height >= 168) score += 8;
  if (fit.armSupport && ["assisted", "wheelchair"].includes(state.mobility)) score += 8;
  if (fit.weightLimit && state.weight > fit.weightLimit) score -= 55;

  if (product.category === "slope" && state.home !== "barrier") score -= 6;
  if (product.category === "toilet" && state.toilet === "bed" && product.tags.includes("ベッド上")) score += 22;
  if (product.category === "lift" && state.mobility === "bedbound") score += 22;
  if (product.category === "lift" && state.bathing !== "independent") score += 12;
  if (product.tags.includes("入浴") && state.bathing === "independent") score -= 8;
  if (product.category === "wheelchair" && state.mobility === "wheelchair") score += 16;
  if (product.category === "walking" && state.mobility === "bedbound") score -= 40;

  return Math.max(0, Math.min(100, score));
}

function render() {
  const state = getState();

  results.innerHTML = categories
    .map((category) => {
      const recommendations = products
        .filter((product) => product.category === category.id)
        .map((product) => ({ ...product, score: scoreProduct(product, state) }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);

      return `
        <article class="category" style="--category-color:${category.color}">
          <header class="category-title">
            <div>
              <h3>${category.name}</h3>
              <p>${category.note}</p>
            </div>
            <span class="count">上位3件</span>
          </header>
          <div class="cards">
            ${recommendations.map((product, index) => cardTemplate(product, index + 1)).join("")}
          </div>
        </article>
      `;
    })
    .join("");
}

function cardTemplate(product, rank) {
  return `
    <section class="card">
      <div class="card-head">
        <div>
          <p class="maker">${product.maker}</p>
          <h3>${product.name}</h3>
        </div>
        <span class="rank">${rank}</span>
      </div>
      <div>
        <ul class="specs">
          ${product.specs.map((spec) => `<li>${spec}</li>`).join("")}
        </ul>
        <p class="reason">${product.reason}</p>
      </div>
      <footer>
        <div class="tag-row">
          ${product.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
        <div class="score-row">
          <span>${product.page}</span>
          <span class="score-bar" aria-label="適合度 ${product.score}"><span style="--score:${product.score}%"></span></span>
        </div>
      </footer>
    </section>
  `;
}

form.addEventListener("input", render);
resetButton.addEventListener("click", () => {
  document.querySelector("#height").value = 160;
  document.querySelector("#weight").value = 60;
  document.querySelector("#mobility").value = "independent";
  document.querySelector("#place").value = "indoor";
  document.querySelector("#home").value = "narrow";
  document.querySelector("#toilet").value = "independent";
  document.querySelector("#bathing").value = "independent";
  document.querySelector("#caregiver").checked = false;
  document.querySelector("#compact").checked = true;
  render();
});

render();

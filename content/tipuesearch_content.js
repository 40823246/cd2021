var tipuesearch = {"pages": [{'title': 'About', 'text': '倉儲: https://github.com/40823246/cd2021 \n 小組成員網站: 40823208李翊帆 \n 小組網站: https://40823208.github.io/stage1-bg8/content/About.html \n 小組gitter: https://gitter.im/40823208/stage1-bg8 \n', 'tags': '', 'url': 'About.html'}, {'title': '每周進度', 'text': '', 'tags': '', 'url': '每周進度.html'}, {'title': 'stage1-bg8', 'text': 'w1 \n \n 影片: \n 2021 協同產品設計實習 stage1 bg8 \n \n \n w2 \n 影片: \n w2 2021 協同產品設計實習 stage1 bg8 \n 檔案下載: https://drive.google.com/file/d/1A2OD-HsjxqEZE4VA-dOrMSLWLWxn2uR6/view?usp=sharing \n \n \n Day1 \n 20210306 \n 自動零食為食機的盒子完成 \n \n Day2 \n 20210307 \n 上升螺旋桿完成 \n \n Day3 \n 20210308 \n 修改盒子:1.新增螺桿洞 2.加入斜坡讓食物集中 \n \n Day4 \n 20210309 \n 1.修改斜度 2.加入擋板 \n \n 增加螺桿長度，讓模擬時穩定一點 \n \n Day5 \n 20210310 \n 模擬時，球體會上不去，所以在底部增加斜角，方便將球體鏟起 \n \n Day6 \n 20210311 \n 因為此機構垂直運行沒辦法將球體往上帶，加上我們想到更好的點子，所以我們決定換題目，但是沿用舊機構，以下是新主題(自動分球機)。 \n 主體 \n \n 螺旋桿 \n \n w3 \n 零件總結影片 \n \n \n 圖案下載: https://drive.google.com/file/d/1A2OD-HsjxqEZE4VA-dOrMSLWLWxn2uR6/view?usp=sharing \n 20210313 \n 模擬時發現孔比軸大，有間隙，旋轉時軸會跳飛，所以把孔改成與軸一樣直徑，30mm > 20mm \n \n 模擬時發現螺旋葉片會卡到縫裡，所以把一長條的縫改成洞 \n \n 繪製鋼珠盒 \n \n 20210314 \n 模擬時孔面與螺旋桿摩擦，導致螺旋桿莫名亂跳，因此加大孔徑 \n \n 繪製大鋼珠盒，讓大量鋼珠慢慢涓流 \n 1 \n', 'tags': '', 'url': 'stage1-bg8.html'}, {'title': 'stage2-bg1', 'text': 'w5 \n 20210326 \n 討論做什麼 \n 結論: \n 轉子引擎 \n \n \n w6 \n solidworks模擬影片(20rpm) \n \n \n 20210402 \n 繪製轉子 \n 外型參考 勒洛三角形 繪製而成 \n 齒數為52齒 模數為2 \n \n 20210403 \n 偏心軸繪製完成 \n \n 20210404 \n 擋板繪製完成 \n 齒數為34齒 模數為2 \n \n 20210405 \n 外殼繪製完成 \n 輪廓為不規則曲面  擷取不規則取線方法 \n \n 20210406 \n 組合圖完成 \n \n solidworks模擬影片(20rpm) \n \n \n 20210407 \n 因為在coppeliasim中模擬屢次失敗，所以我們決定換題目。 \n \n w7 \n 討論改什麼 \n \n \n 20210411 \n 前輪繪製完成 \n \n 後輪繪製完成 \n \n 底盤繪製完成 \n \n 20210413 \n \n 20210414 \n 擋板繪製完成 \n \n 堆高機組合圖完成 \n \n 6', 'tags': '', 'url': 'stage2-bg1.html'}, {'title': '筆記', 'text': '', 'tags': '', 'url': '筆記.html'}, {'title': 'coppeliasim 新增球體,旋轉軸應用', 'text': '1.如何新增一個直徑0.2,有物理屬性的球體? \n \n 然後將x-size(直徑)調至0.2,然後按[Ok]。 \n --- \n 2.如何再複製一個? \n 對Sphere案右鍵 \n \n 然後到Edit貼上 \n \n 然後兩顆一模一樣的球就會重疊在一起。 \n --- \n 3.如何移動球體? \n 點選紅圈內的按鈕,然後再輕點想移動的球體。 \n \n 這個視窗可以調整X,Y,Z軸的自由度(勾選即可解鎖自由度)。 \n \n --- \n 4.如何新增感測器? \n 新增完再將感測器拖曳到Sphere中。 \n \n 接著調整感測器位置,輕點感測器,再點紅色底線按鈕,X輸入0.1,Z輸入0.12。 \n \n 調整感測器大小參數,輕點感測器,點選紅色底線按鈕,offset輸入0.005,range輸入0.1,angle輸入30。 \n \n --- \n 5.如何新增車輪: \n 首先新增一個新場景。 \n 新增圓柱體，並調整大小 尺寸為（0.08,0.08,0.02）。 \n \n \n \n 在該圓柱的 object common properties 中啟用 \xa0 Collidable，Measurable，Renderable 和 Detectable。 \n 調整圓柱體位置 將圓柱的絕對位置設置為（0.05,0.1,0.04），並將其絕對方向設置為（-90,0,0)。 \n \n 改名為 bubbleRob_leftWheel 並複製。 \n 貼上，並調整絕對位置設置y為-0.1Y在改名為 bubbleRob_rightWheel。 \n 複製兩個輪子並貼到主場景。 \n --- \n 6.有了輪子,那如何新增馬達? \n \n 案ctrl,讓馬達與左輪都在選中狀態 \n 點選 \n \n \n 在position中,點擊apply to selection \n 點選 \n \n \n 在orientation中,點擊apply to selection \n 將輪子拖入馬達中 \n 選中馬達,點選 \n \n \n 點選 \n \n 勾選 \n \n', 'tags': '', 'url': 'coppeliasim 新增球體,旋轉軸應用.html'}, {'title': '組員fork git pull 注意事項', 'text': '當組長倉儲版本較新時(組長是最後一個推送的)，組員必須git pull，更新倉儲。 \n 組員git pull之前先進 \n .git資料夾 > 修改config中url的學號，改為組長的 > git pull >改回自己的。 \n', 'tags': '', 'url': '組員fork git pull 注意事項.html'}, {'title': 'reveal 功能', 'text': '添加圖片(圖檔要放在倉儲中reveal資料夾) \n <image src="圖片.png" width="600" hight="300"> \n 修改width hight數值可以改圖片大小。 \n \n 加入背景圖片 (圖檔要放在倉儲中reveal資料夾) \n <section data-background="圖片.png"> \n 在一開始的section加入即可。 \n \n 加入pdf預覽功能(pdf 檔要放在倉儲中reveal資料夾 ) \n  <iframe data-src="報告.pdf" width="800" height="600" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:3px solid #666; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> \n 修改width hight數值可以改視窗大小。 \n \n 嵌入影片 \n <iframe width="560" height="315" src="影片網址" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n</section> \n 修改width hight數值可以改視窗大小。 \n', 'tags': '', 'url': 'reveal 功能.html'}, {'title': 'W5', 'text': 'W5.xlsx \n', 'tags': '', 'url': 'W5.html'}]};
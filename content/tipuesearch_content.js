var tipuesearch = {"pages": [{'title': 'About', 'text': '倉儲: https://github.com/40823246/cd2021 \n 小組成員網站: 40823208李翊帆 \n 小組網站: https://40823208.github.io/stage1-bg8/content/About.html \n 小組gitter: https://gitter.im/40823208/stage1-bg8 \n', 'tags': '', 'url': 'About.html'}, {'title': '每周進度', 'text': '', 'tags': '', 'url': '每周進度.html'}, {'title': 'stage1-bg8', 'text': 'w1 \n \n 影片: \n 2021 協同產品設計實習 stage1 bg8 \n \n \n w2 \n 影片: \n w2 2021 協同產品設計實習 stage1 bg8 \n 檔案下載: https://drive.google.com/file/d/1A2OD-HsjxqEZE4VA-dOrMSLWLWxn2uR6/view?usp=sharing \n \n \n Day1 \n 20210306 \n 自動零食為食機的盒子完成 \n \n Day2 \n 20210307 \n 上升螺旋桿完成 \n \n Day3 \n 20210308 \n 修改盒子:1.新增螺桿洞 2.加入斜坡讓食物集中 \n \n Day4 \n 20210309 \n 1.修改斜度 2.加入擋板 \n \n 增加螺桿長度，讓模擬時穩定一點 \n \n Day5 \n 20210310 \n 模擬時，球體會上不去，所以在底部增加斜角，方便將球體鏟起 \n \n Day6 \n 20210311 \n 因為此機構垂直運行沒辦法將球體往上帶，加上我們想到更好的點子，所以我們決定換題目，但是沿用舊機構，以下是新主題(自動分球機)。 \n 主體 \n \n 螺旋桿 \n \n w3 \n 零件總結影片 \n \n \n 圖案下載: https://drive.google.com/file/d/1A2OD-HsjxqEZE4VA-dOrMSLWLWxn2uR6/view?usp=sharing \n 20210313 \n 模擬時發現孔比軸大，有間隙，旋轉時軸會跳飛，所以把孔改成與軸一樣直徑，30mm > 20mm \n \n 模擬時發現螺旋葉片會卡到縫裡，所以把一長條的縫改成洞 \n \n 繪製鋼珠盒 \n \n 20210314 \n 模擬時孔面與螺旋桿摩擦，導致螺旋桿莫名亂跳，因此加大孔徑 \n \n 繪製大鋼珠盒，讓大量鋼珠慢慢涓流 \n 1 \n', 'tags': '', 'url': 'stage1-bg8.html'}, {'title': 'stage2-bg1', 'text': "w5 \n 20210326 \n 討論做什麼 \n 結論: \n 轉子引擎 \n \n \n w6 \n 利用追蹤頂點路徑 取得不規則曲線草圖(20rpm) \n \n \n 20210402 \n 繪製轉子 \n 外型參考 勒洛三角形 繪製而成 \n 齒數為52齒 模數為2 \n \n 20210403 \n 偏心軸繪製完成 \n \n 20210404 \n 擋板繪製完成 \n 齒數為34齒 模數為2 \n \n 20210405 \n 外殼繪製完成 \n 輪廓為不規則曲面  擷取不規則取線方法 \n \n 20210406 \n 組合圖完成 \n \n solidworks模擬影片(20rpm) \n \n > \n 20210407 \n 因為在coppeliasim中模擬屢次失敗，所以我們決定換題目。 \n \n w7 \n 討論改什麼 \n \n 結論:堆高機 \n \n 20210411 \n 前輪繪製完成 \n \n 後輪繪製完成 \n \n 底盤繪製完成 \n \n 20210413 \n \n 20210414 \n 擋板繪製完成 \n \n 堆高機組合圖完成 \n \n 20210415 \n 加入wasd控制堆高機 \n 參考: https://mdekmol.github.io/cd2019a-task1-2019cda_t1_g2/content/Vrep-2.html \n \n function sysCall_init() \n    left_front_handle= sim.getObjectHandle('left_joint')\n    left_back_handle= sim.getObjectHandle('left_joint')\n    right_back_handle= sim.getObjectHandle('right_joint')\n    right_front_handle= sim.getObjectHandle('right_joint')\n    MaxVel=2\n    leftvelocity=0\n    rightvelocity=0\n    dVel=100;\n    --sim.setJointTargetVelocity(left_front_handle,leftvelocity)\n    sim.setJointTargetVelocity(left_back_handle,leftvelocity)\n    sim.setJointTargetVelocity(right_back_handle,rightvelocity)\n    --sim.setJointTargetVelocity(right_front_handle,rightvelocity)\nend\n\nfunction sysCall_actuation() \n    message,auxiliaryData=sim.getSimulatorMessage()\n    while message~=-1 do\n        if (message==sim.message_keypress) then\n            if (auxiliaryData[1]==32) then\n                -- right key\n                leftvelocity=0\n                rightvelocity=0\n                sim.setJointForce(left_front_handle, 0)\n                sim.setJointForce(left_back_handle, 0)\n                sim.setJointForce(right_back_handle, 0)\n                sim.setJointForce(right_front_handle, 0)\n                break\n            else\n                --sim.setJointForce(left_front_handle, 10000)\n                sim.setJointForce(left_back_handle, 10000)\n                sim.setJointForce(right_back_handle, 10000)\n                --sim.setJointForce(right_front_handle, 10000)\n            end\n            if (auxiliaryData[1]==119) then\n                -- w key\n                leftvelocity=(leftvelocity+rightvelocity)/2\n                rightvelocity=leftvelocity\n                leftvelocity=leftvelocity+dVel\n                rightvelocity=rightvelocity+dVel\n            end\n            if (auxiliaryData[1]==115) then\n                -- s key\n                leftvelocity=(leftvelocity+rightvelocity)/2\n                rightvelocity=leftvelocity\n                leftvelocity=leftvelocity-dVel\n                rightvelocity=rightvelocity-dVel\n            end\n            if (auxiliaryData[1]==97) then\n                -- a key\n                leftvelocity=leftvelocity-dVel\n                rightvelocity=rightvelocity+dVel\n            end\n            if (auxiliaryData[1]==100) then\n                -- d key\n                leftvelocity=leftvelocity+dVel\n                rightvelocity=rightvelocity-dVel\n            end\n        end\n        message,auxiliaryData=sim.getSimulatorMessage()\n    end\n    \n    if leftvelocity>MaxVel then\n        leftvelocity=MaxVel\n    end\n    if leftvelocity<-MaxVel then\n        leftvelocity=-MaxVel\n    end\n    \n    if rightvelocity>MaxVel then\n                rightvelocity=MaxVel\n    end\n    if rightvelocity<-MaxVel then\n                rightvelocity=-MaxVel\n    end\n    \n    --sim.setJointTargetVelocity(left_front_handle,leftvelocity)\n    sim.setJointTargetVelocity(left_back_handle,leftvelocity)\n    sim.setJointTargetVelocity(right_back_handle,rightvelocity)\n    --sim.setJointTargetVelocity(right_front_handle,rightvelocity)\n    \nend  \n 程式 \n \n w8 \n 20210417 \n 齒輪繪製完成，齒數為51，模數為2 \n \n 在插鏟上增加齒條，模數為2 \n \n 20210418 \n 加入方向鍵控制插鏟功能 \n \n 程式: \n function sysCall_init() \n    left_front_handle= sim.getObjectHandle('left_joint')\n    left_back_handle= sim.getObjectHandle('left_joint')\n    right_back_handle= sim.getObjectHandle('right_joint')\n    right_front_handle= sim.getObjectHandle('right_joint')\n    gear_up_handle= sim.getObjectHandle('gear_joint')\n    gear_down_handle= sim.getObjectHandle('gear_joint')\n    MaxVel=10\n    MaxVel_gear=30\n    leftvelocity=0\n    rightvelocity=0\n    upvelocity=0\n    dVel=10;\n    dVel_gear=10;\n    --sim.setJointTargetVelocity(left_front_handle,leftvelocity)\n    sim.setJointTargetVelocity(left_back_handle,leftvelocity)\n    sim.setJointTargetVelocity(right_back_handle,rightvelocity)\n    sim.setJointTargetVelocity(gear_down_handle,upvelocity)\n    --sim.setJointTargetVelocity(right_front_handle,rightvelocity)\nend\n\nfunction sysCall_actuation() \n    message,auxiliaryData=sim.getSimulatorMessage()\n    while message~=-1 do\n        if (message==sim.message_keypress) then\n            if (auxiliaryData[1]==32) then\n                leftvelocity=0\n                rightvelocity=0\n                upvelocity=0\n                sim.setJointForce(left_front_handle, 0)\n                sim.setJointForce(left_back_handle, 0)\n                sim.setJointForce(right_back_handle, 0)\n                sim.setJointForce(right_front_handle, 0)\n                sim.setJointForce(gear_up_handle, 0)\n                sim.setJointForce(gear_down_handle, 0)\n                break\n            else\n                --sim.setJointForce(left_front_handle, 10000)\n                sim.setJointForce(left_back_handle, 10000)\n                sim.setJointForce(right_back_handle, 10000)\n                sim.setJointForce(gear_down_handle, 10000)\n                --sim.setJointForce(right_front_handle, 10000)\n            end\n            if (auxiliaryData[1]==119) then\n                -- w key\n                leftvelocity=(leftvelocity+rightvelocity)/2\n                rightvelocity=leftvelocity\n                leftvelocity=leftvelocity+dVel\n                rightvelocity=rightvelocity+dVel\n            end\n            if (auxiliaryData[1]==115) then\n                -- s key\n                leftvelocity=(leftvelocity+rightvelocity)/2\n                rightvelocity=leftvelocity\n                leftvelocity=leftvelocity-dVel\n                rightvelocity=rightvelocity-dVel\n            end\n            if (auxiliaryData[1]==97) then\n                -- a key\n                leftvelocity=leftvelocity-dVel\n                rightvelocity=rightvelocity+dVel\n            end\n            if (auxiliaryData[1]==100) then\n                -- d key\n                leftvelocity=leftvelocity+dVel\n                rightvelocity=rightvelocity-dVel\n            end\n            if (auxiliaryData[1]==100) then\n                -- d key\n                leftvelocity=leftvelocity+dVel\n                rightvelocity=rightvelocity-dVel\n            end\n            if (auxiliaryData[1]==2008) then\n                -- up key\n                upvelocity=upvelocity+dVel_gear\n            end\n            if (auxiliaryData[1]==2007) then\n                -- down key\n                upvelocity=upvelocity-dVel_gear\n            end\n            \n        end\n        message,auxiliaryData=sim.getSimulatorMessage()\n    end\n    \n    if leftvelocity>MaxVel then\n        leftvelocity=MaxVel\n    end\n    if leftvelocity<-MaxVel then\n        leftvelocity=-MaxVel\n    end\n    \n    if rightvelocity>MaxVel then\n                rightvelocity=MaxVel\n    end\n    if rightvelocity<-MaxVel then\n                rightvelocity=-MaxVel\n    end\n    if upvelocity>MaxVel_gear then\n                    upvelocity=MaxVel_gear\n    end\n    if upvelocity<-MaxVel_gear then\n                    upvelocity=-MaxVel_gear\n    end\n    \n    --sim.setJointTargetVelocity(left_front_handle,leftvelocity)\n    sim.setJointTargetVelocity(left_back_handle,leftvelocity)\n    sim.setJointTargetVelocity(right_back_handle,rightvelocity)\n    sim.setJointTargetVelocity(gear_down_handle,upvelocity)\n    --sim.setJointTargetVelocity(right_front_handle,rightvelocity)\n    \nend  \n 20210422 \n 修改齒輪長度，增加強度 \n \n 原本中間一根尺條改成兩旁兩根尺，增加抓力，改善駕駛員視線 \n \n 成品圖: \n \n 修改後成果 \n \n 程式 \n function sysCall_init() \n    left_front_handle= sim.getObjectHandle('left_joint')\n    left_back_handle= sim.getObjectHandle('left_joint')\n    right_back_handle= sim.getObjectHandle('right_joint')\n    right_front_handle= sim.getObjectHandle('right_joint')\n    gear_up_handle= sim.getObjectHandle('gear_joint')\n    gear_down_handle= sim.getObjectHandle('gear_joint')\n    MaxVel=20\n    MaxVel_gear=30\n    leftvelocity=0\n    rightvelocity=0\n    upvelocity=0\n    dVel=10;\n    dVel_gear_up=30;\n    dVel_gear_dwon=20;\n    a=13;\n    --sim.setJointTargetVelocity(left_front_handle,leftvelocity)\n    sim.setJointTargetVelocity(left_back_handle,leftvelocity)\n    sim.setJointTargetVelocity(right_back_handle,rightvelocity)\n    sim.setJointTargetVelocity(gear_down_handle,upvelocity)\n    --sim.setJointTargetVelocity(right_front_handle,rightvelocity)\nend\n\nfunction sysCall_actuation() \n    message,auxiliaryData=sim.getSimulatorMessage()\n    while message~=-1 do\n        if (message==sim.message_keypress) then\n            if (auxiliaryData[1]==32) then\n                leftvelocity=0\n                rightvelocity=0\n                upvelocity=0\n                sim.setJointForce(left_front_handle, 0)\n                sim.setJointForce(left_back_handle, 0)\n                sim.setJointForce(right_back_handle, 0)\n                sim.setJointForce(right_front_handle, 0)\n                sim.setJointForce(gear_up_handle, 0)\n                sim.setJointForce(gear_down_handle, 0)\n                break\n            else\n                --sim.setJointForce(left_front_handle, 10000)\n                sim.setJointForce(left_back_handle, 10000)\n                sim.setJointForce(right_back_handle, 10000)\n                sim.setJointForce(gear_down_handle, 10000)\n                --sim.setJointForce(right_front_handle, 10000)\n            end\n            if (auxiliaryData[1]==119) then\n                -- w key\n    \n                leftvelocity=leftvelocity+a\n                rightvelocity=rightvelocity+dVel\n            end\n            if (auxiliaryData[1]==115) then\n                -- s key\n                leftvelocity=(leftvelocity+rightvelocity)/2\n                rightvelocity=leftvelocity\n                leftvelocity=leftvelocity-dVel\n                rightvelocity=rightvelocity-dVel\n            end\n            if (auxiliaryData[1]==97) then\n                -- a key\n                leftvelocity=leftvelocity-dVel\n                rightvelocity=rightvelocity+dVel\n            end\n            if (auxiliaryData[1]==100) then\n                -- d key\n                leftvelocity=leftvelocity+dVel\n                rightvelocity=rightvelocity-dVel\n            end\n            if (auxiliaryData[1]==100) then\n                -- d key\n                leftvelocity=leftvelocity+dVel\n                rightvelocity=rightvelocity-dVel\n            end\n            if (auxiliaryData[1]==2008) then\n                -- down key\n                upvelocity=upvelocity+dVel_gear_dwon\n            end\n            if (auxiliaryData[1]==2007) then\n                -- up key\n                upvelocity=upvelocity-dVel_gear_up\n            end\n            \n        end\n        message,auxiliaryData=sim.getSimulatorMessage()\n    end\n    \n    if leftvelocity>MaxVel then\n        leftvelocity=MaxVel\n    end\n    if leftvelocity<-MaxVel then\n        leftvelocity=-MaxVel\n    end\n    \n    if rightvelocity>MaxVel then\n                rightvelocity=MaxVel\n    end\n    if rightvelocity<-MaxVel then\n                rightvelocity=-MaxVel\n    end\n    if upvelocity>MaxVel_gear then\n                    upvelocity=MaxVel_gear\n    end\n    if upvelocity<-MaxVel_gear then\n                    upvelocity=-MaxVel_gear\n    end\n    \n    --sim.setJointTargetVelocity(left_front_handle,leftvelocity)\n    sim.setJointTargetVelocity(left_back_handle,leftvelocity)\n    sim.setJointTargetVelocity(right_back_handle,rightvelocity)\n    sim.setJointTargetVelocity(gear_down_handle,upvelocity)\n    --sim.setJointTargetVelocity(right_front_handle,rightvelocity)\n    \nend  \n", 'tags': '', 'url': 'stage2-bg1.html'}, {'title': '檔案下載', 'text': '轉子引擎(未完成): \n 轉子引擎包.zip \n \n 堆高機: \n 堆高機包.zip (圖檔與程式) \n \n', 'tags': '', 'url': '檔案下載.html'}, {'title': '參考資料', 'text': '轉子引擎: \n https://www.youtube.com/watch?v=nA5vAulVHbw \n https://www.youtube.com/watch?v=fec0z_BOSzo \n https://zh.wikipedia.org/wiki/ \n \n 堆高機: \n 繪圖參考 \n http://www.hsintai.tw/nissan \n http://www.yang-forklift.com.tw/_i/assets/upload/images/2018-10-19_092303.png \n 程式參考 \n https://mdekmol.github.io/cd2019a-task1-2019cda_t1_g2/content/Vrep-2.html \n', 'tags': '', 'url': '參考資料.html'}, {'title': 'stage3-bg1', 'text': 'w9 \n 討論做什麼 \n \n w10 \n 20210504 \n remote api(python) 連動成功 \n \n 20210505 \n 新增控制插鏟功能 \n \n 20210506 \n 新增控制推高機前後左右功能 \n \n \xa020210512 \n 巡路小車 \n \n 20210514 \n 來回走直線 \n \n \n 5', 'tags': '', 'url': 'stage3-bg1.html'}, {'title': 'task2', 'text': '將小組stage2 採用remote api\xa0 \n 使用python keyboard插件: https://pypi.org/project/keyboard/ \n 讓堆高機可以用鍵盤控制 \n \n 程式: \n # File created by Thibaut Royer, Epitech school\n# thibaut1.royer@epitech.eu\n# It intends to be an example program for the "Two wheels, one arm" educative project.\n\nimport sim as vrep\nimport math\nimport random\nimport time\nimport keyboard\n\n\nprint (\'Start\')\n\n# Close eventual old connections\nvrep.simxFinish(-1)\n# Connect to V-REP remote server\nclientID = vrep.simxStart(\'192.168.1.116\', 19997, True, True, 5000, 5)\n\nif clientID != -1:\n    print (\'Connected to remote API server\')\n    \n    res = vrep.simxAddStatusbarMessage(\n        clientID, "40823246",\n        vrep.simx_opmode_oneshot)\n    if res not in (vrep.simx_return_ok, vrep.simx_return_novalue_flag):\n        print("Could not add a message to the status bar.")\n\n    \n    opmode = vrep.simx_opmode_oneshot_wait\n    \n\n    \n    vrep.simxStartSimulation(clientID, opmode)\n    ret,front_handle=vrep.simxGetObjectHandle(clientID,"front_joint",opmode)\n    ret,left_handle=vrep.simxGetObjectHandle(clientID,"left_joint",opmode)\n    ret,right_handle=vrep.simxGetObjectHandle(clientID,"right_joint",opmode)\n    ret,gear_handle=vrep.simxGetObjectHandle(clientID,"gear_joint",opmode)\n    #ret,main = vrep.simxGetObjectHandle(clientID, "main", opmode)\n    while True:\n        #keyboard "w" \n        if keyboard.is_pressed("w"):\n            vrep.simxSetJointTargetVelocity(clientID,front_handle,1000,opmode)\n            vrep.simxSetJointTargetVelocity(clientID,left_handle,1000,opmode)\n            vrep.simxSetJointTargetVelocity(clientID,right_handle,1000,opmode)\n            \n        #keyboard "s" \n        if keyboard.is_pressed("s"):\n            vrep.simxSetJointTargetVelocity(clientID,front_handle,-1000,opmode)\n            vrep.simxSetJointTargetVelocity(clientID,left_handle,-1000,opmode)\n            vrep.simxSetJointTargetVelocity(clientID,right_handle,-1000,opmode)\n        \n        #keyboard "a" \n        if keyboard.is_pressed("a"):\n            vrep.simxSetJointTargetVelocity(clientID,front_handle,5,opmode)\n            vrep.simxSetJointTargetVelocity(clientID,left_handle,1000,opmode)\n            vrep.simxSetJointTargetVelocity(clientID,right_handle,0,opmode)\n        \n        #keyboard "d" \n        if keyboard.is_pressed("d"):\n            vrep.simxSetJointTargetVelocity(clientID,front_handle,5,opmode)\n            vrep.simxSetJointTargetVelocity(clientID,left_handle,0,opmode)\n            vrep.simxSetJointTargetVelocity(clientID,right_handle,1000,opmode)\n        \n        #keyboard "w+a" \n        if keyboard.is_pressed("w+a"):\n            vrep.simxSetJointTargetVelocity(clientID,front_handle,500,opmode)\n            vrep.simxSetJointTargetVelocity(clientID,left_handle,1000,opmode)\n            vrep.simxSetJointTargetVelocity(clientID,right_handle,0,opmode)\n        \n        #keyboard "w+d" \n        if keyboard.is_pressed("w+d"):\n            vrep.simxSetJointTargetVelocity(clientID,front_handle,500,opmode)\n            vrep.simxSetJointTargetVelocity(clientID,left_handle,0,opmode)\n            vrep.simxSetJointTargetVelocity(clientID,right_handle,1000,opmode)\n        \n        #keyboard "space" \n        if keyboard.is_pressed("space"):\n            vrep.simxSetJointTargetVelocity(clientID,front_handle,0,opmode)\n            vrep.simxSetJointTargetVelocity(clientID,left_handle,0,opmode)\n            vrep.simxSetJointTargetVelocity(clientID,right_handle,0,opmode)\n            \n        vrep.simxSetJointTargetVelocity(clientID,gear_handle,-0,opmode)\n        \n        #keyboard "8" \n        if keyboard.is_pressed("8"):\n            vrep.simxSetJointTargetVelocity(clientID,gear_handle,-30,opmode)\n        \n        #keyboard "5" \n        if keyboard.is_pressed("5"):\n            vrep.simxSetJointTargetVelocity(clientID,gear_handle,15,opmode)\n        \n        #keyboard "esc" \n        if  keyboard.is_pressed("esc"):\n            vrep.simxStopSimulation(clientID, opmode)\n            break\n        \nelse:\n    print (\'Failed connecting to remote API server\')\n    print (\'End\')\n \n', 'tags': '', 'url': 'task2.html'}, {'title': '筆記', 'text': '', 'tags': '', 'url': '筆記.html'}, {'title': 'coppeliasim 新增球體,旋轉軸應用', 'text': '1.如何新增一個直徑0.2,有物理屬性的球體? \n \n 然後將x-size(直徑)調至0.2,然後按[Ok]。 \n --- \n 2.如何再複製一個? \n 對Sphere案右鍵 \n \n 然後到Edit貼上 \n \n 然後兩顆一模一樣的球就會重疊在一起。 \n --- \n 3.如何移動球體? \n 點選紅圈內的按鈕,然後再輕點想移動的球體。 \n \n 這個視窗可以調整X,Y,Z軸的自由度(勾選即可解鎖自由度)。 \n \n --- \n 4.如何新增感測器? \n 新增完再將感測器拖曳到Sphere中。 \n \n 接著調整感測器位置,輕點感測器,再點紅色底線按鈕,X輸入0.1,Z輸入0.12。 \n \n 調整感測器大小參數,輕點感測器,點選紅色底線按鈕,offset輸入0.005,range輸入0.1,angle輸入30。 \n \n --- \n 5.如何新增車輪: \n 首先新增一個新場景。 \n 新增圓柱體，並調整大小 尺寸為（0.08,0.08,0.02）。 \n \n \n \n 在該圓柱的 object common properties 中啟用 \xa0 Collidable，Measurable，Renderable 和 Detectable。 \n 調整圓柱體位置 將圓柱的絕對位置設置為（0.05,0.1,0.04），並將其絕對方向設置為（-90,0,0)。 \n \n 改名為 bubbleRob_leftWheel 並複製。 \n 貼上，並調整絕對位置設置y為-0.1Y在改名為 bubbleRob_rightWheel。 \n 複製兩個輪子並貼到主場景。 \n --- \n 6.有了輪子,那如何新增馬達? \n \n 案ctrl,讓馬達與左輪都在選中狀態 \n 點選 \n \n \n 在position中,點擊apply to selection \n 點選 \n \n \n 在orientation中,點擊apply to selection \n 將輪子拖入馬達中 \n 選中馬達,點選 \n \n \n 點選 \n \n 勾選 \n \n', 'tags': '', 'url': 'coppeliasim 新增球體,旋轉軸應用.html'}, {'title': '組員fork git pull 注意事項', 'text': '當組長倉儲版本較新時(組長是最後一個推送的)，組員必須git pull，更新倉儲。 \n 組員git pull之前先進 \n .git資料夾 > 修改config中url的學號，改為組長的 > git pull >改回自己的。 \n', 'tags': '', 'url': '組員fork git pull 注意事項.html'}, {'title': 'reveal 功能', 'text': '添加圖片(圖檔要放在倉儲中reveal資料夾) \n <image src="圖片.png" width="600" hight="300"> \n 修改width hight數值可以改圖片大小。 \n \n 加入背景圖片 (圖檔要放在倉儲中reveal資料夾) \n <section data-background="圖片.png"> \n 在一開始的section加入即可。 \n \n 加入pdf預覽功能(pdf 檔要放在倉儲中reveal資料夾 ) \n  <iframe data-src="報告.pdf" width="800" height="600" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:3px solid #666; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> \n 修改width hight數值可以改視窗大小。 \n \n 嵌入影片 \n <iframe width="560" height="315" src="影片網址" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n</section> \n 修改width hight數值可以改視窗大小。 \n', 'tags': '', 'url': 'reveal 功能.html'}, {'title': 'remote api', 'text': 'clientID: 如果連接失敗,clientID=-1。 \n simxGetObjectHandle(clientID, "軸的名字" ,opmode): 軸的前置設定。 \n vrep.simxStartSimulation(clientID, opmode): 自動幫你按開始鍵。 \n vrep.simxStopSimulation(clientID, opmode):自動 重置vrep。 \n simxSetJointTargetVelocity(clientID,軸,弳度,opmode): 控制軸旋轉幾度。', 'tags': '', 'url': 'remote api.html'}, {'title': 'W5', 'text': 'W5.xlsx \n', 'tags': '', 'url': 'W5.html'}]};
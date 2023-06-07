document.write(' <link href="https://chatbot.glazegalway.com/css/sakshemit.css?v=1.3" rel="stylesheet" />   ');
if (screen.availWidth > 100) {
    var glaze_main_div = document.createElement("div");
    glaze_main_div.className = "glaze_main_div";
    glaze_main_div.id = "glaze_main_div";


    var glaze_header = document.createElement("div");
    glaze_header.className = "glaze_header_div";
    glaze_header.id = "glaze_header_div";
    glaze_header.style.display = "none";

    var glaze_header_text = document.createElement("div");
    glaze_header_text.className = "glaze_header_div_txt";
    glaze_header_text.innerHTML = "welcome to kle";

    var glaze_header_div_inputs = document.createElement("div");
    glaze_header_div_inputs.style.float = "right";
    glaze_header_div_inputs.style.marginTop = "-1px";



    var glaze_chat_home_anchor = document.createElement("a");
    glaze_chat_home_anchor.className = "glaze_home_anchor";
    glaze_chat_home_anchor.id = "glaze_home_btn";
    glaze_chat_home_anchor.title = "Home";
    glaze_chat_home_anchor.onclick = function () { funHome(); };
    glaze_chat_home_anchor.innerHTML = "<img src='chatbot_subdomain/images/home.png' />";
    glaze_chat_home_anchor.style.display = "none";
    glaze_chat_home_anchor.style.right = "55px";
    glaze_header_div_inputs.appendChild(glaze_chat_home_anchor);


    var glaze_header_achor1 = document.createElement("a");
    glaze_header_achor1.className = "glaze_header_btn";
    glaze_header_achor1.id = "btnMinimize";
    glaze_header_achor1.title = "Minimize";
    glaze_header_achor1.innerHTML = "<img src='chatbot_subdomain/images/minimize.png' />";
    glaze_header_achor1.style.display = "none";
    glaze_header_achor1.onclick = function () { return handleMinMax(1); };

    var glaze_header_achor2 = document.createElement("a");
    // glaze_header_achor2.className = "glaze_header_btn";
    glaze_header_achor2.id = "btnMaximize";
    glaze_header_achor2.title = "Maximize";
    glaze_header_achor2.innerHTML = "<img src='chatbot_subdomain/images/icon-logo.png' />";;
    glaze_header_achor2.onclick = function () { return handleMinMax(2); };

    glaze_header_div_inputs.appendChild(glaze_header_achor1);
    glaze_main_div.appendChild(glaze_header_achor2);

    glaze_header.appendChild(glaze_header_text);
    glaze_header.appendChild(glaze_header_div_inputs);

    glaze_main_div.appendChild(glaze_header);


    var glaze_chat_div = document.createElement("div");
    glaze_chat_div.className = "glaze_chat_div";
    glaze_chat_div.id = "div_Glaze_Chat";
    glaze_chat_div.style.display = "none";
    glaze_main_div.appendChild(glaze_chat_div);

    var glaze_chat_div_input = document.createElement("div");
    glaze_chat_div_input.className = "glaze_input_div";
    glaze_chat_div_input.id = "div_Glaze_Chat_txt";
    glaze_chat_div_input.style.display = "none";

    var glaze_chat_txt = document.createElement("input");
    glaze_chat_txt.className = "glaze_input_text";
    glaze_chat_txt.id = "glaze_input_text_id";
    glaze_chat_txt.type = "text";
    glaze_chat_txt.autocomplete = "off";
    glaze_chat_txt.autofocus = "true";
    glaze_chat_txt.placeholder = "Type your message here and hit enter";
    glaze_chat_txt.onkeypress = function () { funEnter(event, this, 0); };
    glaze_chat_div_input.appendChild(glaze_chat_txt);

    var glaze_chat_reset_action = document.createElement("a");
    glaze_chat_reset_action.className = "glaze_submit_btn";
    glaze_chat_reset_action.id = "glaze_subm_btn";
    glaze_chat_reset_action.title = "Submit";
    glaze_chat_reset_action.onclick = function () { glaze_submit() };
    glaze_chat_reset_action.innerHTML = "<img src='chatbot_subdomain/images/Shape_2.png' />";
    glaze_chat_div_input.appendChild(glaze_chat_reset_action);

    var glaze_chat_reset_anchor = document.createElement("a");
    glaze_chat_reset_anchor.className = "glaze_home_anchor";
    glaze_chat_reset_anchor.id = "glaze_reset_btn";
    glaze_chat_reset_anchor.title = "Reset";
    glaze_chat_reset_anchor.onclick = function () { funReset(); };
    glaze_chat_reset_anchor.innerHTML = "<img src='chatbot_subdomain/images/reset.png' />";
    // glaze_chat_reset_anchor.style.display = "none";
    glaze_chat_div_input.appendChild(glaze_chat_reset_anchor);

    var glaze_chat_btn = document.createElement("input");
    glaze_chat_btn.className = "glaze_input_button";
    glaze_chat_btn.type = "button";
    glaze_chat_btn.onclick = function () { return sendMsg(); };
    glaze_chat_div_input.appendChild(glaze_chat_btn);

    var glaze_chat_file = document.createElement("input");
    glaze_chat_file.className = "glaze_input_button";
    glaze_chat_file.type = "file";
    glaze_chat_file.id = "Glaze_Chat_File";
    glaze_chat_file.style.display = "none ! important";
    glaze_chat_file.onchange = function (e) { onFileSelect(e, this); };
    glaze_chat_div_input.appendChild(glaze_chat_file);

    glaze_main_div.appendChild(glaze_chat_div_input);

    document.body.appendChild(glaze_main_div);
}


var UserTrack = -1;
var CurrentStep = 1;
var CompanyID = 2;
var DeptID = 0;
var RankID = 0;
var executiveID = 0;
var ChatID = 0;
var ClientID = "";
var ClientName = "";
var isChoice = false;
var mobileno = "";
var gs_code = "";
var serviceUrl = "https://wcf.galway.in/";
//var serviceUrl = "http://wcfqa.glazegalway.org/";
//var serviceUrl = "http://localhost:54570/";
var document_url = "https://doc.galway.in/Document/Offers/"


var IsConnected = false;
var socket;

//------------------------------Start socket method handles code ---------------------
const ApiReturnType = {
    Text: 1,
    List: 2
}

const ConnectedType = {
    Client: 1,
    Executive: 0
}


function glaze_submit() {
    var text = document.getElementById("glaze_input_text_id");
    funEnter(this.event, text, 1);
}

function funReset() {


    clearAllMsg();
    if (IsConnected == true) {
        socket.close();
    }
    if (CurrentStep == 1070) {
        addMessageToCanvas(ApiReturnType.Text, 'Thanks for submitting your feedback/suggestion');
    }
    AddChating();
    CurrentStep = 1;
    executiveID = 0;
    DeptID = 0;
    RankID = 0;
    ChatID = 0;
    ClientID = "";
    ClientName = "";
    IsConnected = false;

}

const ResponseType = {
    Connect: 1,
    Message: 2,
    Disconnect: 3,
    Img: 4,
    AllExecutive: 5,
    ChatTransfer: 6,
    ImgLink: 7,
    StatusChange: 10
}

function CallApi(apiUrl, postingData) {
    try {
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", apiUrl, false);
        xhttp.setRequestHeader("Content-type", "application/json; charset=utf-8");
        xhttp.send(postingData);
        if (xhttp.status === 200) {
            return xhttp.responseText;
        }
        else {
            return "";
        }


    } catch (e) {
        console.log(e);
    }
}

function onConnect(e) {
    IsConnected = true;
}

function onMessage(arg) {
    var data = JSON.parse(arg.data);
    if (data.ResponseType == ResponseType.Connect) {
        addMessageToCanvas(ApiReturnType.Text, welcomeMsg);
        ChatID = data.ChatID;
        CurrentStep = 100;
        executiveID = data.MsgTo;
    }
    else if (data.ResponseType == ResponseType.Message) {
        var newMsg = data.Msg;
        if (data.Msg == "#wait#") {
            newMsg = waitMsg;
        }
        addMessageToCanvas(ApiReturnType.Text, newMsg);
        ChatID = data.ChatID;
    }
    else if (data.ResponseType == ResponseType.ImgLink) {
        addOpenLinkToCanvas(1001);
        ChatID = data.ChatID;
    }
    else if (data.ResponseType == ResponseType.ChatTransfer) {
        addMessageToCanvas(ApiReturnType.Text, data.Msg);
        ChatID = data.ChatID;
        executiveID = data.MsgTo;
    }
    else if (data.ResponseType == ResponseType.Disconnect) {
        addMessageToCanvas(ApiReturnType.Text, "Aapki chat samaapt ho gayi hai. hamaare saath sampark karane ke lie dhanyavaad.");
        executiveID = 0;
        ChatID = 0;
        socket.close();


        if (ClientID.indexOf("Non_") > 0) {
            CurrentStep = 11;
        }
        else {
            CurrentStep = 1111;
        }
        goToHome();

    }
    else {
        addMessageToCanvas(ApiReturnType.Text, data.Msg);
    }


}

function onDisconnect(error) {
    IsConnected = false;
    addMessageToCanvas(ApiReturnType.Text, "You are disconnected. Please go to home button and reconnect again");
}

function onError(error) {

};

function sendMsg(chatID, msg, mstTo) {
    var msgContent = { ChatID: chatID, ResponseType: ResponseType.Message, Msg: msg, MsgTo: mstTo };
    if (IsConnected == true) {
        socket.send(JSON.stringify(msgContent));
    }
}

function sendImgMsg(chatID, msg, mstTo) {
    var msgContent = { ChatID: chatID, ResponseType: ResponseType.Img, Msg: msg, MsgTo: mstTo };
    if (IsConnected == true) {
        socket.send(JSON.stringify(msgContent));
    }
}
//------------------------------ End socket method handles code ---------------------

//------------------------------Start chatting event and method code --------------------
function handleMinMax(type) {
    var btnmin = document.getElementById("btnMinimize");
    var btnmax = document.getElementById("btnMaximize");
    var divChat = document.getElementById("div_Glaze_Chat");
    var divTxt = document.getElementById("div_Glaze_Chat_txt");
    var btnReset = document.getElementById("glaze_reset_btn");
    var btnHome = document.getElementById("glaze_home_btn");
    var divHeader = document.getElementById("glaze_header_div");
    var glaze_main_div = document.getElementById("glaze_main_div");

    if (type == 1) {
        btnmin.style.display = "none";
        btnmax.style.display = "";
        divChat.style.display = "none";
        divTxt.style.display = "none";
        btnHome.style.display = "none";
        btnReset.style.display = "none";
        divHeader.style.display = "none";
        glaze_main_div.style.boxShadow = "none";
    } else {
        divHeader.style.display = "";
        btnmin.style.display = "";
        btnmax.style.display = "none";
        divChat.style.display = "";
        divTxt.style.display = "";
        btnHome.style.display = "";
        btnReset.style.display = "";
        glaze_main_div.style.boxShadow = "0px 0px 42px -26px";
    }
    return false;
}

function OpenVideo(url) {
    window.open(url, "", "width=500,height=400",);
}
//------------------------------End chatting event and method code --------------------

//------------------------------ Start messages to canvas code ---------------------

function addMessageToCanvas(returnType, data) {

    var canvas = document.getElementById("div_Glaze_Chat");

    var div = document.createElement("div");
    div.className = "innerDiv";

    var p = document.createElement("div");
    p.className = "myp";


    if (ApiReturnType.Text == returnType) {
        p.innerHTML = data;
        p.style.width = "100%";
    }
    else if (ApiReturnType.List == returnType) {
        p.style.width = "100%";
        CreateButton(p, data);

    }

    if (data == 'Data not found') {
       // isChoice = false;

    }

    if (isChoice == true) {
        isChoice = false;
        var ps = document.createElement("p");
        var txtChoice = "Are you satisfied with the information given?";
        ps.innerHTML = "<br/><p style='font-size:12px;margin: 0px;padding-top:3px;color: black;'>" + txtChoice + " </p>";
        p.appendChild(ps);

        var oject = [];

        oject.push({ "object_master_id": -1, "objectname": "Yes", "data_type": 3, "data_value": '' });
        oject.push({ "object_master_id": -2, "objectname": "No", "data_type": 3, "data_value": '' });
        CreateButton(p, oject);
        div.appendChild(p);
    }



    var ph = document.createElement("p");
    ph.innerHTML = "<p style='font-size:9px; float:right;margin: 0px; padding-top:3px;'>" + new Date().toLocaleString().split(',')[1] + "</p>";
    p.appendChild(ph);

    div.appendChild(p);

    canvas.appendChild(div);
    canvas.scrollTop = (canvas.scrollHeight < canvas.scrollTop ? canvas.scrollTop : canvas.scrollHeight);



}

function CreateButton(pElement, list) {
    var ul = document.createElement("ul");
    ul.className = "myul";
    for (var i = 0; i < list.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = list[i].objectname;
        var bgColor = "#78c14e";


        var input_hdn = document.createElement("input");
        input_hdn.setAttribute("type", "hidden");
        input_hdn.setAttribute("name", list[i].objectname);
        input_hdn.setAttribute("id", list[i].objectname);
        input_hdn.setAttribute("value", list[i].object_master_id);
        pElement.appendChild(input_hdn);

        var input_hdn_obj_type = document.createElement("input");
        input_hdn_obj_type.setAttribute("type", "hidden");
        input_hdn_obj_type.setAttribute("name", list[i].objectname + "_1");
        input_hdn_obj_type.setAttribute("id", list[i].objectname + "_1");
        input_hdn_obj_type.setAttribute("value", list[i].data_type);
        pElement.appendChild(input_hdn_obj_type);

        var input_hdn_url = document.createElement("input");
        input_hdn_url.setAttribute("type", "hidden");
        input_hdn_url.setAttribute("name", list[i].objectname + "_2");
        input_hdn_url.setAttribute("id", list[i].objectname + "_2");
        input_hdn_url.setAttribute("value", list[i].data_value);
        pElement.appendChild(input_hdn_url);

        li.onclick = function () { onbtnClick(this); }
        ul.appendChild(li);
    }
    pElement.appendChild(ul);
}

//------------------------------ End messages to canvas code ---------------------

function AddChating() {
    addMessageToCanvas(ApiReturnType.Text, "Welcome in KLE Chat process");
    var oject = [];

    oject.push({ "object_master_id": 1, "objectname": "🏢&nbsp;&nbsp;<b>College Contact Number</b><br><li>📱&nbsp;&nbsp;+91 9353065812</li>", "data_type": 3, "data_value": '' });
    oject.push({ "object_master_id": 2, "objectname": "📕&nbsp;&nbsp;<b>Achievements & Placements</b><li>🏆&nbsp;&nbsp;Won ICC Championship At Gadage And Selected For University Blue In Hockey. Academics 2021-2022 Placement Cell Are Wipro, Infosys, DXC Technology, TCS Technology NTT Data, ICICI Bank.</li>", "data_type": 3, "data_value": '' });
    oject.push({ "object_master_id": 2, "objectname": "📑&nbsp;&nbsp;<b>Course Fees Structure</b><li><b> Bachlor Of Computer Application</b><br><b>First Year -----------=35000₹<br>Second Year -------=35000₹<br>Third Year -----------=35000₹</b></li>", "data_type": 3, "data_value": '' });
    oject.push({ "object_master_id": 2, "objectname": "🏢&nbsp;&nbsp;<b>Is BCA College Is Good Of Student</b><br><li>College Has Eco-friendly Environment Campus, Well Facilated Library, Labs With Good Friendly Staffs.</li>", "data_type": 3, "data_value": '' });
    oject.push({ "object_master_id": 2, "objectname": "📚&nbsp;&nbsp;<b>Admission Requirements</b><br><li><b>1.</b> SSLC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Marks sheet<br><b>2.</b> PUC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Marks card<br><b>3.</b> Transfar&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Certificate<br><b>4.</b> Income Cast Certificate</li>", "data_type": 3, "data_value": '' });
    addMessageToCanvas(ApiReturnType.List, oject)
}

function onbtnClick(arg) { 
    console.log(object_master_id);  
    var object_master_id = document.getElementById(arg.innerHTML).value
    var obj_type = document.getElementById(arg.innerHTML + "_1").value
    var obj_url = document.getElementById(arg.innerHTML + "_2").value
    var GKOrderStatus = arg.innerHTML.toString().includes("CT");
    if (CurrentStep == 1) {
        if (arg.innerHTML == "Distributor") {
            addMessageToCanvas(ApiReturnType.Text, "Please enter ID or Mobile No to authenticate your ID?");
            CurrentStep = 2;
            if (UserTrack == -1) {
                UserTrack = 1;
            }
        }
        else {
           // GetObjectMasterData('GlazeChatbot.svc/get_object_master_data', 2, 3);
            ClientID = "Non_" + new Date().getTime().toString();
        }
    }
    else if (GKOrderStatus == true) {
        GetObjectMasterData('', arg.innerHTML, 1);
    }
    else if (object_master_id == -1) {
        goToHome();
    }
    else if (object_master_id == -2) {
        addMessageToCanvas(ApiReturnType.Text, "For more information contact to customer care on +91-11-46277200 or Email - cc@glazegalway.com");
    }
    else if (object_master_id == -3) {
        funHome();
    }
    else if (arg.innerHTML == "IR Complaint Status") {
        CurrentStep = 5
        addMessageToCanvas(ApiReturnType.Text, "Enter Complaint Number");
    }
    else if (arg.innerHTML == "GS/Franchisee Address Details") {
        CurrentStep = 6
        addMessageToCanvas(ApiReturnType.Text, "Enter GS/Franchisee Code");
    }
    else if (arg.innerHTML == "Feedback/Suggestions") {
        CurrentStep = 7
        addMessageToCanvas(ApiReturnType.Text, "Please enter your feedback / suggestion and press enter to submit");

    }
    else if (arg.innerHTML == "Franchisee Details") {
        GetOtherData("Franchisee Details", 7);
    }
    else if (CurrentStep == 4) {
        if (obj_type == 1) {
            OpenVideo(obj_url);
        }
        else {
           // GetObjectMasterData('GlazeChatbot.svc/get_object_master_data', object_master_id, 3);
        }
    }


}

function funEnter(event, tag, type) {
    if (type == 1 || event.keyCode === 13) {
        if (tag.value.toString().trim() == "") {
            return;
        }

        addTextToCanvas(1, tag.value);

        if (CurrentStep == 2) {
            var input = {
                id: tag.value
            };

            var res = CallApi(serviceUrl + "GlazeChatbot.svc/check_distributor_id_search", JSON.stringify(input))
            var data = JSON.parse(res);

            if (data.status == 0) {

                ClientID = data.DistributorID;
                ClientName = data.msg;
                RankID = data.RankID;
                mobileno = data.mobileno;
                addMessageToCanvas(ApiReturnType.Text, "The information you provided is correct");
                addMessageToCanvas(ApiReturnType.Text, "Please enter OTP received on your mobile : " + mobileno.replace(/(\d{2})(.*)(\d{2})/, '$1XXXXXX$3'));
                CurrentStep = 3;
            }
            else {
                addMessageToCanvas(ApiReturnType.Text, data.msg);
            }
            tag.value = "";
        }
        else if (CurrentStep == 3) {
            var input = {
                id: ClientID,
                otp: tag.value
            };

            var res = CallApi(serviceUrl + "GlazeChatbot.svc/check_distributor_otp", JSON.stringify(input));
            var data = JSON.parse(res);
            if (data.status == 0) {
                addMessageToCanvas(ApiReturnType.Text, "Welcome " + ClientName);
                GetObjectMasterData('GlazeChatbot.svc/get_object_master_data', 1, 3);

            }
            else {
                addMessageToCanvas(ApiReturnType.Text, "Please enter valid OTP");
            }
            tag.value = "";
        }
        else if (CurrentStep == 5) {
            GetOtherData(tag.value, 5);
            tag.value = "";
        }
        else if (CurrentStep == 6) {
            GetOtherData(tag.value, 0);
            tag.value = "";
        }
        else if (CurrentStep == 7) {
            GetOtherData(tag.value, 6);
            tag.value = "";
        }
        else if (CurrentStep == 4) {
            GetOtherData(tag.value, 0);
            tag.value = '';
        }
    }
}

function addTextToCanvas(type, msg) {

    var canvas = document.getElementById("div_Glaze_Chat");

    var div = document.createElement("div");
    div.className = "innerDiv";

    var divp = document.createElement("div");
    divp.innerHTML = msg;

    if (type == 1) {
        div.style.float = "right";
        divp.style.backgroundColor = "#8a3970";
        divp.className = "mypright fromcss";
    }
    else {
        divp.className = "myp";
    }

    var ph = document.createElement("p");
    ph.innerHTML = "<p style='font-size:9px; float:right;margin: 0px; padding-top:3px;'>" + new Date().toLocaleString().split(',')[1] + "</p>";
    divp.appendChild(ph);

    div.appendChild(divp);

    canvas.appendChild(div);
    canvas.scrollTop = canvas.scrollHeight;
    // event.preventDefault();
}

function GetObjectMasterData(api, val, mode) {

    var StrForBranchAddress = val.toString().includes("[");
    var StrForBranch = val.toString().includes("(");
    var incStr = val.toString().includes("#P");
    var GKOrderStatus = val.toString().includes("CT");
    if (incStr == true) {
        var input = {
            id: val,
            spmode: 6
        };

        var res = CallApi(serviceUrl + "GlazeChatbot.svc/proc_tracking_orders_by_id", JSON.stringify(input))
        var data = JSON.parse(res);
        isChoice = true;
        addMessageToCanvas(ApiReturnType.Text, data.msg[0]);
    }
    else if (StrForBranch == true) {
        var inputs = {
            name: val,
            spmode: 1
        };

        var res_data = CallApi(serviceUrl + "GlazeChatbot.svc/Get_Branches_Info", JSON.stringify(inputs))
        var data_ress = JSON.parse(res_data);

        var ojects = [];
        $.each(data_ress.list, function (i) {
            ojects.push({ "object_master_id": data_ress.list[i], "objectname": data_ress.list[i], "data_type": 0, "data_value": 0 });
        })
        addMessageToCanvas(ApiReturnType.List, ojects)

    }
    else if (StrForBranchAddress == true) {
        var inputs = {
            name: val,
            spmode: 2
        };

        var res_data = CallApi(serviceUrl + "GlazeChatbot.svc/Get_Branches_Info", JSON.stringify(inputs))
        var data_ress = JSON.parse(res_data);

        var ojects = [];
        // $.each(data_ress.list, function (i) {
        ojects.push({ "object_master_id": data_ress.list[0], "objectname": data_ress.list[0], "data_type": 0, "data_value": 0 });

        //})
        isChoice = true;
        addMessageToCanvas(ApiReturnType.Text, ojects[0].objectname)

    }
    else if (GKOrderStatus == true) {
        var input;
        if (mode > 0) {
            input = {
                id: val,
                spmode: mode
            };
        }
        else {
            input = {
                id: val,
                spmode: 0
            };
        }

        var res = CallApi(serviceUrl + "GlazeChatbot.svc/proc_tracking_orders_by_id", JSON.stringify(input))
        var data = JSON.parse(res);
        isChoice = true;
        addMessageToCanvas(ApiReturnType.Text, data.msg[0]);
    }
    else {


        var input = {
            parent_object_id: val,
            spmode: mode
        };

        var res = CallApi(serviceUrl + api, JSON.stringify(input))
        var data = JSON.parse(res);
        if (data[0].status == 0) {

            if (data.length == 1) {
                if (data[0].data_type == 1) // For URL
                {
                    var oject = [];
                    var Arrlist = []
                    oject.push({ "object_master_id": data[0].object_master_id, "objectname": data[0].objectname, "data_type": data[0].data_type, "data_value": data[0].data_value });
                    Arrlist.push(oject);
                    isChoice = true
                    addMessageToCanvas(ApiReturnType.List, oject)

                }
                else if (data[0].data_type == 2) // For API
                {
                    var req_input;

                    if (data[0].api_calling_type == 1) {
                        req_input = {
                            id: ClientID,
                            spmode: data[0].spmode
                        };
                    }
                    else if (data[0].api_calling_type == 2) {
                        req_input = {
                            mobile_no: mobileno,
                            spmode: data[0].spmode
                        };
                    }
                    else if (data[0].api_calling_type == 3) {
                        req_input = {
                            requested_code: mobileno,
                            spmode: data[0].spmode,
                            Id: data[0].requested_code
                        };
                    }
                    var res_data = CallApi(serviceUrl + data[0].data_value, JSON.stringify(req_input))
                    var data_res = JSON.parse(res_data);
                    if (data_res.list == undefined) {
                        isChoice = true
                        addMessageToCanvas(ApiReturnType.Text, data_res.msg);
                    }
                    else if (data_res.list.length > 0) {

                        var oject = [];
                        $.each(data_res.list, function (i) {
                            oject.push({ "object_master_id": data_res.list[i], "objectname": data_res.list[i], "data_type": 0, "data_value": 0 });
                        })
                        addMessageToCanvas(ApiReturnType.List, oject)
                    }
                    else {
                        isChoice = true
                        addMessageToCanvas(ApiReturnType.Text, data_res.msg);
                    }


                }
                else if (data[0].data_type == 3) // For Value
                {
                    if (data[0].data_value == "") {
                        var oject = [];
                        var Arrlist = []
                        oject.push({ "object_master_id": data[i].object_master_id, "objectname": data[i].objectname, "data_type": data[i].data_type, "data_value": data[i].data_value });
                        Arrlist.push(oject);
                        isChoice = true
                        addMessageToCanvas(ApiReturnType.List, oject)
                        // GetObjectMasterData(api, data[0].object_master_id, 3)

                    }
                    else {
                        if (data[0].data_value == "Enter GS/Franchisee Code") {
                            CurrentStep = 6;
                        }
                        else if (data[0].data_value == "Enter Complaint Number") {
                            CurrentStep = 5;
                        }
                        else if (data[0].data_value == "Please enter your feedback/suggestion and press enter to submit") {
                            CurrentStep = 7;
                        }
                        else {
                            isChoice = true
                        }
                        addMessageToCanvas(ApiReturnType.Text, data[0].data_value);
                        return;
                    }

                }
                else {

                }
            }
            else if (data.length > 0) {
                var oject = [];
                var Arrlist = []
                $.each(data, function (i) {
                    oject.push({ "object_master_id": data[i].object_master_id, "objectname": data[i].objectname, "data_type": data[i].data_type, "data_value": data[i].data_value });
                });
                Arrlist.push(oject);
                addMessageToCanvas(ApiReturnType.List, oject)


            }
            if (data[0].objectname == "IR Complaint Status") {
                CurrentStep = 5;
            }
            else {
                CurrentStep = 4;
            }
        }
        else {
            isChoice = true
            addMessageToCanvas(ApiReturnType.Text, "Data not found");

        }
    }

}

function GetOtherData(val, mode) {
    var req_input;
    var res_data
    if (mode == 0 || mode == 6) {
        req_input = {
            requested_code: val,
            spmode: mode,
            Id: ClientID
        };

        res_data = CallApi(serviceUrl + "whatapp.svc/Get_Galwayshop_Info", JSON.stringify(req_input))

    }
    else if (mode == 5) {
        req_input = {
            id: val,
            spmode: mode
        };
        res_data = CallApi(serviceUrl + "GlazeChatbot.svc/proc_distributor_profile", JSON.stringify(req_input))
    }
    else if (mode == 7) {
        req_input = {
            name: val,
            spmode: 0
        };
        res_data = CallApi(serviceUrl + "GlazeChatbot.svc/Get_Branches_Info", JSON.stringify(req_input))
    }

    var data_res = JSON.parse(res_data);

    if (data_res.list == undefined) {
        isChoice = true;
        addMessageToCanvas(ApiReturnType.Text, data_res.msg);
    }
    else if (data_res.list.length > 0) {

        var oject = [];
        $.each(data_res.list, function (i) {
            oject.push({ "object_master_id": data_res.list[i], "objectname": data_res.list[i], "data_type": 0, "data_value": 0 });
        })
        addMessageToCanvas(ApiReturnType.List, oject)
    }
    else {
        addMessageToCanvas(ApiReturnType.Text, data_res.msg);
        isChoice = true
    }

}

function AddChatChoice() {

    var oject = [];

    oject.push({ "object_master_id": -1, "objectname": "Yes", "data_type": 3, "data_value": '' });
    oject.push({ "object_master_id": -2, "objectname": "No", "data_type": 3, "data_value": '' });

    addMessageToCanvas(ApiReturnType.List, oject)
}

function funHome() {
    if (CurrentStep > 3) {
        clearAllMsg();
        DeptID = 0;
        if (IsConnected == true) {
            socket.close();
        }
        var list = [];
        if (ClientID.indexOf("Non_") == 0) {
           // GetObjectMasterData('GlazeChatbot.svc/get_object_master_data', 2, 3);
        }
        else {
            //GetObjectMasterData('GlazeChatbot.svc/get_object_master_data', 1, 3);
        }


    }
}

function clearAllMsg() {
    var canvas = document.getElementById("div_Glaze_Chat");
    canvas.innerHTML = "";
}

function goToHome() {
    var oject = [];

    oject.push({ "object_master_id": -3, "objectname": "Go back at home", "data_type": 0, "data_value": '' });

    addMessageToCanvas(ApiReturnType.List, oject)
}

AddChating();
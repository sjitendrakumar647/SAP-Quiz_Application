import type { QuizQuestion } from "../types/quiz"

export const quizData: QuizQuestion[] = [
  {
    id: 1,
    questionText: "Which function call returns 0?",
    options: [
      { label: "A", value: "A", text: "Count_any_of ( val - 'ABAP ABAP abap' sub \"AB\" )" },
      { label: "B", value: "B", text: "Count (val - 'ABAP ABAP abap' sub - 'AB' )" },
      { label: "C", value: "C", text: 'find_any_of (val = "ABAP ABAP abap\' sub = "AB")' },
      { label: "D", value: "D", text: "find_any_not_of( val 'ABAP ABAP abap' sub = 'AB')" },
    ],
    correctAnswer: "C",
  },
  {
    id: 2,
    questionText:
      "In which products must you use the ABAP Cloud Development Model? Note: There are 2 correct answers to this question.",
    options: [
      { label: "A", value: "A", text: "SAP S/4HANA Cloud, private edition" },
      { label: "B", value: "B", text: "SAP BTP, ABAP environment" },
      { label: "C", value: "C", text: "SAP S/4HANA on premise" },
      { label: "D", value: "D", text: "SAP S/4HANA Cloud, public edition" },
    ],
    correctAnswer: "BD",
  },
  {
    id: 3,
    questionText:
      "Which RESTful Application Programming object can be used to organize the display of fields in an app?",
    options: [
      { label: "A", value: "A", text: "Data model view" },
      { label: "B", value: "B", text: "Metadata extension" },
      { label: "C", value: "C", text: "Service definition" },
      { label: "D", value: "D", text: "Projection view" },
    ],
    correctAnswer: "B",
  },
  {
    id: 4,
    questionText: `Given this code,<br>DATA: GO_SUPER TYPE REF TO LCL_SUPER,<br>GO_SUB TYPE REF TO LCL_SUB.<br><br>GO_SUB = NEW #(……..).<br>GO_SUPER = GO_SUB.<br><br>WHICH LCL_SUPER BEING SUPER CLASS OF LCL_SUB.<br>When accessing the subclass instance through go_super, what can you do? Note: There are 2 correct answers to this question.`,
    options: [
      { label: "A", value: "A", text: "Access the inherited private components." },
      { label: "B", value: "B", text: "Access the inherited public components." },
      { label: "C", value: "C", text: "Call a subclass specific public method" },
      { label: "D", value: "D", text: "Call inherited public redefined methods" },
    ],
    correctAnswer: "BD",
  },
  {
    id: 5,
    questionText: `Given the following code in an SAP S/4HANA Cloud private edition tenant:<br>CLASS ZCL_DEMO_CLASS DEFINITION.<br>METHODS: M1.<br>ENDCLASS.<br><br>CLASS ZCL_DEMO IMPLEMENTATION.<br>METHOD M1.<br>CALL FUNCTION 'ZF1'.<br>ENDMETHOD.<br>ENDCLASS.<br><br>The class zcl_demo_class is in a software component with the language version set to "ABAP Cloud". The function module ZF1' is in a different software component with the language version set to "Standard ABAP". Both the class and function module are customer created.<br>Regarding line #6, which of the following are valid statements? Note: There are 2 correct answers to this question.`,
    options: [
      { label: "A", value: "A", text: "ZF1' can be called only if it is released for cloud development." },
      {
        label: "B",
        value: "B",
        text: "'ZF1' can be called if a wrapper is created for it and the wrapper itself is released for cloud development.",
      },
      { label: "C", value: "C", text: '"ZF1" can be called whether it is released or not for cloud development' },
      {
        label: "D",
        value: "D",
        text: 'ZF1" can be called if a wrapper is created for it but the wrapper itself is not released for cloud development.',
      },
    ],
    correctAnswer: "AB",
  },
  {
    id: 6,
    questionText: `You have attached a system field to an input parameter of a CDS view entity as follows:<br>DEFINE VIEW ENTITY Z_ENTITY WITH PARAMETERS<br>@ENVIRONMENT.SystemField: #SYSTEM_LANGUAGE<br>LANGUAGE: SPRAS   ………….<br><br>What are the effects of this annotation? Note: There are 2 correct answers to this question.`,
    options: [
      { label: "A", value: "A", text: "It is no longer possible to pass your own value to the parameter." },
      { label: "B", value: "B", text: "You can still override the default value with a value of your own." },
      {
        label: "C",
        value: "C",
        text: "The value of sy-langu will be passed to the CDS view automatically when you use the CDS view in ABAP but not when you use it in another view entity",
      },
      {
        label: "D",
        value: "D",
        text: "The value of sy-langu will be passed to the CDS view automatically both when you use the CDS view in ABAP and in another CDS view entity (view on view).",
      },
    ],
    correctAnswer: "BC",
  },
  {
    id: 7,
    questionText: "In the assignment. data (gv_result) = 1 / 8.<br>what will be the data type of gv_result?",
    options: [
      { label: "A", value: "A", text: "TYPE I" },
      { label: "B", value: "B", text: "TYPE P DECIMALS 2" },
      { label: "C", value: "C", text: "TYPE DEFLOAT 16" },
      { label: "D", value: "D", text: "TYPE P DECIMALS 3" },
    ],
    correctAnswer: "C",
  },
  {
    id: 8,
    questionText: `Given this code,<br>INTERFACE IF1.<br><br>METHODS M1.<br><br>ENDINTERFACE.<br><br>CLASS CL1 DEFINITION.<br>……………<br>INTERFACE IF1.<br><br>ENDCLASS.<br><br><br>CLASS CL2 DEFINITION.<br><br>DATA: MO_IF1 TYPE REF TO IF1.<br><br>ENDCLASS.<br><br>What are valid statements? Note: There are 3 correct answers to this question`,
    options: [
      { label: "A", value: "A", text: "In class CL2, the interface method is named if1-m1." },
      { label: "B", value: "B", text: "Class CL2 uses the interface." },
      { label: "C", value: "C", text: "In class CL1, the interface method is named if-m1." },
      { label: "D", value: "D", text: "Class CL1 uses the interface." },
      { label: "E", value: "E", text: "Class CL1 implements the interface." },
    ],
    correctAnswer: "BDE",
  },
  {
    id: 9,
    questionText: `Given this code,<br><br>DATA : GO_SUPER TYPE REF TO LCL_SUPER,<br>GO_SUB1 TYPE REF TO LCL_SUB1,<br>GO_SUB2 TYPE REF TO LCL_SUB2.<br><br>GO_SUPER = NEW GO_SUB2( ……… ).<br>GO_SUPER = NEW GO_SUB1( ………. ).<br>GO_SUB1 = CAST #( GO_SUPER ).<br>GO_SUB1->SUB1_METH1( ……. ).<br><br><br>GO_SUB2 = CAST #( GO_SUPER ).<br>GO_SUB2->SUB1_METH1( ……. ).<br><br><br><br>With Icl_super being superclass for Icl_sub1 and Icl_sub2 and with methods sub1_meth1 and sub2_meth1 being subclass-specific methods of Id_sub1 or Icl_sub2, respectively<br>What will happen when executing these casts? Note: There are 2 correct answers to this question`,
    options: [
      { label: "A", value: "A", text: "go_sub1->sub1_meth 1(…). will work." },
      { label: "B", value: "B", text: "go sub2->sub2 meth 1(...). will work" },
      {
        label: "C",
        value: "C",
        text: "go sub1 = CAST # go super), will not work<br>• go_sub2 = CAST # go super), will work.",
      },
      {
        label: "D",
        value: "D",
        text: "go_sub1 CAST #go_super), will work<br>• go_sub2 = CAST #(go_super). will not work.",
      },
    ],
    correctAnswer: "AD",
  },
  {
    id: 10,
    questionText:
      "Setting a field to read-only in which object would make the field read-only in all applications of the RESTful Application Programming model?",
    options: [
      { label: "A", value: "A", text: "Service definition" },
      { label: "B", value: "B", text: "Metadata extension" },
      { label: "C", value: "C", text: "Behaviour definition" },
      { label: "D", value: "D", text: "Projection view" },
    ],
    correctAnswer: "C",
  },
  {
    id: 11,
    questionText:
      "What are some features of a unique secondary key? Note: There are 2 correct answers to this question.",
    options: [
      { label: "A", value: "A", text: "It is created with the first read access of a table." },
      { label: "B", value: "B", text: "It is created when a table is filled." },
      { label: "C", value: "C", text: "It is updated when the table is modified." },
      { label: "D", value: "D", text: "It is updated when the modified table is read again." },
    ],
    correctAnswer: "AC",
  },
  {
    id: 12,
    questionText:
      "Which of the following results in faster access to internal tables? Note: There are 3 correct answers to this question.",
    options: [
      {
        label: "A",
        value: "A",
        text: "In a sorted internal table, specifying the primary key partially from the left without gaps.",
      },
      { label: "B", value: "B", text: "In a hashed internal table, specifying the primary key completely." },
      { label: "C", value: "C", text: "In a sorted internal table, specifying the primary key completely." },
      {
        label: "D",
        value: "D",
        text: "In a standard internal table, specifying the primary key partially from the left without gaps.",
      },
      {
        label: "E",
        value: "E",
        text: "In a hashed internal table, specifying the primary key partially from the left without gaps.",
      },
    ],
    correctAnswer: "ABC",
  },
  {
    id: 13,
    questionText:
      'You want to define the following CDS view entity with an input parameter:<br>Define view entity Z_CONVERT With parameters currency : ???<br><br>Which of the following can you use to replace "????" Note: There are 2 correct answers to this question.',
    options: [
      { label: "A", value: "A", text: "A built-in ABAP Dictionary type" },
      { label: "B", value: "B", text: "A data element" },
      { label: "C", value: "C", text: "A built-in ABAP type" },
      { label: "D", value: "D", text: "A component of an ABAP Dictionary structure" },
    ],
    correctAnswer: "BC",
  },
  {
    id: 14,
    questionText:
      'Match the sequence of execution in the dropdown list to the operation. (1 is the highest priority and 3 is the lowest priority.)<br>A. Addition (+) and Subtraction (-)<br>B. Numeric functions<br>C. Multiplication (") and Division (/)',
    options: [
      { label: "A", value: "A", text: "A: 3, B: 1, C: 2" },
      { label: "B", value: "B", text: "A: 3, B: 2, C: 1" },
      { label: "C", value: "C", text: "A: 2, B: 1, C: 3" },
      { label: "D", value: "D", text: "A: 1, B: 2, C: 3" },
    ],
    correctAnswer: "A",
  },
  {
    id: 15,
    questionText:
      "In a subclass sub1 you want to redefine a component of a superclass super1. How do you achieve this? Note: There are 2 correct answers to this question.",
    options: [
      { label: "A", value: "A", text: "You add the clause REDEFINITION to the component in sub1." },
      { label: "B", value: "B", text: "You implement the redefined component in sub1." },
      { label: "C", value: "C", text: "You implement the redefined component for a second time in super1." },
      { label: "D", value: "D", text: "You add the clause REDEFINITION to the component in super1." },
    ],
    correctAnswer: "AB",
  },
  {
    id: 16,
    questionText:
      "In a program you find this source code<br>AUTHORITY-CHECK OBJECT '/DWO/TRVL ' ID 'CNTRY' FIELD 'DE'<br>ID ACTVT FIELD '03\".<br><br>Which of the following apply? Note: There are 2 correct answers to this question.",
    options: [
      {
        label: "A",
        value: "A",
        text: 'AUTHORITY CHECK verifies whether a user is authorized for /DMO/TRVL" with the listed field values.',
      },
      {
        label: "B",
        value: "B",
        text: "If the user is authorized for 'CNTRY = 'DE' AND for 'ACTVT = '03 then the return code is 0.",
      },
      {
        label: "C",
        value: "C",
        text: "If the user is NOT authorized for 'CNTRY' = 'DE' OR for 'ACTVT' = '03 then the program will terminate.",
      },
      { label: "D", value: "D", text: "If the user is authorized for 'CNTRY = 'DE' then the return code is always 0." },
    ],
    correctAnswer: "AB",
  },
  {
    id: 17,
    questionText:
      "Which of the following are valid sort operations for internal tables? Note: There are 3 correct answers to this question.",
    options: [
      { label: "A", value: "A", text: "Sort a sorted table using<br>• SORT itab DESCENDING." },
      {
        label: "B",
        value: "B",
        text: "Sort a sorted table using<br>• SORT itab BY field1 ASCENDING field2 DESCENDING.",
      },
      { label: "C", value: "C", text: "Sort a standard table using<br>• SORT itab ASCENDING." },
      { label: "D", value: "D", text: "Sort a standard table using<br>• SORT itab BY field1 field2." },
      { label: "E", value: "E", text: "Sort a standard table using<br>• SORT itab." },
    ],
    correctAnswer: "CDE",
  },
  {
    id: 18,
    questionText: "Which statement can you use to change the contents of a row of data in an internal table?",
    options: [
      { label: "A", value: "A", text: "Append table" },
      { label: "B", value: "B", text: "Insert table" },
      { label: "C", value: "C", text: "Update table" },
      { label: "D", value: "D", text: "Modify table" },
    ],
    correctAnswer: "D",
  },
  {
    id: 19,
    questionText:
      "In an Access Control Object, which clauses are used? Note: There are 3 correct answers to this question.",
    options: [
      { label: "A", value: "A", text: "Where (to specify the access conditions)" },
      { label: "B", value: "B", text: "Return code (to assign the retum code of the authority check)" },
      { label: "C", value: "C", text: "Define role (to specify the role name)" },
      { label: "D", value: "D", text: "Revoke (to remove access to the data source)" },
      { label: "E", value: "E", text: "Grant (to identify the data source)" },
    ],
    correctAnswer: "ACE",
  },
  {
    id: 20,
    questionText:
      'You are designing the following select statement in ABAP Open SQL:<br><br>DATA GT_FLIGHTS TYPE STABDARD TABLE OF DEMO_CDS_FLIGHTS.<br>SELECT FROM DEMO_CDS_FLIGHTS<br>FIELDS CARRID, CONNID, FLDATE, SUM(PAYMENT_SUM), CURRENCY<br>WHERE FLDATE > @SY-DATUM<br>GROUP BY CORRID, CONNID, FLDATE<br>ORDER BY CARRID, CONNID<br>To adhere to the most recent ABAP SQL syntax conventions from SAP, on which line must you insert the "INTO TABLE @gt flights" clause to complete the SQL statement?',
    options: [
      { label: "A", value: "A", text: "#15" },
      { label: "B", value: "B", text: "#6" },
      { label: "C", value: "C", text: "#8" },
      { label: "D", value: "D", text: "#4" },
    ],
    correctAnswer: "A",
  },
  {
    id: 21,
    questionText:
      "Given this code,<br><br>DATA: GO_SUPER TYPE REF TO LCL_SUPER,<br>GO_SUB1 TYPE REF TO LCL_SUB1.<br><br>GO_SUB1 = CAST #( GO_SUPER ).<br>GO_SUB1->SUB1_METH1( ……. ).<br><br>with which predicate condition can you ensure that the CAST will work?",
    options: [
      { label: "A", value: "A", text: "IS BOUND" },
      { label: "B", value: "B", text: "IS INSTANCE OF" },
      { label: "C", value: "C", text: "IS NOT INITIAL" },
      { label: "D", value: "D", text: "IS SUPPLIED" },
    ],
    correctAnswer: "B",
  },
  {
    id: 22,
    questionText: "What is the sequence priority when evaluating a logical expression?<br>A. NOT<br>B. OR<br>C. AND",
    options: [
      { label: "A", value: "A", text: "A: 1, B: 3, C: 2" },
      { label: "B", value: "B", text: "A: 1, B: 2, C: 3" },
      { label: "C", value: "C", text: "A: 2, B: 3, C: 1" },
      { label: "D", value: "D", text: "A: 3, B: 1, C: 2" },
    ],
    correctAnswer: "A",
  },
  {
    id: 23,
    questionText:
      "Which of the following are parts of the definition of a new database table? Note: There are 2 correct answers to this question.",
    options: [
      { label: "A", value: "A", text: "Field list" },
      { label: "B", value: "B", text: "Extension" },
      { label: "C", value: "C", text: "Semantic table attributes" },
      { label: "D", value: "D", text: "Partitioning attribues" },
    ],
    correctAnswer: "AC",
  },
  {
    id: 24,
    questionText:
      "In a RESTful Application Programming application, in which objects do you bind a CDS view to create a value help? Note: There are 3 correct answers to this question.",
    options: [
      { label: "A", value: "A", text: "Data model view" },
      { label: "B", value: "B", text: "Service definition" },
      { label: "C", value: "C", text: "Behavior definition" },
      { label: "D", value: "D", text: "Projection view" },
      { label: "E", value: "E", text: "Metadata extension" },
    ],
    correctAnswer: "ACE",
  },
  {
    id: 25,
    questionText:
      "Which of the following are incomplete ABAP types? Note: There are 2 correct answers to this question.",
    options: [
      { label: "A", value: "A", text: "P" },
      { label: "B", value: "B", text: "String" },
      { label: "C", value: "C", text: "C" },
      { label: "D", value: "D", text: "T" },
    ],
    correctAnswer: "AC",
  },
  {
    id: 26,
    questionText:
      "Which of the following integration frameworks have been released for ABAP cloud development? Note: There are 3 correct answers to this question.",
    options: [
      { label: "A", value: "A", text: "OData services" },
      { label: "B", value: "B", text: "Business events" },
      { label: "C", value: "C", text: "SOAP consumption" },
      { label: "D", value: "D", text: "Business Add-ins (BAdls)" },
      { label: "E", value: "E", text: "CDS Views" },
    ],
    correctAnswer: "ABC",
  },
  {
    id: 27,
    questionText:
      "Given this code,<br><br>INTERFACE CL1 DEFINITION.<br>METHODS M1.<br>ENDINTERFACE.<br><br>CLASS CL1 DEFINITION.<br>PUBLIC SECTION.<br>INTERFACE IF1.<br>METHODS M2.<br>ENDCLASS.<br><br>*IN A METHODS OF ANOTHER CLASS<br>DATA GO_IF1 TYPE REF TO IF1.<br>DATA GO_CL1 TYPE REF TO IF1.<br>GO_CL1 = NEW #( ……….. ).<br>GO_IF1 = GO_CL1.<br><br>What are valid statements? Note: There are 3 correct answers to this question.",
    options: [
      { label: "A", value: "A", text: "Instead of go_cl1 = NEW #() you could use go_if1 - NEW #(...)." },
      { label: "B", value: "B", text: "go_if1 may call method m2 with go if->m2(...)." },
      { label: "C", value: "C", text: "Instead of go_cl1 = NEW #(...) you could use go_if1 = NEW cl1( ... )." },
      { label: "D", value: "D", text: "go_if1 may call method m1 with go_if1->m1()." },
      { label: "E", value: "E", text: "go_cl1 may call method m1 with go_d1->if1~m1()." },
    ],
    correctAnswer: "CDE",
  },
  {
    id: 28,
    questionText:
      "Which of the following ABAP SQL statements are valid? Note: There are 2 correct answers to this question.",
    options: [
      {
        label: "A",
        value: "A",
        text: "SELECT FROM /dmo/connection FIELDS<br>MAX(distance) AS dist_max MIN(distance) AS dist_min INTO TABLE @DATA(It_hits).",
      },
      {
        label: "B",
        value: "B",
        text: "SELECT FROM /dmo/connection FIELDS<br>carrid, airpfrom<br>GROUP BY carrid, connid INTO TABLE @DATA(It_hits).",
      },
      {
        label: "C",
        value: "C",
        text: "SELECT FROM /dmo/connection FIELDS<br>carrid airpfrom,<br>MAX(distance) AS dist_max, MIN( distance) AS dist_min GROUP BY carrid, airpfrom<br>INTO TABLE @DATA(It_hits)",
      },
      {
        label: "D",
        value: "D",
        text: "SELECT FROM /dmo/connection FIELDS<br>carrid, airpfrom,<br>MAX( distance) AS dist_max, MIN(distance) AS dist_min INTO TABLE @DATA(It_hits)",
      },
    ],
    correctAnswer: "AC",
  },
  {
    id: 29,
    questionText:
      'Given the following code in an SAP S/4HANA Cloud private edition tenant:<br><br>CLASS ZCL_DEMO_CLASS DEFINITION.<br>METHODS:M1.<br>ENDCLASS.<br><br>CLASS ZCL_DEMO_CLASS IMPLEMENTATION.<br>METHOD M1.<br>CALL FUNCTION \'ZF1\'.<br>ENDMETHOD,<br>ENDCLASS.<br>The class zcl_demo_class is in a software component with the language version set to "Standard ABAP". The function module "ZF1\' is in a software component with the language version set to "ABAP Cloud". Both the class and function module are customer created.<br>Regarding line #6, which of the following is a valid statement?',
    options: [
      {
        label: "A",
        value: "A",
        text: "'ZF1' can be called via a wrapper that itself has been released for cloud development.",
      },
      { label: "B", value: "B", text: "ZF1' must be released for cloud development to be called." },
      {
        label: "C",
        value: "C",
        text: "ZF1' can be called via a wrapper that itself has not been released for cloud development.",
      },
      { label: "D", value: "D", text: "ZF1' can be called whether it has been released or not for cloud development." },
    ],
    correctAnswer: "B",
  },
  {
    id: 30,
    questionText: "In ABAP SQL, which of the following retrieves the association field_Airline-Name of a CDS view?",
    options: [
      { label: "A", value: "A", text: "\\_Airline-Name" },
      { label: "B", value: "B", text: '"_Airline Name' },
      { label: "C", value: "C", text: "/_Airline Name" },
      { label: "D", value: "D", text: "@_Airline-Name" },
    ],
    correctAnswer: "A",
  },
  {
    id: 31,
    questionText: "Which internal table type allows unique and non-unique keys?",
    options: [
      { label: "A", value: "A", text: "Hashed" },
      { label: "B", value: "B", text: "Standard" },
      { label: "C", value: "C", text: "Sorted" },
    ],
    correctAnswer: "C",
  },
  {
    id: 32,
    questionText:
      "In ABAP SQL, which of the following can be assigned an alias? Note: There are 2 correct answers to this question.",
    options: [
      { label: "A", value: "A", text: "field (from field list)" },
      { label: "B", value: "B", text: "order criterion (from order by clause)" },
      { label: "C", value: "C", text: "group criterion (from group by clause)" },
      { label: "D", value: "D", text: "database table" },
    ],
    correctAnswer: "AD",
  },
  {
    id: 33,
    questionText: "Which patterns raise an exception? Note: There are 3 correct answers to this question.",
    options: [
      {
        label: "A",
        value: "A",
        text: "DATA: gv_target TYPE d.<br>CONSTANTS: gco_date TYPE d VALUE '20331233'.<br>gv_target EXACT ( geo_date).",
      },
      {
        label: "B",
        value: "B",
        text: 'DATA: gv_target TYPE c LENGTH 5.<br>CONSTANTS: ECO string TYPE string VALUE 0123456789ABCDEF".<br>gv_target - EXACT (gco_string+5 (6) ).',
      },
      {
        label: "C",
        value: "C",
        text: "DATA: Ev target TYPE p DECIMALS 3. CONSTANTS: gco_int1 TYPE i VALUE 2. Ev_target - EXACT #2 / gco_int1 ).",
      },
      {
        label: "D",
        value: "D",
        text: "DATA: gv_target TYPE string.<br>CONSTANTS: gco_string TYPE LENGTH 16 VALUE 0123456789ABCDEF*.<br>gv_target = EXACT # gco_string+5 (5) ).",
      },
      {
        label: "E",
        value: "E",
        text: "DATA: gv_target TYPE p DECIMALS 2. CONSTANTS: go int1 TYPE i VALUE 3. gv_target - EXACT (2 gco_int1).",
      },
    ],
    correctAnswer: "ABE",
  },
  {
    id: 34,
    questionText:
      "Which of the following are features of Core Data Services? Note: There are 3 correct answers to this question.",
    options: [
      { label: "A", value: "A", text: "Associations" },
      { label: "B", value: "B", text: "Inheritance" },
      { label: "C", value: "C", text: "Annotations" },
      { label: "D", value: "D", text: "Structured Query Language (SQL)" },
      { label: "E", value: "E", text: "Delegation" },
    ],
    correctAnswer: "ACD",
  },
  {
    id: 35,
    questionText:
      "Why would you use Access Controls with CDS Views? Note: There are 2 correct answers to this question.",
    options: [
      {
        label: "A",
        value: "A",
        text: "The system field sy-subrc is set, giving you the result of the authorization check",
      },
      { label: "B", value: "B", text: "You do not have to remember to implement AUTHORITY CHECK statements." },
      {
        label: "C",
        value: "C",
        text: "All of the data from the data sources is loaded into your application automatically and filtered there according to the user's authorization.",
      },
      {
        label: "D",
        value: "D",
        text: "Only the data corresponding to the user's authorization is transferred from the database to the application layer.",
      },
    ],
    correctAnswer: "BD",
  },
  {
    id: 36,
    questionText: "Which ABAP SQL clause allows the use of inline declarations?",
    options: [
      { label: "A", value: "A", text: "INTO CORRESPONDING FIELDS OF" },
      { label: "B", value: "B", text: "FROM" },
      { label: "C", value: "C", text: "FIELDS" },
      { label: "D", value: "D", text: "INTO" },
    ],
    correctAnswer: "D",
  },
  {
    id: 37,
    questionText: "What RESTful Application Programming object contains only the fields required for a particular app?",
    options: [
      { label: "A", value: "A", text: "Database view" },
      { label: "B", value: "B", text: "Metadata extension" },
      { label: "C", value: "C", text: "Projection view" },
      { label: "D", value: "D", text: "Data model view" },
    ],
    correctAnswer: "C",
  },
  {
    id: 38,
    questionText:
      "After you created a database table in the RESTful Application Programming model, what do you create next?",
    options: [
      { label: "A", value: "A", text: "A projection view" },
      { label: "B", value: "B", text: "A data model view" },
      { label: "C", value: "C", text: "A metadata extension" },
      { label: "D", value: "D", text: "A service definition" },
    ],
    correctAnswer: "B",
  },
  {
    id: 39,
    questionText:
      "In class ZCL_CLASS_A, you use the statement DATA var TYPE ***<br>What may stand in place of ***? Note: There are 2 correct answers to this question.",
    options: [
      { label: "A", value: "A", text: "The name of a type defined privately in another class" },
      { label: "B", value: "B", text: "The name of a domain from the ABAP Dictionary" },
      { label: "C", value: "C", text: "The name of a type defined privately in class ZCL_CLASS_A" },
      { label: "D", value: "D", text: "The name of a data element from the ABAP Dictionary" },
    ],
    correctAnswer: "CD",
  },
  {
    id: 40,
    questionText:
      "Which extensibility type does SAP recommend you use to enhance the existing UI for an SAP Fiori app?",
    options: [
      { label: "A", value: "A", text: "Key user" },
      { label: "B", value: "B", text: "Developer" },
      { label: "C", value: "C", text: "Side-by-side" },
      { label: "D", value: "D", text: "Classic" },
    ],
    correctAnswer: "A",
  },
  {
    id: 41,
    questionText: "In RESTful Application Programming, which EML statement retrieves an object?",
    options: [
      { label: "A", value: "A", text: "Read entity" },
      { label: "B", value: "B", text: "Get entity" },
      { label: "C", value: "C", text: "Find entity" },
      { label: "D", value: "D", text: "Select Entity" },
    ],
    correctAnswer: "A",
  },
  {
    id: 42,
    questionText:
      "What are advantages of using a field symbol for internal table row access? Note: There are 2 correct answers to this question.",
    options: [
      {
        label: "A",
        value: "A",
        text: "A MODIFY statement to write changed contents back to the table is not required.",
      },
      { label: "B", value: "B", text: "Using a field symbol is faster than using a work area." },
      { label: "C", value: "C", text: "The row content is copied to the field symbol instead to a work area" },
      { label: "D", value: "D", text: "The field symbol can be reused for other programs." },
    ],
    correctAnswer: "AB",
  },
  {
    id: 43,
    questionText: "What is the purpose of a foreign key relationship between two tables in the ABAP Dictionary?",
    options: [
      { label: "A", value: "A", text: "To create a corresponding foreign key relationship in the database" },
      { label: "B", value: "B", text: "To ensure the integrity of data in the corresponding database tables" },
      { label: "C", value: "C", text: "To document the relationship between the two tables" },
    ],
    correctAnswer: "B",
  },
  {
    id: 44,
    questionText:
      "When processing an internal table with the statement LOOP AT itab... ENDLOOP, what system variable contains the current row number?",
    options: [
      { label: "A", value: "A", text: "sy-subrc" },
      { label: "B", value: "B", text: "sy-linno" },
      { label: "C", value: "C", text: "sy-index" },
      { label: "D", value: "D", text: "sy-tabix" },
    ],
    correctAnswer: "D",
  },
  {
    id: 45,
    questionText: `In what order are objects created to generate a RESTful Application Programming application?<br>
    A. Database table<br>
    B. Service binding Projection view<br>
    C. Service definition<br>
    D. Data model view<br>
    Which of the following is the correct order?`,
    
    options: [
      { label: "A", value: "A", text: "A-C-B-D" },
      { label: "B", value: "B", text: "B-A-C-D" },
      { label: "C", value: "C", text: "A-D-C-B" },
      { label: "D", value: "D", text: "D-C-A-B" },
    ],
    correctAnswer: "C",
  },
  {
    id: 46,
    questionText:
      "What are some of the reasons that Core Data Services are preferable to the classical approach to data modeling? Note: There are 2 correct answers to this question.",
    options: [
      { label: "A", value: "A", text: "They compute results on the application server." },
      { label: "B", value: "B", text: "They transfer computational results to the application server." },
      { label: "C", value: "C", text: "They avoid data transfer completely." },
      { label: "D", value: "D", text: "They implement code pushdown." },
    ],
    correctAnswer: "BD",
  },
  {
    id: 47,
    questionText: "What RESTful Application Programming feature is used to ensure the uniqueness of a semantic key?",
    options: [
      { label: "A", value: "A", text: "Validation" },
      { label: "B", value: "B", text: "Determination" },
      { label: "C", value: "C", text: "Action" },
    ],
    correctAnswer: "A",
  },
  {
    id: 48,
    questionText:
      "Given this code,<br><br>IF < CONDITION >.<br>RAISE EXCEPTION TYPE ZCX1<br>EXPORTING<br>PARAM1 = VALUE1<br>PARAM2 = VALUE2<br>PARAM3 = VALUE3.<br>ENDIF.<br><br>What are valid statements? Note: There are 2 correct answers to this question.",
    options: [
      {
        label: "A",
        value: "A",
        text: '"zcx1" is a dictionary structure, and "param1" and "param2" are same-named components of this structure.',
      },
      { label: "B", value: "B", text: '"previous" expects the reference to a previous exception' },
      { label: "C", value: "C", text: "The code creates an exception object and raises an exception." },
      { label: "D", value: "D", text: '"param1" and "param2" are predefined names.' },
    ],
    correctAnswer: "BC",
  },
  {
    id: 49,
    questionText:
      "Given this code,<br><br>TARGET_ITAB = VALUE #(FOR ROW IN SOURCE_ITAB(<br>FIELD1 = ROW-FIELD1<br>FIELD2 = ROW-FIELD2<br>FIELDN = ROW-FIELDN )<br>).<br><br>Which of the following statements are correct? Note: There are 2 correct answers to this question.",
    options: [
      { label: "A", value: "A", text: "FOR defines a loop that runs over the content of source_itab" },
      { label: "B", value: "B", text: "row is a predefined name and cannot be chosen arbitrarily." },
      { label: "C", value: "C", text: "source_itab is only visible within the loop." },
      { label: "D", value: "D", text: "row is only visible within the loop." },
    ],
    correctAnswer: "AD",
  },
  {
    id: 50,
    questionText:
      "For what kind of applications would you consider using on-stack developer extensions? Note: There are 2 correct answers to this question.",
    options: [
      { label: "A", value: "A", text: "Applications that run separate from SAP S/4HANA" },
      { label: "B", value: "B", text: "Applications that provide APIs for side by side SAP BTP apps" },
      { label: "C", value: "C", text: "Applications that access SAP S/4HANA data using complex SQL" },
      { label: "D", value: "D", text: "Applications that integrate data from several different systems" },
    ],
    correctAnswer: "BC",
  },
  {
    id: 51,
    questionText:
      "Given the following Core Data Services View Entity Data Definition:<br><br>@ACCESSCONTROL.AUTHORIZATIONCHECK:#NOT_REQUIRED<br><br>DEFINE VIEW ENTITY DEMO_SALES_CDS_SO_VE_SIMPLE<br>AS SELECT FROM DEMO_SALES_ORDER AS SALESORDER<br><br>{ KEY SO_KEY,<br>BUYER_ID AS BUYER_ID,<br>CURRENCY_SUM AS CURRENCYSUM<br>}<br>You want to provide a short description of the data definition for developers that will be attached to the database view<br>Which of the following annotations would do this if you inserted it on line #27",
    options: [
      { label: "A", value: "A", text: "@EndUser Text label" },
      { label: "B", value: "B", text: "@UI.badge.title.label" },
      { label: "C", value: "C", text: "@EndUserText.quickInfo" },
      { label: "D", value: "D", text: "@UI headerinto description label" },
    ],
    correctAnswer: "A",
  },
  {
    id: 52,
    questionText:
      'Given the following code,<br><br>DATA GV_TEXT TYPE STRING. "EC_NEEDED<br>DATA GV_TEXT2 TYPE STRING ##NEEDED.<br><br>What are valid statements? Note: There are 2 correct answers to this question.',
    options: [
      { label: "A", value: "A", text: "The pragma is not checked by the syntax checker." },
      { label: "B", value: "B", text: "##NEEDED is checked by the syntax checker." },
      { label: "C", value: "C", text: "#EC_NEEDED is not checked by the syntax checker." },
      { label: "D", value: "D", text: "The pseudo-comment is checked by the syntax checker" },
    ],
    correctAnswer: "BC",
  },
  {
    id: 53,
    questionText:
      "Given the following code in an SAP S/4HANA Cloud private edition tenant:<br><br>CLASS ZCL_DEMO_CLASS DEFINITION.<br>METHODS:M1.<br>END CLASS.<br><br>CLASS ZCL_DEMO_CLASS IMPLEMENTATION.<br>METHOD M1.<br>CALL FUNCTION 'ZF1'.<br>ENDMETHOD.<br>ENDCLASS.<br><br>The class zcl_demo_class is in a software component with the language version set to \"ABAP Cloud\". The function module ZF1' is in the same software component. Both the class and function module are customer created.<br><br>Regarding line #6, which of the following is a valid statement?",
    options: [
      { label: "A", value: "A", text: "'ZF1' must be released for cloud development to be called." },
      {
        label: "B",
        value: "B",
        text: "'ZF1' can be called via a wrapper that itself has not been released for cloud development.",
      },
      {
        label: "C",
        value: "C",
        text: "'ZF1' can be called whether it has been released or not for cloud development.",
      },
      {
        label: "D",
        value: "D",
        text: "'ZF1' can be called via a wrapper that itself has been released for cloud development.",
      },
    ],
    correctAnswer: "D",
  },
  {
    id: 54,
    questionText:
      "Given the following Core Data Services View Entity Data Definition,<br><br>@ACCESSCONTROL.AUTHORIZATIONCHECK:#NOT_REQUIRED<br>DEFINE VIEW ENTITYDEMO_CDS_DATA_SOURCE_MATRIX<br>AS SELECT FROM <SOURCE><br>{<br>KEY FIELD_1,<br>FIELD_2,<br>FIELD_3<br>}<br>Which of the following types are permitted to be used for <source> on line #4? Note: There are 2 correct answers to this question.",
    options: [
      { label: "A", value: "A", text: "An external view from the ABAP Dictionary" },
      { label: "B", value: "B", text: "A database view from the ABAP Dictionary" },
      { label: "C", value: "C", text: "A CDS DDIC-based view" },
      { label: "D", value: "D", text: "A database table from the ABAP Dictionary" },
    ],
    correctAnswer: "CD",
  },
  {
    id: 55,
    questionText:
      "Which restrictions exist for ABAP SQL arithmetic expressions? Note: There are 2 correct answers to this question.",
    options: [
      { label: "A", value: "A", text: "The operator is allowed only in floating point expressions." },
      { label: "B", value: "B", text: "The operator/is allowed only in floating point expressions." },
      { label: "C", value: "C", text: "Decimal types and integer types can NOT be used in the same expression." },
      {
        label: "D",
        value: "D",
        text: "Floating point types and integer types can NOT be used in the same expression.",
      },
    ],
    correctAnswer: "BD",
  },
  {
    id: 56,
    questionText:
      "When does SAP recommend to use a sorted or a hashed table respectively? Note: There are 2 correct answers to this question.",
    options: [
      { label: "A", value: "A", text: "A hashed table, when you read a single record and specify the complete key." },
      { label: "B", value: "B", text: "A sorted table, when you read a single record and specify non key fields." },
      {
        label: "C",
        value: "C",
        text: "A hashed table, when you read a subset in a loop and specify a part of the key from the left without gaps.",
      },
      {
        label: "D",
        value: "D",
        text: "A sorted table, when you read a subset in a loop and specify a part of the key from the left without gaps.",
      },
    ],
    correctAnswer: "AD",
  },
  {
    id: 57,
    questionText:
      "Which type of legacy code does SAP recommend you eliminate when you review modifications as part of an SAP S/4HANA system conversion? Note: There are 2 correct answers to this question.",
    options: [
      { label: "A", value: "A", text: "Code that can be redesigned as a key user extension" },
      { label: "B", value: "B", text: "Code that supports a critical business process" },
      { label: "C", value: "C", text: "Code that now is identical to a standard SAP object" },
      { label: "D", value: "D", text: "Code that has less than 10% usage according to usage statistics" },
    ],
    correctAnswer: "AC",
  },
  {
    id: 58,
    questionText:
      "When processing a loop with the statement DO... ENDDO, what system variable contains the implicit loop counter?",
    options: [
      { label: "A", value: "A", text: "sy-linno" },
      { label: "B", value: "B", text: "sy-subrc" },
      { label: "C", value: "C", text: "sy-labix" },
      { label: "D", value: "D", text: "sy-index" },
    ],
    correctAnswer: "D",
  },
  {
    id: 59,
    questionText:
      "Which of the following actions cause an indirect change to a database table requiring a table conversion? Note: There are 2 correct answers to this question.",
    options: [
      {
        label: "A",
        value: "A",
        text: "Changing the field labels of a data element that is used in the table definition.",
      },
      {
        label: "B",
        value: "B",
        text: "Shortening the length of a domain used in a data element that is used in the table definition.",
      },
      { label: "C", value: "C", text: "Renaming a field in a structure that is included in the table definition" },
      { label: "D", value: "D", text: "Deleting a field from a structure that is included in the table definition." },
    ],
    correctAnswer: "BD",
  },
  {
    id: 60,
    questionText:
      "Class super has subclass sub. Which rules are valid for the sub constructor? Note: There are 2 correct answers to this question.",
    options: [
      {
        label: "A",
        value: "A",
        text: "Import parameters can only be evaluated after calling the constructor of super.",
      },
      {
        label: "B",
        value: "B",
        text: "The constructor of super must be called before using any components of your own instance.",
      },
      { label: "C", value: "C", text: "The method signature can be changed." },
      {
        label: "D",
        value: "D",
        text: "Events of your own instance cannot be raised before the registration of a handler in super.",
      },
    ],
    correctAnswer: "BC",
  },
  {
    id: 61,
    questionText:
      "Which of the following string functions are predicate functions? Note: There are 2 correct answers to this question.",
    options: [
      { label: "A", value: "A", text: "find_any_not_of()" },
      { label: "B", value: "B", text: "contains_any_of()" },
      { label: "C", value: "C", text: "matches()" },
      { label: "D", value: "D", text: "count_any_of()" },
    ],
    correctAnswer: "BC",
  },
  {
    id: 62,
    questionText:
      "In RESTful Application Programming, a business object contains which parts? Note: There are 2 correct answers to this question.",
    options: [
      { label: "A", value: "A", text: "Process definition" },
      { label: "B", value: "B", text: "CDS view" },
      { label: "C", value: "C", text: "Behavior definition" },
      { label: "D", value: "D", text: "Authentication rules" },
    ],
    correctAnswer: "BC",
  },
  {
    id: 63,
    questionText:
      "Given the following code excerpt that defines an SAP HANA database table:<br><br>DEFINE TABLE DEMO_TABLE<br>{<br>KEY FIELD : REFERENCE TO abap.clnt(3);<br>Key field2 : abap_char(1332);<br>@semantics.quantity.unit.unitofmeasure :'demo_table ,field'<br>Field3 : abap.quan(2);<br>Field4 : abap.unit(2);<br>}<br><br>Which field is defined incorrectly?",
    options: [
      { label: "A", value: "A", text: "field2" },
      { label: "B", value: "B", text: "field4" },
      { label: "C", value: "C", text: "field1" },
      { label: "D", value: "D", text: "field3" },
    ],
    correctAnswer: "C",
  },
  {
    id: 64,
    questionText:
      "You have a superclass super1 and a subclass sub1 of super1. Each class has an instance constructor and a static constructor. The first statement of your program creates an instance of sub1. In which sequence will the constructors be executed?",
    options: [
      { label: "A", value: "A", text: "Class constructor of super1 first" },
      { label: "B", value: "B", text: "Instance constructor of sub1 third" },
      { label: "C", value: "C", text: "Instance constructor of super1 second" },
      { label: "D", value: "D", text: "Class constructor of sub1 fourth" },
    ],
    correctAnswer: "ADBC",
  },
  {
    id: 65,
    questionText: "What are some properties of database tables? Note: There are 2 correct answers to this question.",
    options: [
      { label: "A", value: "A", text: "They can have any number of key fields." },
      { label: "B", value: "B", text: "They store information in two dimensions." },
      { label: "C", value: "C", text: "They may have key fields." },
      { label: "D", value: "D", text: "They can have relationships to other tables." },
    ],
    correctAnswer: "BD",
  },
  {
    id: 66,
    questionText:
      "In this nested join below<br><br>SELECT FROM T_A AS A<br>LEFT OUTER JOIN T_B AS B<br>LEFT OUTER JOIN T_C AS C<br>ON C~F1 = B~F1 AND C~F2 = B~F2<br>ON B~F1 = A~F1<br>WHERE ………………<br>in which way is the join evaluated?",
    options: [
      {
        label: "A",
        value: "A",
        text: "From the left to the right in the order of the tables:<br>1. a is joined with b<br>2. b is joined with c",
      },
      {
        label: "B",
        value: "B",
        text: "From the top to the bottom in the order of the on conditions<br>1. b is joined with c<br>2. a is joined with b",
      },
      {
        label: "C",
        value: "C",
        text: "From the bottom to the top in the order of the on conditions:<br>1. a is joined with b<br>2. b is joined with c",
      },
      {
        label: "D",
        value: "D",
        text: "From the right to the left in the order of the tables:<br>1. b is joined with c.<br>2. b is joined with a.",
      },
    ],
    correctAnswer: "B",
  },
  {
    id: 67,
    questionText:
      'Given the following Core Data Services View Entity Data Definition:<br><br>@ACCESSCONTROL.AUTHORIZATIONCHECK:#NO1_REQUIRED<br>DEFINE VIEW ENTITY DEMO_CDS_ASSOC_ELEMENT<br>AS SELECT FROM SCARR<br>ASSOCIATION OF ONE TO MANY DEMO_CDS_ASSOC_SPFLI AS _SPFLI<br>ON SCARR.CARRID = SPFLI.CARRID<br>{<br>KEY CARRID,<br>?<br>CARRNAME<br>}<br><br>The "demo_ods_assoc_spfi data source referenced in line #4 contains a field "connid" which you would like to expose in the element list.Which of the following statements would do this if inserted on line #8?',
    options: [
      { label: "A", value: "A", text: "demo_ods_assoc_spfli.connid," },
      { label: "B", value: "B", text: "spfli-connid," },
      { label: "C", value: "C", text: "_spfli.connid," },
      { label: "D", value: "D", text: "demo_ods_assoc_spfli-connid," },
    ],
    correctAnswer: "C",
  },
  {
    id: 68,
    questionText:
      'As a consultant you are posed the following question from a client who is using SAP S/4HANA Cloud, public edition and also SAP BTP, ABAP environment.<br>"We are currently using an SAP Fiori app based on SAP Fiori elements that analyzes open orders. We have determined that it should be extended via a new button on the UI which will perform an on- the-fly calculation and display the result in a quick popup for the enduser. We have been informed by SAP that all underlying stack layers for the SAP Fiori app have been extensibility enabled."<br>Based on this which of the following extension types would you recommend to the customer to add the new button?',
    options: [
      { label: "A", value: "A", text: "RAP BO Behavior Extension" },
      { label: "B", value: "B", text: "SAP HANA database table extension" },
      { label: "C", value: "C", text: "Business Service Extension" },
      { label: "D", value: "D", text: "RAP BO Node Extension" },
    ],
    correctAnswer: "A",
  },
  {
    id: 69,
    questionText:
      "Given the following ABAP SQL statement excerpt from an ABAP program:<br><br>SELECT SINGLE *<br>FROM SPFLI<br>WHERE CARRID = 'LH' AND CONNID = '0400'<br>INTO @DATA(WA).<br><br>You are given the following information:<br><br>1. The data source \"spfli\" on line #2 is an SAP HANA database table<br>2. \"spfli\" will be a large table with over one million rows.<br>3. This program is the only one in the system that accesses the table.<br>4. This program will run rarely.<br>Based on this information, which of the following general settings should you set for the spfli database table? Note: There are 2 correct answers to this question.",
    options: [
      { label: "A", value: "A", text: '"Load Unit to "Column Loadable"' },
      { label: "B", value: "B", text: "\"Load Unit' to 'Page Loadable\"" },
      { label: "C", value: "C", text: '"Storage Type" to "Row Store"' },
      { label: "D", value: "D", text: '"Storage Type" to "Column Store"' },
    ],
    correctAnswer: "BC",
  },
  {
    id: 70,
    questionText:
      "What are some characteristics of secondary keys for internal tables? Note: There are 3 correct answers to this question.",
    options: [
      { label: "A", value: "A", text: "Multiple secondary keys are allowed for any kind of internal table." },
      { label: "B", value: "B", text: "Secondary keys can only be created for standard tables." },
      {
        label: "C",
        value: "C",
        text: "Secondary keys must be chosen explicitly when you actually read from an internal table.",
      },
      { label: "D", value: "D", text: "Hashed secondary keys do NOT have to be unique." },
      { label: "E", value: "E", text: "Sorted secondary keys do NOT have to be unique." },
    ],
    correctAnswer: "CDE",
  },
  {
    id: 71,
    questionText:
      "Give the following Core Data Service view entity data definition:<br><br>@ACCESSCONTROL.AUTHORIZATIONCHECK:#NOT_REQUIRED<br>DEFINE VIEW ENTITY DEMO_CDS_PARAM_VIEW_ENTITY<br>WITH PARAMETERS<br>P_DATE :ABAP.DATS<br>AS SELECT FROM SFLIGHT<br>{<br>KEY CARRID,<br>KEY CONNID,<br>KEY FLDATE,<br>PRICE,<br>SEATMAX,<br>SEATOCC,<br>}<br>WHERE FLDATE >= $PARAMETERS.P_DATE;<br><br>Which of the following ABAP SQL snippets are syntactically correct ways to provide a value for the parameter on line #4? Note: There are 2 correct answers to this question",
    options: [
      { label: "A", value: "A", text: "…SELECT * FROM demo_cds_param_view entity (p_date: $session.system_date)..." },
      { label: "B", value: "B", text: "…SELECT * FROM demo_cds_param_view_entity (p_date: 20238181')…" },
      {
        label: "C",
        value: "C",
        text: "…SELECT * FROM deno_cds_param_view_entity (p_date = @ (cl_abap_context_info-\n>get_system_date ())...",
      },
      { label: "D", value: "D", text: "…SELECT * FROM deno_cds_param_view_entity (p_date - '20230101')…" },
    ],
    correctAnswer: "CD",
  },
  {
    id: 72,
    questionText:
      'You have the following CDS definition:<br><br>DEFINE VIEW ENTITY Z_ENTITY AS SELECT FROM Z_SOURCE1 AS _SOURCE1<br>ASSOCIATION TO Z_SOURCE2 AS _SOURCE?<br><br>????????????<br>{<br>KEY CARRIER_ID AS CARRIER,<br>KEY CONNECTION_ID AS CONNECTION,<br>CITYFROM AS DEPARTURECITY,<br>CITY AS ARRIVALCITY,<br>_SOURCE2<br>}<br><br>Which of the following ON conditions must you insert in place of "???"?',
    options: [
      { label: "A", value: "A", text: "ON Z_Source1.camer_id=7_Source2 carrier_id" },
      { label: "B", value: "B", text: "ON Sprojection. Carrier Source2.carrier" },
      { label: "C", value: "C", text: "ON $projection.carrier_id=_Source2.carrier_id" },
      { label: "D", value: "D", text: "ON Sprojection Camer=Source2 carrier_id" },
    ],
    correctAnswer: "C",
  },
  {
    id: 73,
    questionText:
      "You have two internal tables itab1 and itab2.What is true for using the expression itab1 = corresponding #( itab2 )? Note: There are 2 correct answers to this question.",
    options: [
      {
        label: "A",
        value: "A",
        text: "Fields with the same name and the same type will be copied from itab2 to itab 1.",
      },
      { label: "B", value: "B", text: "itab1 and itab2 must have at least one field name in common." },
      { label: "C", value: "C", text: "itab1 and itab2 must have the same data type." },
      {
        label: "D",
        value: "D",
        text: "Fields with the same name but with different types may be copied from itab2 to itab1.",
      },
    ],
    correctAnswer: "BD",
  },
  {
    id: 74,
    questionText:
      "What would be the correct expression to change a given string value 'mr joe doe' into 'JOE' in an ABAP SQL field list?",
    options: [
      {
        label: "A",
        value: "A",
        text: "SELECT FROM TABLE dbtab1 FIELDS<br>f1,<br>substring(upper('mr joe doe'), 4, 3) AS f2_sub_up, f3,...",
      },
      {
        label: "B",
        value: "B",
        text: "SELECT FROM TABLE dbtab1 FIELDS<br>f1,<br>upper(left( 'mr joe doe', 6)) AS f2_up_left, f3,",
      },
      {
        label: "C",
        value: "C",
        text: "SELECT FROM TABLE dbtab1 FIELDS<br>f1,<br>substring(lower(upper( 'mr joe doe' ) ), 4, 3) AS f2_sub_lo_up, f3,",
      },
      {
        label: "D",
        value: "D",
        text: "SELECT FROM TABLE dbtab1 FIELDS<br>f1,<br>left(lower(substring( 'mr joe doe', 4, 3)), 3) AS f2_left_lo_sub, f3,",
      },
    ],
    correctAnswer: "A",
  },
  {
    id: 75,
    questionText:
      "For the assignment, gv_target = gv_source.<br>which of the following data declarations will always work without truncation or rounding? Note: There are 2 correct answers to this question.",
    options: [
      {
        label: "A",
        value: "A",
        text: "DATA gv_source TYPE p LENGTH 8 DECIMALS 3.<br>to<br>DATA gv_target TYPE p LENGTH 16 DECIMALS 2.",
      },
      { label: "B", value: "B", text: "DATA gv_source TYPE d. to<br>DATA gv_target TYPE string." },
      { label: "C", value: "C", text: "DATA gv_source TYPE c. to<br>DATA gv_target TYPE string." },
      { label: "D", value: "D", text: "DATA gv_source TYPE string. to<br>DATA gv_target TYPE c." },
    ],
    correctAnswer: "BC",
  },
  {
    id: 76,
    questionText:
      "Given the following Core Data Service View Entity Data Definition,<br><br><img src='/images/question76.png' alt='CDS View Entity Definition' class='question-image' /><br><br>when you attempt to activate the definition, what will be the response?",
    options: [
      { label: "A", value: "A", text: "Activation error because the field names of the union do not match" },
      { label: "B", value: "B", text: "Activation successful" },
      { label: "C", value: "C", text: "Activation error because the field types of the union do not match" },
      { label: "D", value: "D", text: "Activation error because the key fields of the union do not match" },
    ],
    correctAnswer: "D",
  },
  {
    id: 77,
    questionText:
      "Given the following Core Data Service View Entity Data Definition:<br><br><img src='/images/question77.png' alt='Core Data Service' class='question-image' /><br><br>@accesscontrol.authorizationcheck:#NOT_REQUIRED<br>DEFINE VIEW ENTITY DEMO_SALES_SD_I_VE<br>AS SELECT FROM DEMO_SALES_SO_I<br>ASSOCIATIONTO PARENT DEMO_SALES_CDS_SO_VE AS _SALESORDER<br>ON $PROJECTION.PARENT_KEY = SALESORDER.SO_KEY<br>COMPOSITION[ 0..* ] OR DEMO_SALES_CDS_I_SL_VE AS _SCHEDULELINE<br>ASSOCIATION [0…1] TO DEMO_SALES_CDS_MATERIAL_VE AS _MATERIAL<br>ON $PROJECTION.MATERIAL = _MATERIAL.MATERIAL<br>{<br>KEY SO_ITEM_KEY,<br>PARENT_KEY,<br>POSNR,<br>_SALESORDER,<br>_SCHEDULELINE,<br>_MATERIAL.MATERIAL AS MAT<br><br>}<br><br>Using ABAP SQL, which select statement selects the mat field on line #17?",
    options: [
      { label: "A", value: "A", text: "SELECT mat FROM demo_sales_so_i..." },
      { label: "B", value: "B", text: "SELECT mat FROM demo_sales_cds_material_ve..." },
      { label: "C", value: "C", text: "SELECT mat FROM demo_sales_cds_so_i_ve..." },
      { label: "D", value: "D", text: "SELECT mat FROM Material..." },
    ],
    correctAnswer: "C",
  },
  {
    id: 78,
    questionText: "Which of the following is a generic internal table type?",
    options: [
      { label: "A", value: "A", text: "SORTED TABLE" },
      { label: "B", value: "B", text: "HASHED TABLE" },
      { label: "C", value: "C", text: "INDEX TABLE" },
      { label: "D", value: "D", text: "STANDARD TABLE" },
    ],
    correctAnswer: "C",
  },
  {
    id: 79,
    questionText:
      "/DMO/I_Connection is a CDS view.<br>What variable type is connection full based on the following code? DATA connection full TYPE /DMD/I_Connection.",
    options: [
      { label: "A", value: "A", text: "Simple variable" },
      { label: "B", value: "B", text: "Internal table" },
      { label: "C", value: "C", text: "Structure" },
    ],
    correctAnswer: "C",
  },
  {
    id: 80,
    questionText:
      "In the following ABAP SQL code, what are valid case distinctions? Note: There are 2 correct answers to this question.",
    options: [
      {
        label: "A",
        value: "A",
        text: "SELECT FROM dbtab1 FIELDS F1,<br>CASE<br>WHEN F2 = '1' THEN 'Value 1<br>WHEN f2'2' THEN 'Value 2' ELSE \"Value for the rest' END AS f case<br>INTO TABLE @et t1.",
      },
      {
        label: "B",
        value: "B",
        text: "SELECT FROM dbtab1 FIELDS F1,<br>CASE<br>WHEN F2 = '1' THEN \"Value 1' WHEN f2 < f3 AND f2 = '2' THEN \"Value 2'<br>WHEN OTHERS 'Value for the rest' ENDCASE AS f_case<br>INTO TABLE @gt t1.",
      },
      {
        label: "C",
        value: "C",
        text: "SELECT FROM dbtab1 FIELDS f1,<br>CASE f2<br>WHEN '1' THEN 'Value 1'<br>WHEN '2' THEN 'Value 2'<br>ELSE \"Value for the rest' END AS f_case<br>INTO TABLE @gt_t1.",
      },
      {
        label: "D",
        value: "D",
        text: "SELECT FROM dbtab1 FIELDS F1,<br>CASE f2,<br>WHEN '1' THEN 'Value 1',<br>WHEN '2' THEN 'Value 2',<br>WHEN OTHERS \"Value for the rest\", ENDCASE AS f_case<br>INTO TABLE @gt t1.",
      },
    ],
    correctAnswer: "AC",
  },
]

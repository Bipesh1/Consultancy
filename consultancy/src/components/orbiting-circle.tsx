import { OrbitingCircles } from "@/components/magicui/orbiting-circles";

export default function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={50}>
        <Icons.nacci />
        <Icons.ieerin />
        <Icons.nepalalumni />
        <Icons.naaer />
        <Icons.nacci />
      </OrbitingCircles>
      <OrbitingCircles iconSize={40} radius={100} reverse speed={2}>
        <Icons.nacci />
        <Icons.ieerin />
        <Icons.nepalalumni />
        <Icons.naaer />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  naaer: () => (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="161.000000pt" height="161.000000pt" viewBox="0 0 161.000000 161.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.10, written by Peter Selinger 2001-2011
</metadata>
<g transform="translate(0.000000,161.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M60 806 l0 -796 745 0 745 0 0 793 0 792 -745 3 -745 4 0 -796z
m1449 740 c16 -19 8 -1486 -8 -1495 -15 -10 -1374 -6 -1389 3 -9 5 -12 190
-12 750 0 408 3 746 7 749 3 4 318 7 698 7 580 0 694 -2 704 -14z"/>
<path d="M162 1497 c-22 -23 -22 -26 -22 -429 0 -398 0 -406 21 -432 l21 -27
-21 -23 c-20 -21 -21 -32 -21 -243 l0 -222 26 -20 c35 -28 57 -26 90 4 l27 25
26 -24 c24 -22 33 -24 105 -22 76 2 80 4 108 37 22 25 31 30 35 20 3 -8 16
-25 28 -37 19 -19 33 -22 91 -22 63 0 70 3 96 30 15 17 28 35 28 42 0 6 9 -4
20 -22 27 -44 62 -59 102 -44 20 7 37 8 49 2 25 -14 175 -12 198 2 15 9 25 9
46 0 36 -17 59 -15 86 7 22 18 23 18 56 -1 37 -22 71 -19 99 9 14 15 16 30 9
112 -4 53 -6 112 -6 131 1 19 2 68 3 107 2 72 2 73 -37 113 -34 35 -36 40 -19
45 76 24 75 16 72 466 -3 374 -4 398 -22 418 -19 21 -21 21 -646 21 l-627 0
-21 -23z m1278 -429 l0 -418 -635 0 -635 0 0 418 0 417 635 0 635 0 0 -417z
m-1107 -454 c3 -4 -1 -13 -10 -22 -16 -16 -43 -8 -51 16 -4 12 49 17 61 6z
m157 1 c0 -5 -22 -42 -36 -64 -2 -2 -14 10 -28 25 -17 20 -21 31 -13 36 14 9
77 11 77 3z m253 -2 c4 -3 0 -17 -8 -30 -9 -13 -24 -63 -33 -110 -16 -84 -42
-125 -42 -67 0 56 -24 160 -42 180 -10 11 -15 24 -11 27 8 9 128 9 136 0z
m220 0 c4 -3 0 -15 -10 -25 -10 -12 -16 -37 -17 -74 0 -44 -3 -52 -12 -39 -6
8 -14 33 -18 54 -3 20 -15 46 -26 56 -11 10 -17 22 -14 26 6 10 88 12 97 2z
m252 -2 c3 -5 1 -13 -5 -16 -15 -9 -43 3 -35 15 8 13 32 13 40 1z m-916 -169
c17 -69 34 -128 37 -131 3 -3 4 55 3 128 l-1 134 31 1 31 1 0 -230 0 -230 -37
1 -37 1 -40 156 c-23 85 -43 158 -46 160 -3 3 -4 -67 -2 -156 l3 -162 -35 -1
-36 -1 0 227 c0 125 2 229 4 231 3 2 25 3 49 1 l44 -4 32 -126z m306 103 c18
-106 54 -338 60 -380 l6 -50 -35 0 c-33 0 -35 2 -41 40 -3 22 -12 80 -20 130
-8 50 -17 116 -21 148 -3 32 -8 56 -10 54 -2 -2 -9 -39 -14 -83 -6 -43 -13
-94 -16 -111 -6 -31 -5 -33 24 -33 25 0 30 -4 34 -30 4 -29 3 -30 -33 -30 -36
0 -38 -2 -44 -40 -6 -34 -11 -40 -31 -40 -34 0 -39 3 -37 20 6 45 64 417 67
425 2 6 27 10 55 10 49 0 51 -1 56 -30z m260 10 c8 -40 65 -413 65 -426 0 -9
-12 -14 -34 -14 -34 0 -35 1 -41 50 -4 28 -13 86 -20 130 -8 44 -17 106 -21
138 -3 32 -8 57 -9 55 -2 -2 -8 -41 -14 -88 -7 -47 -14 -97 -17 -113 -5 -25
-3 -27 24 -27 25 0 30 -4 34 -30 4 -29 3 -30 -33 -30 -36 0 -38 -2 -44 -40 -6
-37 -9 -40 -39 -40 l-33 0 34 218 c19 119 35 222 37 227 2 6 27 10 55 10 44 0
53 -3 56 -20z m303 -14 l3 -31 -65 0 -66 0 0 -65 0 -65 50 0 50 0 0 -36 0 -36
-50 7 -50 7 0 -72 0 -72 65 4 66 4 -3 -34 -3 -34 -98 -1 -97 -2 0 230 0 230
97 -2 98 -1 3 -31z m243 0 c28 -34 27 -148 -1 -179 l-20 -22 20 -20 c16 -16
20 -33 20 -92 0 -40 3 -82 6 -94 5 -19 2 -21 -33 -19 l-38 3 -3 78 c-3 85 -12
104 -48 104 -24 0 -24 -2 -24 -92 l0 -93 -35 0 -35 0 0 230 0 230 86 -5 c75
-4 88 -8 105 -29z m-231 -106 c0 -48 -4 -52 -34 -30 -11 8 -28 15 -38 15 -17
0 -20 4 -22 33 -1 7 16 15 39 18 22 3 43 7 48 8 4 0 7 -19 7 -44z m0 -170 l0
-46 -40 3 c-23 1 -45 7 -51 14 -13 15 0 47 17 40 7 -3 23 4 36 14 33 28 38 25
38 -25z"/>
<path d="M550 1385 c0 -33 -4 -45 -15 -45 -11 0 -15 11 -15 40 0 33 -3 40 -20
40 -18 0 -20 -5 -16 -47 6 -57 27 -74 70 -57 12 5 16 20 16 60 0 30 -4 54 -10
54 -5 0 -10 -20 -10 -45z"/>
<path d="M611 1414 c-39 -28 -19 -104 28 -104 18 0 41 18 41 33 0 5 -13 6 -30
2 -27 -6 -30 -4 -30 19 0 26 21 48 28 28 6 -18 34 -14 30 4 -5 25 -42 35 -67
18z"/>
<path d="M942 1414 c-41 -28 -21 -104 28 -104 49 0 69 76 28 104 -12 9 -25 16
-28 16 -3 0 -16 -7 -28 -16z m43 -44 c0 -13 -6 -25 -12 -27 -16 -6 -27 21 -19
43 9 23 31 11 31 -16z"/>
<path d="M1104 1415 c-4 -8 -4 -22 0 -30 9 -25 -10 -17 -22 10 -6 14 -18 25
-27 25 -12 0 -15 -12 -15 -55 0 -30 5 -55 10 -55 6 0 10 17 10 38 l1 37 20
-37 c30 -59 49 -50 49 22 0 57 -13 79 -26 45z"/>
<path d="M1310 1398 l-1 -33 -17 28 c-9 15 -25 27 -34 27 -15 0 -18 -9 -18
-55 0 -41 4 -55 14 -55 9 0 16 12 18 33 l3 32 18 -32 c10 -18 24 -33 33 -33
12 0 14 11 12 57 -3 62 -28 90 -28 31z"/>
<path d="M280 1365 l0 -55 40 0 c29 0 40 4 40 15 0 9 -9 15 -25 15 -14 0 -25
5 -25 10 0 6 9 10 20 10 11 0 20 5 20 10 0 6 -9 10 -20 10 -11 0 -20 5 -20 10
0 6 11 10 25 10 14 0 25 5 25 10 0 6 -18 10 -40 10 l-40 0 0 -55z"/>
<path d="M370 1365 c0 -53 1 -55 28 -55 36 0 72 26 72 51 0 41 -19 59 -60 59
l-40 0 0 -55z m65 15 c7 -21 0 -40 -14 -40 -10 0 -21 47 -13 55 11 10 21 5 27
-15z"/>
<path d="M702 1369 c-13 -56 -8 -75 12 -46 16 21 36 22 36 2 0 -9 9 -15 21
-15 13 0 19 5 15 13 -2 6 -10 31 -17 55 -9 33 -16 42 -33 42 -19 0 -25 -9 -34
-51z"/>
<path d="M780 1411 c0 -5 7 -11 15 -15 10 -3 15 -19 15 -46 0 -29 4 -40 15
-40 11 0 15 12 15 45 0 25 5 45 10 45 6 0 10 5 10 10 0 6 -18 10 -40 10 -22 0
-40 -4 -40 -9z"/>
<path d="M870 1365 c0 -42 3 -55 15 -55 12 0 15 13 15 55 0 42 -3 55 -15 55
-12 0 -15 -13 -15 -55z"/>
<path d="M1190 1365 c0 -42 3 -55 15 -55 12 0 15 13 15 55 0 42 -3 55 -15 55
-12 0 -15 -13 -15 -55z"/>
<path d="M401 1229 c-7 -23 -15 -47 -18 -55 -7 -20 17 -17 33 4 13 16 15 16
28 0 23 -30 39 -22 31 15 -13 57 -24 77 -43 77 -13 0 -22 -12 -31 -41z"/>
<path d="M490 1234 c0 -47 16 -74 43 -74 34 0 47 19 47 67 0 30 -4 43 -14 43
-11 0 -13 -10 -9 -41 5 -36 4 -41 -13 -37 -15 3 -18 10 -16 41 3 32 1 37 -17
37 -17 0 -21 -6 -21 -36z"/>
<path d="M607 1264 c-16 -16 -6 -45 18 -54 31 -12 32 -22 3 -18 -28 4 -38 -11
-17 -25 21 -13 65 -2 73 19 8 21 -11 44 -35 44 -11 0 -19 5 -19 10 0 6 11 8
26 4 20 -5 25 -3 22 7 -5 15 -59 25 -71 13z"/>
<path d="M690 1261 c0 -5 6 -11 14 -14 10 -4 13 -17 9 -46 -5 -37 -4 -41 16
-41 20 0 22 4 20 42 -2 26 1 43 9 46 26 8 10 22 -28 22 -22 0 -40 -4 -40 -9z"/>
<path d="M780 1215 c0 -41 4 -55 14 -55 8 0 16 12 18 28 l4 27 12 -27 c15 -37
47 -39 38 -2 -4 15 -2 32 5 40 18 22 -7 44 -52 44 l-39 0 0 -55z"/>
<path d="M899 1215 c-13 -42 -13 -55 -4 -55 7 0 15 7 19 15 3 8 12 15 21 15 8
0 15 -7 15 -15 0 -8 7 -15 16 -15 12 0 15 6 10 26 -4 15 -10 39 -13 55 -4 21
-11 29 -27 29 -17 0 -24 -11 -37 -55z"/>
<path d="M1000 1215 l0 -55 35 0 c24 0 35 5 35 15 0 8 -9 15 -20 15 -17 0 -20
7 -20 40 0 29 -4 40 -15 40 -12 0 -15 -13 -15 -55z"/>
<path d="M1084 1239 c3 -17 6 -42 6 -55 0 -15 6 -24 15 -24 12 0 15 13 15 55
0 49 -2 55 -21 55 -19 0 -21 -4 -15 -31z"/>
<path d="M1150 1229 c-6 -22 -14 -47 -17 -55 -7 -20 17 -18 33 4 13 16 15 16
25 0 10 -18 39 -25 39 -10 0 5 -7 29 -16 55 -21 62 -49 65 -64 6z"/>
<path d="M1349 1066 c-76 -71 -131 -96 -216 -96 -62 0 -78 5 -198 62 -197 94
-253 91 -375 -17 -54 -48 -99 -62 -143 -46 -29 11 -37 41 -11 41 26 0 82 30
88 47 10 24 -2 28 -23 9 -14 -13 -39 -18 -87 -20 l-66 -1 -49 -53 c-54 -58
-64 -90 -26 -76 12 4 45 8 72 8 41 0 59 -6 105 -36 30 -21 72 -44 92 -53 38
-15 38 -15 38 9 0 25 16 36 56 36 30 0 56 13 107 54 46 37 99 38 197 6 36 -12
104 -24 152 -27 81 -5 90 -4 152 25 64 30 148 99 188 154 30 43 9 33 -53 -26z
m-418 -73 c37 -20 67 -38 66 -40 -2 -1 -37 7 -78 18 -117 33 -154 30 -236 -19
-38 -23 -78 -42 -89 -42 -11 0 -29 -7 -40 -15 -25 -19 -54 -19 -82 1 -28 20
-28 34 1 34 25 0 103 46 126 74 21 25 70 49 116 56 49 7 118 -14 216 -67z
m-573 -14 c2 -13 -3 -15 -22 -12 -16 3 -23 10 -19 20 7 18 37 13 41 -8z"/>
<path d="M1220 922 c-57 -33 -177 -41 -260 -17 -107 31 -176 40 -205 27 -34
-16 -41 -37 -23 -75 13 -26 41 -45 157 -104 77 -39 141 -68 141 -64 0 11 -80
85 -132 121 -26 18 -49 39 -52 46 -8 21 28 26 93 13 124 -24 264 3 318 63 20
22 18 22 -37 -10z m-395 -24 c10 -10 -6 -58 -20 -58 -6 0 -20 9 -31 21 -18 20
-18 21 -1 34 18 13 41 14 52 3z"/>
<path d="M577 853 c-16 -15 -4 -31 32 -41 48 -15 125 -16 116 -2 -3 6 -18 10
-33 10 -15 0 -40 9 -57 20 -31 21 -47 24 -58 13z"/>
<path d="M1290 440 c0 -66 1 -70 23 -70 34 0 47 19 47 70 0 51 -13 70 -47 70
-22 0 -23 -4 -23 -70z"/>
</g>
</svg>

  ),
  ieerin: () => (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="193.000000pt" height="182.000000pt" viewBox="0 0 193.000000 182.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.10, written by Peter Selinger 2001-2011
</metadata>
<g transform="translate(0.000000,182.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M1140 1253 c-26 -10 -57 -47 -70 -85 -11 -30 -11 -45 -1 -79 21 -71
62 -97 139 -89 43 5 59 12 83 38 16 18 27 32 23 32 -3 0 1 11 10 25 20 31 13
110 -11 119 -12 5 -13 0 -8 -27 9 -42 9 -38 1 -70 -13 -44 -60 -77 -112 -77
-32 0 -44 4 -44 15 0 8 -7 15 -15 15 -10 0 -15 10 -15 31 0 16 -4 28 -9 24 -5
-3 -12 -1 -16 5 -3 5 1 10 9 10 9 0 16 6 16 13 0 32 44 56 110 59 l65 3 -22
23 c-18 17 -34 22 -70 21 -27 0 -55 -3 -63 -6z"/>
<path d="M178 1087 l-28 -11 0 -253 0 -253 50 0 50 0 0 251 c0 228 -2 253 -17
265 -21 15 -19 15 -55 1z m42 -101 c0 -30 -4 -57 -8 -60 -5 -3 -5 -38 0 -77
11 -90 6 -229 -7 -229 -15 -1 -23 85 -24 247 -1 149 2 173 25 173 10 0 14 -15
14 -54z"/>
<path d="M413 1080 c-27 -12 -52 -34 -70 -61 -28 -42 -28 -45 -28 -193 0 -132
2 -155 19 -183 41 -67 109 -90 227 -77 46 5 71 14 102 38 60 46 66 60 37 91
-27 29 -42 31 -60 9 -19 -22 -89 -54 -121 -54 -36 0 -85 29 -99 59 -6 13 -9
26 -6 28 3 3 1 16 -4 29 -7 17 -6 24 3 24 6 1 78 1 160 0 l147 -1 0 95 c0 63
-4 99 -13 108 -7 7 -20 26 -30 41 -40 62 -176 86 -264 47z m49 -57 c-15 -12
-35 -22 -45 -23 -10 0 -15 -4 -12 -10 3 -5 -2 -19 -13 -30 -10 -11 -18 -30
-16 -43 1 -12 3 -27 3 -34 1 -6 10 -15 21 -18 26 -8 25 -30 0 -55 -13 -13 -22
-37 -24 -63 -2 -36 1 -45 23 -59 14 -10 20 -18 14 -18 -7 0 -13 -5 -13 -10 0
-6 6 -10 13 -9 28 3 48 -2 42 -11 -4 -6 -11 -8 -16 -5 -5 3 -6 -1 -3 -9 7 -18
24 -22 24 -6 0 6 9 10 20 10 11 0 20 -4 20 -10 0 -5 20 -10 45 -10 33 0 45 4
45 15 0 8 3 14 8 14 4 -1 16 -1 27 0 15 1 16 4 7 10 -10 6 -10 10 3 21 13 11
15 9 15 -8 0 -16 5 -20 18 -15 38 13 -24 -24 -68 -40 -34 -12 -55 -14 -85 -7
-25 6 -42 5 -45 -1 -12 -19 -84 33 -104 74 -16 34 -18 56 -14 180 5 127 7 142
26 158 12 9 18 20 14 24 -4 4 10 5 31 1 29 -5 37 -4 32 4 -4 7 -1 16 6 21 27
16 28 -16 1 -38z m136 19 c12 -8 22 -12 22 -8 0 9 41 -27 51 -46 7 -14 6 -18
-6 -18 -8 0 -16 8 -16 18 -1 15 -2 16 -6 0 -6 -24 -33 -11 -33 17 0 16 -6 22
-22 22 -35 0 -88 15 -88 24 0 14 73 7 98 -9z m-9 -61 c21 -21 46 -89 37 -99
-9 -9 -216 -9 -222 0 -6 10 23 78 43 100 23 26 116 25 142 -1z m81 -37 c0 -8
4 -14 8 -14 11 0 15 -90 5 -91 -4 0 -18 -2 -30 -5 -28 -5 -29 6 -4 54 16 31
17 39 5 50 -19 17 -18 33 1 26 8 -4 15 -12 15 -20z"/>
<path d="M1398 1078 c-21 -11 -52 -38 -70 -61 l-33 -41 0 -201 0 -200 43 -3
42 -3 0 185 c0 117 4 186 10 186 6 0 10 6 10 14 0 26 42 46 97 46 53 0 59 -3
101 -54 8 -11 12 -65 12 -191 0 -174 0 -176 23 -184 28 -11 77 -3 78 13 3 48
0 346 -3 353 -3 4 -8 19 -12 33 -8 36 -54 84 -103 109 -54 27 -142 27 -195 -1z
m122 -19 c0 -7 10 -9 25 -5 14 4 25 2 25 -4 0 -5 7 -10 16 -10 22 0 43 -24 40
-46 -2 -11 -1 -13 1 -6 8 23 25 12 19 -12 -4 -17 -1 -25 12 -28 15 -4 17 -22
20 -164 2 -153 -5 -204 -24 -173 -4 8 -10 86 -12 174 -3 125 -7 162 -18 168
-8 4 -14 17 -14 27 0 11 -6 20 -13 20 -7 0 -22 8 -33 18 -24 23 -52 34 -56 22
-2 -6 -15 -6 -33 -1 -29 8 -28 10 15 24 24 9 30 8 30 -4z m-88 -24 c-1 -5 -9
-10 -18 -10 -10 0 -23 -17 -33 -40 -9 -22 -20 -47 -26 -55 -6 -8 -10 -79 -10
-157 0 -87 -4 -144 -10 -145 -6 -2 -10 57 -10 162 0 103 4 165 10 165 16 0 35
15 35 28 0 7 -4 6 -10 -3 -5 -8 -12 -11 -16 -7 -4 4 1 17 12 29 10 12 24 28
29 35 11 15 51 13 47 -2z"/>
<path d="M875 1064 c-44 -22 -76 -61 -86 -102 -10 -42 -12 -352 -3 -376 7 -19
79 -22 90 -4 4 6 6 89 5 185 l-2 173 27 25 c22 20 37 25 80 25 l54 0 0 45 0
45 -67 0 c-42 0 -80 -6 -98 -16z m45 -46 c0 -5 -10 -8 -22 -8 -13 0 -30 -5
-38 -11 -12 -8 -10 -9 7 -4 18 5 22 3 17 -9 -8 -20 -54 -21 -54 -1 0 8 16 22
35 31 19 9 35 21 35 28 0 12 20 -14 20 -26z m-53 -78 c4 -13 3 -13 -6 0 -6 8
-11 13 -12 10 -2 -5 -9 -234 -9 -285 0 -16 -5 -37 -10 -45 -7 -10 -10 35 -10
140 0 85 -3 165 -7 178 -5 21 -3 23 22 20 16 -2 30 -10 32 -18z"/>
<path d="M1098 768 c3 -201 5 -208 49 -208 48 0 53 18 53 212 l0 180 -25 -4
c-14 -3 -28 -1 -31 3 -3 5 -15 9 -27 9 -22 0 -22 0 -19 -192z m64 -8 c1 -88
-2 -142 -10 -155 -9 -16 -11 15 -12 145 0 106 3 161 10 154 5 -5 10 -70 12
-144z"/>
</g>
</svg>

  ),
  nepalalumni: () => (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="170.000000pt" height="168.000000pt" viewBox="0 0 170.000000 168.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.10, written by Peter Selinger 2001-2011
</metadata>
<g transform="translate(0.000000,168.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M725 1644 c-48 -8 -166 -44 -215 -66 -259 -117 -442 -372 -468 -653
-24 -259 57 -477 243 -661 79 -78 106 -98 196 -141 140 -69 223 -88 374 -87
98 1 136 6 208 28 238 71 407 216 512 439 58 121 70 183 69 347 0 137 -2 150
-33 240 -46 137 -99 220 -205 325 -154 152 -322 224 -536 230 -63 2 -128 1
-145 -1z m255 -28 c155 -28 286 -95 402 -204 312 -295 331 -781 43 -1100 -167
-184 -424 -282 -664 -253 -116 14 -178 34 -286 89 -71 37 -109 65 -181 137
-102 101 -157 189 -201 320 -24 72 -27 95 -27 230 -1 130 2 160 22 225 124
392 500 627 892 556z"/>
<path d="M592 1571 c-8 -4 -12 -17 -10 -27 2 -14 -3 -19 -19 -18 -12 0 -20 -2
-18 -6 2 -4 -17 -17 -43 -29 -83 -40 -169 -114 -112 -96 15 5 18 3 14 -9 -5
-12 -2 -15 10 -10 9 3 16 1 16 -5 0 -6 -10 -11 -22 -11 -20 -1 -21 -2 -6 -10
24 -15 51 -1 45 22 -5 18 -4 19 12 4 31 -28 33 -17 5 20 -22 29 -25 37 -14 44
10 6 21 2 33 -11 20 -21 33 -24 42 -9 9 14 57 -11 51 -27 -7 -17 4 -16 28 2
11 8 14 15 7 15 -6 0 -11 6 -9 14 3 16 -4 19 -27 9 -23 -8 -30 4 -14 23 8 10
13 25 11 36 -6 33 26 19 38 -17 6 -19 16 -35 21 -35 12 0 12 5 -5 45 -14 33
-14 34 16 44 39 14 58 14 58 1 0 -5 -11 -10 -25 -10 -15 0 -25 -6 -25 -14 0
-17 28 -41 37 -32 3 3 2 6 -4 6 -6 0 -13 7 -17 15 -8 22 37 15 46 -7 12 -29
29 -22 18 8 -16 41 -12 54 15 54 20 0 24 -5 22 -22 -1 -15 4 -23 18 -26 11 -2
25 -12 32 -21 10 -13 11 -8 6 32 -5 39 -3 47 11 47 12 0 16 -10 16 -39 0 -22
5 -43 10 -46 6 -4 10 12 10 39 0 35 4 46 16 46 8 0 12 5 9 11 -8 12 -156 3
-209 -12 -19 -6 -34 -5 -43 3 -7 6 -16 8 -20 4 -3 -3 -1 -6 6 -6 7 0 9 -4 6
-10 -3 -5 -13 -10 -21 -10 -11 0 -13 6 -9 20 7 22 6 23 -13 11z m215 -45 c-4
-9 -13 -16 -21 -16 -11 0 -12 5 -3 24 13 27 34 19 24 -8z m-257 -43 c-1 -13
-38 -53 -49 -53 -20 0 -11 37 12 48 27 13 37 14 37 5z"/>
<path d="M980 1549 c0 -6 7 -9 15 -5 8 3 15 2 15 -3 0 -5 -9 -11 -20 -14 -12
-3 -20 -14 -20 -25 0 -21 26 -37 35 -22 11 18 23 10 18 -10 -3 -11 -1 -20 4
-20 6 0 14 18 19 39 l9 39 53 -20 c29 -11 52 -26 52 -34 0 -8 -4 -14 -10 -14
-5 0 -10 -9 -10 -19 0 -15 5 -18 21 -14 19 5 20 3 14 -18 -5 -13 -8 -30 -8
-36 0 -18 -7 -16 -23 5 -7 9 -14 12 -14 5 0 -17 30 -45 44 -40 6 2 11 12 11
23 0 21 24 84 33 84 11 0 72 -42 72 -51 0 -14 -16 -11 -30 6 -14 16 -30 11
-30 -10 0 -8 7 -11 20 -8 21 5 28 -11 10 -22 -5 -3 -10 -14 -10 -23 0 -12 8
-8 28 15 17 21 31 30 40 25 9 -6 6 -14 -13 -32 -14 -13 -25 -30 -25 -39 0 -10
11 -4 33 17 32 31 34 32 49 15 27 -32 33 -49 10 -29 -20 17 -22 17 -28 2 -3
-9 -1 -23 6 -31 7 -9 10 -18 6 -22 -3 -4 -12 2 -20 12 -9 13 -15 15 -20 6 -4
-6 -3 -18 3 -25 6 -7 8 -16 4 -19 -3 -4 -1 -7 5 -7 7 0 12 5 12 10 0 6 7 10
15 10 18 0 20 36 3 43 -7 2 -10 7 -7 11 3 3 19 0 35 -9 39 -20 47 -19 34 4 -8
16 -6 22 7 30 10 6 13 11 6 11 -6 0 -15 -5 -18 -10 -4 -6 -38 19 -78 55 -79
72 -193 136 -283 160 -70 18 -74 18 -74 4z m39 -40 c-29 -23 -39 -24 -39 -4 0
9 6 12 15 9 8 -4 17 1 21 10 3 9 11 13 16 10 6 -4 1 -14 -13 -25z"/>
<path d="M1070 1477 c0 -21 11 -47 20 -47 4 0 6 12 4 28 -2 15 -1 19 2 10 6
-20 13 -22 34 -8 19 11 11 18 -28 26 -25 5 -32 3 -32 -9z"/>
<path d="M716 1379 c-85 -20 -189 -80 -257 -148 -110 -110 -163 -240 -162
-396 2 -233 142 -433 359 -511 44 -16 64 -20 72 -12 8 8 -6 17 -51 32 -78 26
-148 71 -210 134 -47 48 -69 102 -42 102 8 0 11 8 8 20 -4 15 0 20 13 20 11 0
26 5 34 10 13 9 13 11 0 20 -8 5 -26 10 -38 10 -15 0 -26 7 -29 20 -5 19 -19
25 -55 22 -10 -1 -18 4 -18 12 0 7 -3 28 -6 45 -6 29 -5 31 22 31 33 0 44 -7
60 -35 7 -12 20 -19 33 -18 12 2 21 -2 21 -8 0 -8 5 -7 15 1 23 19 18 40 -20
93 -28 38 -41 47 -65 47 -17 0 -30 4 -30 9 0 5 -8 8 -17 7 -10 0 -19 7 -21 17
-3 14 4 17 40 18 43 1 48 1 80 -8 11 -3 29 6 47 26 29 30 30 31 40 12 14 -25
14 -31 0 -31 -13 0 -48 -40 -49 -56 0 -20 58 -66 96 -74 52 -12 74 -4 74 27 0
17 4 23 14 20 20 -8 56 21 56 44 0 11 7 19 18 19 16 0 62 56 75 93 16 43 78
-4 112 -86 19 -45 52 -74 67 -59 15 15 53 15 79 2 24 -13 26 4 4 27 -14 14
-14 17 0 32 8 10 15 26 15 35 0 14 5 17 24 12 20 -5 25 -2 28 15 2 14 16 27
41 36 36 15 39 15 63 -8 16 -15 24 -32 22 -49 -3 -23 -7 -25 -59 -27 -30 -1
-67 -7 -82 -12 l-28 -11 23 -30 c24 -33 43 -38 52 -15 3 8 12 15 20 15 9 0 13
-6 11 -13 -3 -6 5 -17 17 -22 12 -6 23 -16 26 -22 4 -15 -25 -18 -30 -4 -3 11
-88 2 -88 -9 0 -14 65 -82 93 -96 17 -10 40 -13 58 -9 24 5 29 12 29 36 0 16
-6 38 -12 49 -10 15 -10 22 0 32 10 10 16 8 30 -6 12 -14 14 -20 5 -23 -17 -6
-16 -23 2 -43 13 -15 13 -22 1 -57 -44 -124 -130 -232 -237 -295 -75 -45 -60
-64 16 -21 112 62 216 200 250 328 19 76 19 214 0 290 -49 186 -204 339 -395
390 -61 16 -203 18 -264 4z m235 -23 c133 -29 261 -118 336 -234 46 -71 97
-217 60 -172 -7 8 -19 15 -27 15 -8 0 -19 15 -24 33 -12 43 -180 202 -212 202
-15 0 -25 8 -30 23 -9 29 -22 37 -55 30 -20 -4 -37 2 -63 22 -20 15 -57 32
-83 36 -38 8 -51 6 -79 -11 -18 -12 -34 -30 -36 -42 -2 -15 -11 -22 -31 -24
-36 -4 -89 -37 -154 -95 -29 -25 -64 -50 -79 -53 -14 -4 -33 -14 -41 -21 -16
-17 -61 -30 -70 -22 -11 11 57 113 113 169 93 94 236 155 364 157 25 0 75 -6
111 -13z m-63 -140 c8 -5 32 -11 55 -14 23 -2 44 -7 47 -11 3 -5 14 -8 25 -8
11 0 34 0 50 -1 l30 -2 -25 -20 c-17 -13 -34 -18 -51 -14 -19 3 -28 0 -33 -11
-3 -9 -10 -13 -16 -10 -6 4 -10 -5 -10 -19 0 -33 -13 -33 -30 -1 -7 13 -25 27
-41 30 -32 7 -41 24 -32 65 5 28 4 30 -25 30 -34 0 -52 16 -25 22 16 4 47 -10
81 -36z m-64 -15 c-10 -10 -48 -7 -56 4 -15 20 -7 23 27 12 19 -6 32 -13 29
-16z m-64 -16 c7 -8 20 -15 29 -15 10 0 28 -12 42 -26 27 -30 103 -84 117 -84
5 0 21 11 36 25 15 14 37 25 50 25 12 0 31 7 42 15 10 8 25 15 31 15 14 0 93
-68 93 -80 0 -5 -25 -24 -55 -44 -30 -20 -68 -57 -85 -81 -39 -57 -69 -60 -93
-10 -9 19 -33 52 -53 75 -45 50 -75 52 -112 8 -39 -46 -163 -168 -181 -178
-20 -10 -81 14 -81 32 1 7 7 24 15 38 19 34 18 42 -5 68 -20 22 -21 22 -56 3
-25 -13 -49 -18 -86 -15 -28 2 -53 6 -56 8 -9 9 8 36 25 42 58 17 168 79 214
120 78 69 142 92 169 59z m592 -289 c13 -31 5 -55 -19 -54 -10 0 -25 -2 -33
-6 -10 -4 -24 2 -38 17 l-23 24 33 22 c43 27 66 26 80 -3z m-73 -128 c16 -43
-15 -52 -51 -16 l-22 22 24 7 c39 11 40 10 49 -13z"/>
<path d="M234 1249 c-46 -69 -103 -197 -104 -231 0 -32 18 -19 24 17 4 19 12
35 17 35 7 0 8 -12 4 -30 -6 -26 -4 -30 14 -30 19 0 20 2 9 20 -16 24 -6 35
21 21 11 -6 22 -7 25 -3 3 5 -13 14 -35 21 -30 9 -39 16 -35 27 3 9 6 17 6 18
0 1 14 1 30 -2 19 -3 30 0 30 8 0 7 8 9 20 5 11 -3 20 -2 20 4 0 5 -16 15 -35
21 -19 6 -35 18 -35 25 0 23 15 25 46 4 31 -20 44 -24 44 -11 0 5 -16 16 -35
25 -30 14 -34 20 -26 35 22 37 50 66 57 59 4 -4 -3 -18 -15 -31 l-23 -24 21
-12 c15 -7 27 -8 39 -1 14 9 13 10 -10 11 -16 0 -28 5 -28 11 0 6 7 9 15 5 9
-3 15 0 15 10 0 12 3 12 25 -2 14 -9 25 -13 25 -9 0 6 -69 75 -76 75 -1 0 -24
-32 -50 -71z m-6 -116 c2 -8 -5 -13 -17 -13 -12 0 -21 6 -21 16 0 18 31 15 38
-3z"/>
<path d="M1465 1199 c6 -18 4 -20 -14 -14 -17 5 -23 1 -31 -20 -14 -37 -12
-45 5 -15 13 23 14 24 21 6 5 -13 1 -23 -11 -32 -32 -24 -8 -27 29 -5 22 14
37 18 41 11 11 -18 -5 -50 -26 -50 -16 0 -19 -6 -16 -35 2 -39 4 -40 43 -25
20 8 29 8 34 -1 5 -7 10 -8 14 -1 6 11 -29 113 -58 171 -19 35 -41 43 -31 10z
m65 -139 c0 -24 -45 -28 -54 -5 -3 9 0 15 8 15 8 0 17 -6 19 -12 3 -8 6 -6 6
5 1 24 21 22 21 -3z"/>
<path d="M160 931 c0 -16 -7 -21 -27 -21 -26 -1 -27 -2 -10 -15 13 -9 17 -20
12 -34 -7 -23 4 -28 23 -9 9 9 15 9 24 0 18 -18 30 -14 19 7 -8 15 -6 22 12
34 l22 16 -27 0 c-18 1 -28 6 -28 15 0 8 -4 18 -10 21 -5 3 -10 -3 -10 -14z"/>
<path d="M1515 933 c-5 -16 -15 -23 -34 -24 l-26 0 22 -16 c18 -12 20 -19 12
-34 -11 -21 1 -25 19 -7 9 9 15 9 24 0 19 -19 30 -14 23 9 -5 14 -1 25 12 34
17 13 16 14 -9 15 -19 0 -28 6 -31 23 l-4 22 -8 -22z"/>
<path d="M793 874 c4 -21 0 -39 -13 -59 -22 -33 -18 -45 14 -45 41 0 50 -88
14 -128 -38 -40 -31 -111 20 -216 24 -48 40 -91 37 -96 -3 -6 -21 -10 -38 -10
-18 -1 -45 -7 -62 -14 -43 -20 -16 -28 81 -24 l79 3 -3 27 -3 27 53 -24 c54
-25 107 -31 143 -15 20 9 20 9 0 10 -11 0 -39 9 -63 20 -51 23 -72 64 -72 138
0 57 -14 101 -47 155 -36 58 -73 169 -73 221 0 43 -13 62 -23 34 -3 -9 -11 -7
-27 7 l-23 20 6 -31z m114 -282 c21 -38 34 -78 38 -117 3 -33 8 -72 11 -86 4
-22 1 -27 -20 -31 -26 -5 -48 3 -47 18 0 5 -14 38 -31 74 -41 87 -47 137 -18
173 12 15 24 27 28 27 4 0 21 -26 39 -58z"/>
<path d="M1016 824 c-3 -9 4 -25 19 -40 14 -14 23 -30 19 -35 -3 -6 3 -13 14
-16 11 -3 18 -11 16 -18 -6 -16 18 -26 37 -15 7 5 18 5 25 -1 8 -7 14 -6 19 1
7 11 -11 45 -41 75 -14 14 -15 21 -6 36 7 10 8 20 2 24 -5 3 -11 1 -15 -5 -8
-13 -45 -13 -45 0 0 16 -37 11 -44 -6z"/>
<path d="M90 779 c0 -5 7 -9 15 -9 17 0 20 -25 5 -35 -13 -8 -13 -52 0 -60 5
-3 7 -12 4 -19 -3 -8 -1 -17 5 -21 6 -3 11 -17 11 -31 0 -13 5 -24 10 -24 6 0
10 -11 10 -25 0 -14 4 -25 9 -25 5 0 8 8 7 18 -1 23 28 22 32 -1 2 -12 -3 -20
-16 -23 -18 -5 -18 -7 -3 -40 8 -19 19 -34 23 -34 4 0 8 -6 8 -14 0 -30 25
-36 58 -13 32 22 41 37 22 37 -5 0 -10 -5 -10 -11 0 -5 -4 -8 -10 -4 -5 3 -7
12 -3 20 7 19 -11 19 -27 0 -7 -8 -17 -15 -23 -15 -5 0 -2 9 8 20 17 18 16 21
-5 65 -12 25 -25 45 -30 45 -4 0 -6 9 -3 21 4 15 0 22 -16 26 -11 3 -21 13
-21 22 0 14 2 14 10 1 5 -8 12 -11 16 -7 4 3 1 13 -6 22 -7 9 -10 18 -7 22 8
7 -11 33 -24 33 -5 0 -9 -6 -9 -14 0 -8 -4 -18 -10 -21 -5 -3 -10 3 -10 14 0
14 13 27 38 40 25 13 32 21 22 24 -68 23 -80 25 -80 16z"/>
<path d="M1535 749 c-4 -6 -4 -13 -1 -16 3 -4 6 -1 6 5 0 7 9 12 20 12 11 0
20 -4 20 -10 0 -5 -5 -10 -11 -10 -5 0 -7 -5 -4 -10 9 -15 25 -2 25 21 0 14
-7 19 -24 19 -14 0 -28 -5 -31 -11z"/>
<path d="M1490 682 c0 -9 81 -24 89 -16 8 7 -3 12 -46 19 -26 4 -43 3 -43 -3z"/>
<path d="M1511 639 c-20 -55 -23 -72 -12 -65 6 4 18 3 27 -2 24 -13 -1 -26
-25 -12 -24 12 -31 13 -31 1 0 -5 12 -12 28 -16 25 -7 25 -8 7 -15 -28 -12
-43 -12 -25 0 9 6 10 10 3 10 -18 0 -27 -20 -15 -32 8 -8 16 -7 28 3 16 12 17
12 11 -3 -3 -10 -2 -18 3 -18 6 0 10 7 10 15 0 9 8 27 17 41 16 26 13 35 -19
46 -4 2 -5 13 -2 26 7 24 28 29 40 10 5 -8 2 -9 -10 -5 -12 5 -16 3 -14 -5 7
-21 33 -14 36 10 2 12 -1 22 -6 22 -6 0 -17 3 -26 6 -11 4 -19 -2 -25 -17z"/>
<path d="M1450 491 c0 -5 9 -11 21 -14 12 -3 18 -10 14 -16 -4 -8 -12 -8 -26
0 -12 6 -23 8 -27 5 -8 -8 -1 -13 29 -21 33 -8 50 22 23 42 -21 15 -34 17 -34
4z"/>
<path d="M1390 445 c0 -10 40 -75 46 -75 9 0 -8 45 -20 52 -16 11 -2 10 28 -2
14 -5 26 -6 26 -1 0 5 -11 12 -24 15 -13 3 -31 9 -40 12 -9 3 -16 3 -16 -1z"/>
<path d="M260 405 c-25 -30 10 -61 38 -33 9 9 12 9 12 0 0 -6 -8 -15 -17 -21
-10 -5 -15 -13 -10 -17 4 -4 16 1 27 11 18 17 20 17 20 1 0 -9 -7 -19 -15 -22
-8 -4 -12 -10 -9 -16 7 -11 44 19 44 36 0 11 -62 76 -72 76 -3 0 -11 -7 -18
-15z"/>
<path d="M1338 351 l-26 -29 22 -21 c12 -12 25 -18 29 -14 4 3 -2 13 -13 20
-11 8 -18 19 -14 24 4 6 13 4 24 -6 17 -15 20 -15 38 1 21 17 21 17 -3 36 -13
10 -25 18 -27 18 -1 0 -15 -13 -30 -29z"/>
<path d="M355 290 c-9 -29 10 -48 33 -34 24 16 22 48 -5 52 -15 2 -23 -3 -28
-18z"/>
<path d="M1268 289 c-26 -19 -27 -21 -12 -45 9 -13 20 -21 26 -18 5 3 1 12 -9
19 -24 18 -10 30 16 13 17 -11 23 -10 37 4 14 14 15 20 4 32 -16 21 -29 20
-62 -5z"/>
<path d="M435 292 c-18 -13 -46 -62 -35 -62 6 0 13 7 16 15 4 8 12 15 20 15 8
0 13 6 12 13 -2 6 3 11 10 10 6 -2 12 2 12 7 0 12 -20 13 -35 2z"/>
<path d="M1205 280 c-7 -11 34 -84 42 -76 2 2 -3 18 -12 35 -9 18 -13 36 -10
41 3 6 2 10 -4 10 -5 0 -13 -5 -16 -10z"/>
<path d="M463 234 c-12 -18 -18 -36 -13 -39 5 -3 11 4 15 15 10 30 25 24 25
-11 0 -16 4 -28 9 -24 10 5 3 75 -8 87 -3 3 -16 -9 -28 -28z"/>
<path d="M519 233 c-2 -19 -2 -63 0 -75 1 -5 9 -8 19 -8 14 0 14 2 3 9 -16 10
-8 41 11 41 9 0 8 -3 -2 -10 -13 -8 -12 -10 3 -10 20 0 20 -1 7 -34 -6 -16 -6
-27 0 -31 6 -4 10 0 10 8 0 17 42 17 53 0 13 -20 34 -15 40 9 7 27 1 38 -21
37 -11 0 -12 -3 -4 -6 15 -6 16 -30 0 -39 -8 -5 -9 -2 -5 9 3 10 3 17 -2 17
-5 0 -11 9 -14 20 -3 12 -14 20 -25 20 -12 0 -24 5 -28 11 -3 6 -15 9 -25 6
-21 -6 -25 3 -8 20 8 8 8 13 0 17 -6 4 -12 -1 -12 -11z"/>
<path d="M1150 241 c0 -5 6 -12 13 -14 6 -3 -3 -10 -20 -17 -37 -13 -38 -15
-19 -49 8 -14 16 -19 20 -13 3 6 2 13 -4 17 -13 8 -13 35 -1 35 5 0 13 -9 16
-20 3 -11 11 -20 16 -20 6 0 5 8 -1 21 -7 11 -9 23 -7 26 3 2 11 -5 17 -17 19
-36 22 -15 4 24 -17 34 -34 48 -34 27z"/>
<path d="M683 168 c-1 -13 -5 -33 -8 -45 -3 -13 -1 -23 5 -23 5 0 10 10 10 23
0 12 3 32 6 45 4 12 2 22 -3 22 -5 0 -10 -10 -10 -22z"/>
<path d="M1047 178 c-22 -8 -26 -14 -21 -31 10 -35 28 -47 20 -14 -7 31 9 38
19 7 3 -11 10 -20 15 -20 6 0 6 10 0 25 -6 17 -6 25 1 25 6 0 13 -9 16 -20 3
-11 9 -20 14 -20 12 0 11 4 -3 35 -12 27 -19 29 -61 13z"/>
<path d="M940 140 c9 -49 -4 -52 -21 -5 -7 19 -16 35 -19 35 -6 0 -30 -68 -30
-84 0 -3 5 -6 10 -6 6 0 10 15 10 33 l1 32 17 -27 c9 -16 25 -28 36 -28 15 0
17 5 12 31 -3 17 -6 38 -6 45 0 8 -4 14 -9 14 -4 0 -5 -18 -1 -40z"/>
<path d="M711 151 c-7 -5 -11 -19 -9 -32 3 -21 8 -24 49 -25 25 0 51 -4 58 -8
7 -5 18 -3 24 3 8 8 6 11 -6 11 -11 0 -17 8 -17 23 0 17 2 19 10 7 5 -8 12
-11 16 -7 4 4 2 13 -4 19 -9 9 -16 7 -32 -7 -17 -15 -23 -16 -33 -5 -10 10 -9
12 6 7 9 -4 17 -2 17 4 0 7 -9 9 -22 6 -12 -4 -27 -2 -33 3 -6 5 -17 5 -24 1z
m32 -31 c4 0 15 -3 24 -9 13 -7 8 -8 -18 -6 -18 1 -34 8 -33 14 3 30 6 35 13
18 4 -10 10 -18 14 -17z"/>
</g>
</svg>

  ),
  googleDrive: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 87.3 78"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z"
        fill="#0066da"
      />
      <path
        d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z"
        fill="#00ac47"
      />
      <path
        d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z"
        fill="#ea4335"
      />
      <path
        d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z"
        fill="#00832d"
      />
      <path
        d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z"
        fill="#2684fc"
      />
      <path
        d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z"
        fill="#ffba00"
      />
    </svg>
  ),
  nacci: () => (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="170.000000pt" height="122.000000pt" viewBox="0 0 170.000000 122.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.10, written by Peter Selinger 2001-2011
</metadata>
<g transform="translate(0.000000,122.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M795 1161 c-24 -5 -30 -12 -30 -31 0 -32 -40 -41 -60 -14 -11 15 -18
17 -42 8 -23 -8 -27 -15 -25 -37 2 -21 -3 -30 -24 -39 -22 -10 -28 -10 -39 6
-13 17 -15 17 -44 0 -32 -19 -38 -33 -21 -50 7 -7 2 -18 -15 -34 -24 -22 -26
-23 -42 -7 -16 16 -19 15 -45 -10 -25 -24 -27 -28 -12 -44 13 -14 13 -20 2
-38 -10 -17 -19 -20 -43 -15 -27 5 -33 2 -43 -22 -11 -22 -10 -29 3 -44 22
-25 1 -61 -34 -58 -33 4 -53 -48 -26 -68 24 -18 11 -54 -21 -54 -19 0 -24 -5
-24 -24 0 -26 -16 -36 -61 -36 -32 0 -65 27 -79 65 -5 14 -14 25 -20 25 -18 0
-11 -57 12 -85 49 -63 151 -73 244 -25 l57 31 26 -24 c14 -14 39 -32 54 -42
33 -21 51 -54 62 -110 10 -56 29 -89 61 -103 34 -16 232 -47 241 -38 10 10 1
15 -108 56 -57 22 -110 48 -116 57 -21 27 -16 41 13 35 20 -4 35 5 74 44 105
105 103 104 186 104 59 0 74 3 74 15 0 8 7 15 15 15 9 0 15 9 15 25 0 16 6 25
15 25 8 0 15 9 15 20 0 13 7 20 20 20 13 0 20 7 20 19 0 15 6 19 28 18 22 -2
27 2 27 22 0 28 -60 65 -97 59 -23 -4 -23 -4 4 -17 15 -8 29 -19 32 -26 7 -18
-92 -118 -110 -111 -8 3 -14 9 -14 14 0 12 -113 72 -136 72 -9 0 -26 -8 -37
-17 -18 -17 -21 -15 -70 40 -50 55 -104 87 -147 87 -29 0 -92 -34 -137 -73
-25 -22 -35 -26 -30 -14 4 10 7 34 7 52 0 26 5 35 23 41 38 11 57 35 57 71 0
29 3 33 28 33 36 0 66 22 82 60 11 26 18 31 38 27 35 -7 65 9 86 44 14 24 20
27 36 19 30 -16 47 -12 82 19 30 26 35 28 53 15 25 -18 59 -18 96 1 27 15 32
14 68 -7 36 -21 43 -21 77 -9 36 13 38 12 67 -19 l29 -31 -21 -16 c-12 -8 -34
-26 -49 -39 l-27 -23 35 9 c19 5 44 21 56 36 l21 25 17 -25 c9 -14 27 -28 41
-32 28 -7 32 -19 10 -28 -31 -11 -15 -35 33 -49 57 -17 67 -12 29 15 -15 11
-27 27 -27 37 0 10 -16 32 -36 49 -19 17 -33 36 -29 42 12 19 32 10 56 -27 21
-33 30 -38 67 -41 36 -3 42 -6 42 -25 0 -34 27 -66 63 -75 23 -6 31 -14 30
-28 -2 -26 26 -70 53 -83 19 -8 23 -16 18 -39 -5 -23 1 -36 25 -64 22 -26 28
-41 24 -59 -8 -32 -20 -39 -68 -38 -64 2 -80 10 -146 82 l-62 68 34 29 c42 36
19 41 -41 10 -31 -16 -40 -26 -40 -46 0 -21 3 -24 21 -19 15 5 22 2 26 -14 3
-12 12 -21 19 -21 8 0 19 -11 24 -25 5 -14 14 -25 20 -25 5 0 10 -9 10 -20 0
-13 7 -20 20 -20 13 0 18 -5 14 -15 -5 -13 11 -15 111 -15 l117 0 -21 33 c-18
30 -18 34 -4 43 25 16 9 66 -19 62 -31 -4 -51 49 -25 63 15 9 16 13 2 38 -11
22 -20 27 -38 24 -35 -7 -54 20 -37 52 12 22 11 27 -5 45 -12 14 -25 18 -42
14 -33 -9 -55 13 -48 46 4 19 0 32 -20 50 -24 23 -25 23 -45 5 -19 -18 -21
-17 -41 1 -14 12 -18 25 -14 41 4 19 -1 26 -30 40 -36 17 -45 14 -57 -20 -2
-4 -18 -2 -36 5 -25 10 -32 17 -30 37 2 19 -3 26 -27 33 -25 7 -32 4 -44 -12
-9 -13 -25 -20 -47 -20 -30 0 -34 3 -34 25 0 23 -4 25 -40 25 -33 0 -40 -3
-40 -20 0 -16 -7 -20 -31 -20 -17 0 -38 8 -47 18 -13 14 -25 17 -47 13z m-238
-381 c15 -6 34 -19 41 -28 35 -47 127 -132 141 -132 23 0 59 30 45 36 -25 11
-49 33 -42 39 4 4 27 -5 52 -21 24 -16 58 -37 75 -46 47 -26 40 -41 -16 -34
-52 7 -66 0 -96 -47 -10 -15 -31 -36 -47 -46 -17 -10 -43 -36 -60 -59 -17 -23
-37 -42 -46 -42 -12 0 -10 5 8 20 35 27 41 57 17 81 -16 16 -23 17 -40 9 -28
-16 -37 -46 -31 -112 5 -64 10 -70 67 -88 71 -21 126 -43 121 -47 -9 -9 -171
30 -189 45 -16 15 -24 35 -47 129 -9 34 -20 49 -58 74 -26 18 -55 41 -64 53
l-17 21 -67 -34 c-47 -23 -81 -33 -114 -33 -45 0 -102 21 -115 42 -4 6 12 1
34 -10 62 -33 89 -20 219 106 138 133 165 147 229 124z m68 -319 c0 -18 -7
-26 -27 -32 -24 -6 -28 -4 -28 15 0 12 6 28 12 34 19 19 43 10 43 -17z"/>
<path d="M1171 984 c-6 -15 -9 -34 -6 -43 3 -10 -2 -37 -10 -61 -8 -23 -15
-55 -15 -71 0 -16 -4 -29 -10 -29 -13 0 -13 -53 0 -66 18 -18 1 -40 -49 -61
-48 -20 -72 -46 -86 -90 l-6 -23 195 0 c215 0 212 -1 175 59 -13 22 -37 40
-70 54 l-50 21 7 53 c4 32 2 53 -3 53 -5 0 -10 15 -11 33 -1 18 -8 52 -17 76
-9 27 -12 48 -6 54 7 7 -13 67 -23 67 -2 0 -8 -12 -15 -26z m37 -233 c6 -82
13 -96 62 -121 88 -45 61 -61 -95 -58 -94 2 -120 6 -120 17 0 7 15 22 33 31
60 33 69 46 75 118 3 37 8 76 11 87 2 11 5 22 6 25 0 3 6 -3 12 -14 6 -10 13
-48 16 -85z"/>
<path d="M1060 929 c-14 -16 -26 -31 -28 -33 -2 -2 1 -14 7 -25 10 -18 7 -23
-28 -41 -53 -27 -59 -39 -13 -30 64 13 122 34 122 46 0 12 -42 34 -65 34 -8 0
-15 5 -15 10 0 6 7 10 15 10 9 0 32 7 52 15 30 13 33 17 23 30 -19 22 -42 17
-70 -16z"/>
<path d="M1283 868 c-13 -6 -23 -16 -23 -22 0 -12 85 -46 114 -46 23 0 10 19
-21 31 -19 7 -24 15 -20 29 6 23 -14 26 -50 8z"/>
<path d="M1050 418 l0 -61 -41 56 c-25 36 -47 57 -60 57 -17 0 -19 -7 -19 -75
0 -59 3 -75 15 -75 10 0 15 15 17 56 l3 56 40 -56 c22 -31 48 -56 58 -56 15 0
17 10 17 80 0 64 -3 80 -15 80 -12 0 -15 -14 -15 -62z"/>
<path d="M1293 470 c-37 -15 -54 -69 -37 -115 10 -25 62 -47 95 -40 39 9 79
65 46 65 -7 0 -18 -9 -25 -20 -14 -22 -61 -27 -80 -8 -15 15 -16 53 -2 79 13
23 57 25 81 3 27 -24 45 -13 22 14 -21 25 -68 36 -100 22z"/>
<path d="M1480 473 c-35 -13 -50 -37 -50 -78 0 -46 18 -69 62 -80 36 -9 96 26
98 58 0 15 -30 6 -40 -13 -12 -23 -59 -27 -78 -8 -7 7 -12 26 -12 43 0 17 5
36 12 43 17 17 67 15 74 -3 6 -15 34 -21 34 -7 -1 33 -60 60 -100 45z"/>
<path d="M1610 400 c0 -64 3 -80 15 -80 12 0 15 16 15 80 0 64 -3 80 -15 80
-12 0 -15 -16 -15 -80z"/>
<path d="M1123 395 c-24 -56 -28 -75 -18 -75 8 0 19 9 25 20 7 14 21 20 45 20
25 0 35 -5 40 -20 3 -11 13 -20 22 -20 8 0 13 3 11 8 -1 4 -14 38 -28 75 -20
53 -29 67 -45 67 -17 0 -28 -16 -52 -75z m66 -2 c1 -7 -8 -13 -19 -13 -23 0
-23 0 -9 37 10 26 12 27 19 8 5 -11 9 -26 9 -32z"/>
<path d="M923 288 c6 -19 728 -19 735 0 3 9 -75 12 -368 12 -293 0 -371 -3
-367 -12z"/>
<path d="M50 165 c0 -19 5 -35 10 -35 6 0 10 9 10 20 0 11 4 20 8 20 5 0 17
-9 27 -20 28 -31 45 -25 45 15 0 26 -4 35 -16 35 -11 0 -15 -6 -11 -20 3 -11
2 -20 -2 -20 -5 0 -16 9 -26 20 -28 31 -45 25 -45 -15z"/>
<path d="M172 165 l0 -35 50 0 c27 0 47 4 44 8 -3 5 -19 7 -36 4 -17 -2 -30 0
-30 6 0 6 15 13 33 15 l32 4 -32 1 c-45 3 -42 20 5 25 31 3 29 4 -14 5 l-52 2
0 -35z"/>
<path d="M290 165 c0 -24 5 -35 15 -35 8 0 15 7 15 15 0 10 10 15 28 15 16 0
32 3 35 7 14 14 -17 33 -54 33 -38 0 -39 -1 -39 -35z"/>
<path d="M406 168 c-24 -31 -18 -54 7 -29 14 14 50 14 65 -1 23 -23 24 1 1 31
-29 39 -41 39 -73 -1z"/>
<path d="M520 165 c0 -35 0 -35 45 -35 26 0 45 5 45 11 0 7 -12 10 -30 7 -27
-4 -30 -2 -30 24 0 18 -5 28 -15 28 -10 0 -15 -11 -15 -35z"/>
<path d="M676 168 c-24 -31 -18 -54 7 -29 14 14 54 14 62 1 3 -5 13 -10 21
-10 11 0 8 9 -12 35 -14 19 -32 35 -39 35 -8 0 -25 -15 -39 -32z"/>
<path d="M790 170 c0 -23 5 -31 25 -36 14 -3 36 -3 50 0 20 5 25 13 25 36 0
39 -27 41 -32 3 -2 -17 -9 -28 -18 -28 -9 0 -16 11 -18 28 -5 38 -32 36 -32
-3z"/>
<path d="M917 193 c-12 -11 14 -33 39 -33 13 0 24 -5 24 -11 0 -11 -16 -9 -52
6 -11 4 -18 3 -18 -4 0 -15 44 -25 76 -17 31 8 27 30 -7 34 -13 2 -28 8 -34
14 -7 7 2 8 28 4 27 -5 37 -4 32 3 -7 12 -78 15 -88 4z"/>
<path d="M1025 190 c3 -5 12 -7 20 -3 11 4 15 -3 15 -26 0 -21 5 -31 15 -31
10 0 15 10 15 31 0 24 4 30 15 25 8 -3 15 -1 15 4 0 6 -23 10 -51 10 -29 0
-48 -4 -44 -10z"/>
<path d="M1140 165 c0 -19 5 -35 10 -35 6 0 10 7 10 15 0 19 19 19 44 0 23
-17 72 -20 81 -5 8 13 52 13 60 0 3 -5 13 -10 21 -10 11 0 8 9 -12 35 -32 43
-47 44 -76 5 -24 -33 -26 -34 -48 -20 -13 8 -13 11 -1 19 24 15 1 31 -45 31
-44 0 -44 0 -44 -35z"/>
<path d="M1390 165 c0 -35 0 -35 45 -35 26 0 45 5 45 11 0 7 -12 10 -30 7 -27
-4 -30 -2 -30 24 0 18 -5 28 -15 28 -10 0 -15 -11 -15 -35z"/>
<path d="M1494 184 c3 -9 6 -24 6 -35 0 -10 5 -19 10 -19 6 0 10 16 10 35 0
25 -4 35 -16 35 -11 0 -14 -5 -10 -16z"/>
<path d="M1556 165 c-20 -26 -23 -35 -12 -35 8 0 18 5 21 10 3 6 17 10 30 10
13 0 27 -4 30 -10 3 -5 13 -10 21 -10 11 0 8 9 -12 35 -14 19 -32 35 -39 35
-7 0 -25 -16 -39 -35z"/>
<path d="M41 96 c-7 -8 -10 -20 -6 -26 9 -14 52 -13 58 3 4 8 8 9 14 1 4 -5
29 -10 56 -11 40 0 47 3 47 20 0 16 -3 17 -15 7 -12 -10 -15 -10 -16 1 0 8 -4
5 -9 -6 -7 -18 -8 -19 -15 -2 -4 9 -11 17 -16 17 -5 0 -9 -8 -10 -17 0 -15 -2
-15 -7 -3 -4 8 -14 16 -22 16 -8 1 -22 5 -31 8 -9 4 -21 0 -28 -8z"/>
<path d="M220 86 c0 -17 5 -26 16 -26 10 0 14 7 12 22 -5 32 -28 35 -28 4z"/>
<path d="M300 83 c0 -22 2 -25 10 -13 6 10 10 11 10 3 0 -7 4 -13 8 -13 16 0
5 45 -11 48 -13 3 -17 -4 -17 -25z"/>
<path d="M458 93 c-14 -18 -1 -33 28 -31 28 3 56 27 33 29 -8 0 -5 4 6 9 15 6
11 8 -18 7 -21 -1 -43 -7 -49 -14z"/>
<path d="M707 103 c-4 -3 -7 -14 -7 -24 0 -14 9 -17 45 -17 40 0 45 2 44 21 0
12 -3 16 -6 10 -7 -19 -23 -16 -23 5 0 13 -2 14 -9 3 -6 -9 -11 -10 -15 -2 -8
12 -19 14 -29 4z"/>
<path d="M800 88 c0 -21 5 -28 20 -28 15 0 20 6 19 28 0 23 -2 24 -8 7 -8 -19
-8 -19 -19 0 -11 18 -11 18 -12 -7z"/>
<path d="M850 85 c0 -17 5 -25 18 -25 14 0 15 2 2 10 -13 9 -13 10 0 10 12 0
13 2 1 9 -11 7 -11 9 0 14 10 4 9 6 -3 6 -13 1 -18 -7 -18 -24z"/>
<path d="M891 82 l1 -27 7 25 c7 23 8 23 13 5 3 -14 14 -21 34 -22 16 0 21 1
11 4 -21 5 -17 30 4 25 8 -2 10 0 6 4 -4 5 -24 9 -43 11 -31 2 -34 0 -33 -25z"/>
<path d="M980 85 c0 -17 5 -25 18 -25 14 0 15 2 2 10 -13 9 -13 10 0 10 12 0
13 2 1 9 -11 7 -11 9 0 14 10 4 9 6 -3 6 -13 1 -18 -7 -18 -24z"/>
<path d="M1143 92 c3 -12 1 -20 -4 -16 -5 3 -9 0 -9 -5 0 -6 9 -11 20 -11 24
0 25 10 4 36 -15 19 -15 18 -11 -4z"/>
<path d="M1350 87 c0 -22 4 -25 40 -25 35 -1 40 2 39 21 -1 17 -2 18 -6 5 -5
-22 -23 -24 -23 -3 0 8 -4 15 -9 15 -5 0 -16 3 -25 6 -12 5 -16 0 -16 -19z"/>
<path d="M1440 96 c0 -9 6 -16 13 -16 8 0 7 -4 -3 -10 -13 -8 -12 -10 2 -10
13 0 17 6 15 22 -4 25 -27 37 -27 14z"/>
<path d="M1488 82 l6 -27 7 25 c6 21 7 22 8 5 1 -14 8 -21 21 -21 15 0 20 6
18 20 -2 15 -12 21 -34 23 -29 2 -31 1 -26 -25z"/>
<path d="M1573 103 c-7 -2 -13 -13 -13 -24 0 -14 7 -19 28 -19 15 0 23 4 17 8
-12 9 -18 32 -7 32 4 0 15 -7 25 -14 14 -11 15 -15 5 -19 -8 -4 -7 -6 4 -6 13
-1 17 5 14 21 -2 17 -10 23 -32 24 -16 1 -35 0 -41 -3z"/>
<path d="M1290 80 c0 -11 5 -20 10 -20 6 0 10 5 10 11 0 8 5 8 15 -1 12 -10
15 -9 15 7 0 13 -8 19 -25 21 -19 1 -25 -3 -25 -18z"/>
</g>
</svg>

  ),
};

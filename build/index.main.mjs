// Automatically generated with Reach 0.1.12 (1f68dfdb)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (1f68dfdb)';
export const _backendVersion = 26;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Digest;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  
  
  const v60 = stdlib.protect(ctc0, interact.amt, 'for Alice\'s interact field amt');
  const v61 = stdlib.protect(ctc0, interact.pass, 'for Alice\'s interact field pass');
  
  const v64 = stdlib.digest([ctc0], [v61]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v64, v60],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:26:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc0],
    pay: [v60, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v66, v67], secs: v69, time: v68, didSend: v32, from: v65 } = txn1;
      
      sim_r.txns.push({
        amt: v67,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v66, v67], secs: v69, time: v68, didSend: v32, from: v65 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v78], secs: v80, time: v79, didSend: v43, from: v77 } = txn2;
  ;
  const v81 = stdlib.digest([ctc0], [v78]);
  const v82 = stdlib.digestEq(v66, v81);
  stdlib.assert(v82, {
    at: './index.rsh:40:12:application',
    fs: [],
    msg: null,
    who: 'Alice'
    });
  ;
  return;
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Digest;
  const ctc1 = stdlib.T_UInt;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v66, v67], secs: v69, time: v68, didSend: v32, from: v65 } = txn1;
  ;
  const v74 = stdlib.protect(ctc1, await interact.getPass(), {
    at: './index.rsh:34:47:application',
    fs: ['at ./index.rsh:33:13:application call to [unknown function] (defined at: ./index.rsh:33:17:function exp)'],
    msg: 'getPass',
    who: 'Bob'
    });
  const v75 = stdlib.digest([ctc1], [v74]);
  const v76 = stdlib.digestEq(v66, v75);
  stdlib.assert(v76, {
    at: './index.rsh:35:13:application',
    fs: ['at ./index.rsh:33:13:application call to [unknown function] (defined at: ./index.rsh:33:17:function exp)'],
    msg: null,
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v66, v67, v74],
    evt_cnt: 1,
    funcNum: 1,
    lct: v68,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:38:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v78], secs: v80, time: v79, didSend: v43, from: v77 } = txn2;
      
      ;
      sim_r.txns.push({
        kind: 'from',
        to: v77,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v78], secs: v80, time: v79, didSend: v43, from: v77 } = txn2;
  ;
  const v81 = stdlib.digest([ctc1], [v78]);
  const v82 = stdlib.digestEq(v66, v81);
  stdlib.assert(v82, {
    at: './index.rsh:40:12:application',
    fs: [],
    msg: null,
    who: 'Bob'
    });
  ;
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByADAAEgJgIAAQAiNQAxGEEBFihkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAAEgjEkQjNAESRDQESSISTDQCEhFEKWQ1A0k1BRc1/4AE1RUZFDT/FlCwNANXACA0/xYBEkSxIrIBNAMkW7III7IQMQCyB7NCAFBIgaCNBogAtiI0ARJENARJIhJMNAISEURJNQVJVwAgNf8kWzX+gATb8EUPNP9QNP4WULA0/ogAhjT/NP4WUClLAVcAKGdIIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCg0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAjE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 40,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"v114","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T2","name":"v116","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x60806107759081380391601f1980601f85011683019360018060401b0392848610848711176102fa57816060928692604098895283398101031261031057835160608101818110848211176102fa5785528351815260209085828601519583830196875201519186820192835243600355865191818301838110878211176102fa578852600080935260049060ff8254166102e3577f4f453854b6a90dba7951e2aeeb8854b2b5f80576fe444dd363a967d18d9175e460808a513381528351868201528a518c82015287516060820152a15180159081156102d7575b50156102c057835134036102a9578751938885018581108882111761029657895283855282850197848952518095525187526001968784554388558851948386015251888501528784526060840184811087821117610283578852835195861161027057600254908782811c92168015610266575b838310146102535750601f811161020c575b508093601f86116001146101a95750509183949184939461019e575b50501b916000199060031b1c1916176002555b5161045f90816103168239f35b01519250388061017e565b600283528183209493928692918316915b888383106101f257505050106101d9575b505050811b01600255610191565b015160001960f88460031b161c191690553880806101cb565b8587015188559096019594850194879350908101906101ba565b60028352818320601f870160051c810191838810610249575b601f0160051c019087905b82811061023e575050610162565b848155018790610230565b9091508190610225565b634e487b7160e01b845260229052602483fd5b91607f1691610150565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b634e487b7160e01b855260418352602485fd5b602490600989519163100960cb60e01b8352820152fd5b602490600889519163100960cb60e01b8352820152fd5b905060015414386100db565b885163100960cb60e01b8152600781840152602490fd5b634e487b7160e01b600052604160045260246000fd5b600080fdfe6080604081815260048036101561001e575b505050361561001c57005b005b600092833560e01c918263137772741461010457505080631e93b0f1146100e657806383230757146100c85763ab53f2c61461005a5780610011565b346100c457816003193601126100c457815461007461038b565b91805193849283526020828185015284518093850152815b8381106100ad57505060608094508284010152601f80199101168101030190f35b80860182015187820160600152869450810161008c565b5080fd5b50346100c457816003193601126100c4576020906001549051908152f35b50346100c457816003193601126100c4576020906003549051908152f35b8385918160031936011261031c576020938085016001600160401b03811182821017610309578352839052815161013a8161035a565b81358152848101916024908135845260ff8154166102f5577fe5de0525b632040f86734209a760b5d584fc6591da321a373e0ad15b2a7639246060865133815285518a820152865188820152a1600193848754036102e05761019a61038b565b86818051810103126102dc57868051916101b38361035a565b8a81015183520151948982019586525180159081156102d1575b50156102bb57346102a55751905186518981019182528981526101ef8161035a565b51902003610291575050838080809351818115610288575b3390f11561027d57828055828155610220600254610320565b8061022e575b505051908152f35b601f8111600114610247575050816002555b8380610226565b6002845281601f868620920160051c820191015b81811061027357505050818381208160025555610240565b848155820161025b565b5051903d90823e3d90fd5b506108fc610207565b600e85519163100960cb60e01b8352820152fd5b5050600d85519163100960cb60e01b8352820152fd5b5050600c85519163100960cb60e01b8352820152fd5b90508654148a6101cd565b8780fd5b50600b85519163100960cb60e01b8352820152fd5b600a85519163100960cb60e01b8352820152fd5b634e487b7160e01b855260418352602485fd5b8280fd5b90600182811c92168015610350575b602083101461033a57565b634e487b7160e01b600052602260045260246000fd5b91607f169161032f565b604081019081106001600160401b0382111761037557604052565b634e487b7160e01b600052604160045260246000fd5b60405190600060025461039d81610320565b80855260019180831690811561043357506001146103db575b5050829003601f01601f191682016001600160401b0381118382101761037557604052565b600260009081526020935091837f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace5b83851061041f575050505083010138806103b6565b80548886018301529301928490820161040a565b919250506020925060ff191682850152151560051b83010138806103b656fea164736f6c6343000810000a`,
  BytecodeLen: 1909,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:29:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:44:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };

/**
 * @param {string[][]} favoriteCompanies
 * @return {number[]}
 */
var peopleIndexes = function(favoriteCompanies) {
  const mapping = {};
  const completed = {};
  let counter = 1;
  const ans = [];
  const dfs = (cur, list, prefix) => {
    if (completed['-' + list.join('-')]) {
      return;
    }
    if (list.length === 1) {
      let pick = mapping[list[0]];
      if (cur[pick] == null) {
        cur[pick] = true;
      }
      completed[prefix] = true;
      // console.log('dfs -> completed', completed);
    } else {
      for (let i = 0; i < list.length; i++) {
        let pick = mapping[list[i]];
        if (cur[pick] === true) {
          cur[pick] = {};
        } else if (!cur[pick]) {
          cur[pick] = {};
        }
        console.log('peopleIndexes -> map', JSON.stringify(map));
        dfs(cur[pick], list.slice(i + 1), prefix + '-' + pick);
      }
    }
  };
  const map = {};
  const all = [];

  for (let i = 0; i < favoriteCompanies.length; i++) {
    let list = favoriteCompanies[i];
    for (let j = 0; j < list.length; j++) {
      const element = list[j];
      if (!all.includes(element)) {
        all.push(element);
      }
    }
  }
  all.sort();
  for (let j = 0; j < all.length; j++) {
    const element = all[j];
    mapping[element] = counter;
    counter++;
  }
  // console.log('peopleIndexes -> mapping', mapping);
  for (let i = 0; i < favoriteCompanies.length; i++) {
    let list = favoriteCompanies[i];
    list.sort();
    dfs(map, list, '');
  }
  // console.log('peopleIndexes -> map', map);
  for (let i = 0; i < favoriteCompanies.length; i++) {
    const list = favoriteCompanies[i];
    let cur = map;
    for (let j = 0; j < list.length; j++) {
      const pick = mapping[list[j]];
      const element = cur[pick];
      if (element === true) {
        if (j === list.length - 1) {
          ans.push(i);
        } else {
          break;
        }
      } else if (!element) {
        break;
      } else {
        cur = element;
      }
    }
  }
  // console.log('peopleIndexes -> mapping', mapping);
  console.log('peopleIndexes -> map', map);
  return ans;
};

// prettier-ignore
console.log(peopleIndexes([["leetcode","google","facebook"],["google","microsoft"],["google","facebook"],["google"],["amazon"]]));
// prettier-ignore
console.log(peopleIndexes([["leetcode","google","facebook"],["leetcode","amazon"],["facebook","google"]]));
// prettier-ignore
console.log(peopleIndexes([["leetcode"],["google"],["facebook"],["amazon"]]));
// prettier-ignore
console.log(peopleIndexes([["atkaeidhizusppgcejau","bgnkxnooovtxtuuolbgv","caavcceribgnkvivlgvf","hwqqunrnfzhahqrbuerc","iwhnavnmheccfotxmzzh","jrugixifjqkrcwbeemkk","jtmiajedxnjxvjwnrbvx","pqrmmtuxnruqvvnpipev","uroshonbepzlqjxmcsne","vedyfqpndblukjbjzobl","vegiwqtbfsjbvdiusdfw","vfoqakwztjvjzeobbjfy","vgmbitzeogemouvblwhv","vtnjiocdkovvjqhqkhef","zaerihlkxedinltbrbvo","zpfjayiarutsanroyazt","zygcoldstkzvdgtkffky"],["caavcceribgnkvivlgvf","ejsyvsypkeztuxcvtmvc","swqgwomcxacjxtogxjnf","uydazmpuajwpplfgprgq","vedyfqpndblukjbjzobl","wdncgduahpcgkgjjoowr","wvydgwomgnbxfywvmnlq","zygcoldstkzvdgtkffky"],["atkaeidhizusppgcejau","awonvvslnwlgyigvospi","bgnkxnooovtxtuuolbgv","bxukjjvxmjzmpjvdsvua","cgxzjrscpsoqomlqyuqp","ejsyvsypkeztuxcvtmvc","ezcqwfbsygyqrxoujjpe","hfyvfhstodagsluufidc","hwqqunrnfzhahqrbuerc","iwhnavnmheccfotxmzzh","jrugixifjqkrcwbeemkk","jtmiajedxnjxvjwnrbvx","ncldnokqdavbenytwggc","pqrmmtuxnruqvvnpipev","qmddssazmcpglsbnprkg","swqgwomcxacjxtogxjnf","ttucgnlqxplwdokahjnv","uroshonbepzlqjxmcsne","utvmmxohhpajipplydsx","uydazmpuajwpplfgprgq","vedyfqpndblukjbjzobl","vegiwqtbfsjbvdiusdfw","vgmbitzeogemouvblwhv","vtnjiocdkovvjqhqkhef","vwqhnpcsxlrqfbwggalh","wdncgduahpcgkgjjoowr","wvydgwomgnbxfywvmnlq","xzruhenwxgwlphbhdlcw","zaerihlkxedinltbrbvo","zfveafjfuuegyewhozec","zpfjayiarutsanroyazt","zygcoldstkzvdgtkffky"],["bxukjjvxmjzmpjvdsvua","uydazmpuajwpplfgprgq","wdncgduahpcgkgjjoowr"],["aeppinuqdnorqjzcbnel","atkaeidhizusppgcejau","awonvvslnwlgyigvospi","bgnkxnooovtxtuuolbgv","bxukjjvxmjzmpjvdsvua","caavcceribgnkvivlgvf","cgxzjrscpsoqomlqyuqp","ejsyvsypkeztuxcvtmvc","ezcqwfbsygyqrxoujjpe","hfyvfhstodagsluufidc","hwqqunrnfzhahqrbuerc","iwhnavnmheccfotxmzzh","jhmzjrejejrdjqdyygom","jrugixifjqkrcwbeemkk","jtmiajedxnjxvjwnrbvx","ncldnokqdavbenytwggc","pqrmmtuxnruqvvnpipev","qmddssazmcpglsbnprkg","swqgwomcxacjxtogxjnf","ttucgnlqxplwdokahjnv","uroshonbepzlqjxmcsne","uydazmpuajwpplfgprgq","vedyfqpndblukjbjzobl","vegiwqtbfsjbvdiusdfw","vfoqakwztjvjzeobbjfy","vgmbitzeogemouvblwhv","vtnjiocdkovvjqhqkhef","vwqhnpcsxlrqfbwggalh","wdncgduahpcgkgjjoowr","wvydgwomgnbxfywvmnlq","xzruhenwxgwlphbhdlcw","zfveafjfuuegyewhozec","zpfjayiarutsanroyazt","zygcoldstkzvdgtkffky"],["bxukjjvxmjzmpjvdsvua","caavcceribgnkvivlgvf","hfyvfhstodagsluufidc","pqrmmtuxnruqvvnpipev","uroshonbepzlqjxmcsne"],["bgnkxnooovtxtuuolbgv","ejsyvsypkeztuxcvtmvc","hfyvfhstodagsluufidc","jhmzjrejejrdjqdyygom","jrugixifjqkrcwbeemkk","vedyfqpndblukjbjzobl","vegiwqtbfsjbvdiusdfw","vwqhnpcsxlrqfbwggalh","zaerihlkxedinltbrbvo","zpfjayiarutsanroyazt"],["caavcceribgnkvivlgvf","ezcqwfbsygyqrxoujjpe","hfyvfhstodagsluufidc","iwhnavnmheccfotxmzzh","jhmzjrejejrdjqdyygom","jrugixifjqkrcwbeemkk","pqrmmtuxnruqvvnpipev","qmddssazmcpglsbnprkg","swqgwomcxacjxtogxjnf","ttucgnlqxplwdokahjnv","uroshonbepzlqjxmcsne","vedyfqpndblukjbjzobl","vfoqakwztjvjzeobbjfy","vgmbitzeogemouvblwhv","vtnjiocdkovvjqhqkhef","vwqhnpcsxlrqfbwggalh","wdncgduahpcgkgjjoowr","zaerihlkxedinltbrbvo","zfveafjfuuegyewhozec","zpfjayiarutsanroyazt","zygcoldstkzvdgtkffky"],["aeppinuqdnorqjzcbnel","cgxzjrscpsoqomlqyuqp","jhmzjrejejrdjqdyygom","ncldnokqdavbenytwggc","pqrmmtuxnruqvvnpipev","uydazmpuajwpplfgprgq","vedyfqpndblukjbjzobl","xzruhenwxgwlphbhdlcw"],["aeppinuqdnorqjzcbnel","atkaeidhizusppgcejau","awonvvslnwlgyigvospi","bxukjjvxmjzmpjvdsvua","caavcceribgnkvivlgvf","hfyvfhstodagsluufidc","hwqqunrnfzhahqrbuerc","jhmzjrejejrdjqdyygom","jrugixifjqkrcwbeemkk","pqrmmtuxnruqvvnpipev","qmddssazmcpglsbnprkg","ttucgnlqxplwdokahjnv","utvmmxohhpajipplydsx","vedyfqpndblukjbjzobl","vegiwqtbfsjbvdiusdfw","wvydgwomgnbxfywvmnlq","zaerihlkxedinltbrbvo","zfveafjfuuegyewhozec","zpfjayiarutsanroyazt"],["aeppinuqdnorqjzcbnel","atkaeidhizusppgcejau","awonvvslnwlgyigvospi","bgnkxnooovtxtuuolbgv","bxukjjvxmjzmpjvdsvua","caavcceribgnkvivlgvf","ejsyvsypkeztuxcvtmvc","ezcqwfbsygyqrxoujjpe","hwqqunrnfzhahqrbuerc","iwhnavnmheccfotxmzzh","jhmzjrejejrdjqdyygom","jtmiajedxnjxvjwnrbvx","ncldnokqdavbenytwggc","pqrmmtuxnruqvvnpipev","qmddssazmcpglsbnprkg","swqgwomcxacjxtogxjnf","ttucgnlqxplwdokahjnv","uroshonbepzlqjxmcsne","utvmmxohhpajipplydsx","uydazmpuajwpplfgprgq","vedyfqpndblukjbjzobl","vegiwqtbfsjbvdiusdfw","vfoqakwztjvjzeobbjfy","vgmbitzeogemouvblwhv","vtnjiocdkovvjqhqkhef","vwqhnpcsxlrqfbwggalh","wvydgwomgnbxfywvmnlq","zfveafjfuuegyewhozec","zpfjayiarutsanroyazt","zygcoldstkzvdgtkffky"],["bxukjjvxmjzmpjvdsvua","vtnjiocdkovvjqhqkhef","wdncgduahpcgkgjjoowr","zfveafjfuuegyewhozec","zpfjayiarutsanroyazt"],["aeppinuqdnorqjzcbnel","atkaeidhizusppgcejau","awonvvslnwlgyigvospi","bxukjjvxmjzmpjvdsvua","caavcceribgnkvivlgvf","cgxzjrscpsoqomlqyuqp","ejsyvsypkeztuxcvtmvc","ezcqwfbsygyqrxoujjpe","hfyvfhstodagsluufidc","iwhnavnmheccfotxmzzh","jhmzjrejejrdjqdyygom","jrugixifjqkrcwbeemkk","jtmiajedxnjxvjwnrbvx","ncldnokqdavbenytwggc","pqrmmtuxnruqvvnpipev","qmddssazmcpglsbnprkg","swqgwomcxacjxtogxjnf","uroshonbepzlqjxmcsne","utvmmxohhpajipplydsx","vedyfqpndblukjbjzobl","vegiwqtbfsjbvdiusdfw","vfoqakwztjvjzeobbjfy","vtnjiocdkovvjqhqkhef","wvydgwomgnbxfywvmnlq","zaerihlkxedinltbrbvo","zfveafjfuuegyewhozec","zpfjayiarutsanroyazt","zygcoldstkzvdgtkffky"],["atkaeidhizusppgcejau","awonvvslnwlgyigvospi","bgnkxnooovtxtuuolbgv","bxukjjvxmjzmpjvdsvua","cgxzjrscpsoqomlqyuqp","ejsyvsypkeztuxcvtmvc","ezcqwfbsygyqrxoujjpe","hfyvfhstodagsluufidc","hwqqunrnfzhahqrbuerc","iwhnavnmheccfotxmzzh","jhmzjrejejrdjqdyygom","ncldnokqdavbenytwggc","qmddssazmcpglsbnprkg","swqgwomcxacjxtogxjnf","ttucgnlqxplwdokahjnv","uroshonbepzlqjxmcsne","utvmmxohhpajipplydsx","uydazmpuajwpplfgprgq","vfoqakwztjvjzeobbjfy","vtnjiocdkovvjqhqkhef","wdncgduahpcgkgjjoowr","wvydgwomgnbxfywvmnlq","xzruhenwxgwlphbhdlcw","zaerihlkxedinltbrbvo","zfveafjfuuegyewhozec","zpfjayiarutsanroyazt","zygcoldstkzvdgtkffky"],["aeppinuqdnorqjzcbnel","atkaeidhizusppgcejau","awonvvslnwlgyigvospi","bgnkxnooovtxtuuolbgv","bxukjjvxmjzmpjvdsvua","caavcceribgnkvivlgvf","cgxzjrscpsoqomlqyuqp","ejsyvsypkeztuxcvtmvc","ezcqwfbsygyqrxoujjpe","hfyvfhstodagsluufidc","hwqqunrnfzhahqrbuerc","iwhnavnmheccfotxmzzh","jhmzjrejejrdjqdyygom","jrugixifjqkrcwbeemkk","jtmiajedxnjxvjwnrbvx","ncldnokqdavbenytwggc","pqrmmtuxnruqvvnpipev","qmddssazmcpglsbnprkg","swqgwomcxacjxtogxjnf","ttucgnlqxplwdokahjnv","uroshonbepzlqjxmcsne","utvmmxohhpajipplydsx","uydazmpuajwpplfgprgq","vedyfqpndblukjbjzobl","vfoqakwztjvjzeobbjfy","vgmbitzeogemouvblwhv","vtnjiocdkovvjqhqkhef","vwqhnpcsxlrqfbwggalh","wdncgduahpcgkgjjoowr","wvydgwomgnbxfywvmnlq","xzruhenwxgwlphbhdlcw","zaerihlkxedinltbrbvo","zfveafjfuuegyewhozec","zpfjayiarutsanroyazt","zygcoldstkzvdgtkffky"],["bxukjjvxmjzmpjvdsvua","cgxzjrscpsoqomlqyuqp","ejsyvsypkeztuxcvtmvc","hfyvfhstodagsluufidc","hwqqunrnfzhahqrbuerc","jrugixifjqkrcwbeemkk","jtmiajedxnjxvjwnrbvx","ncldnokqdavbenytwggc","qmddssazmcpglsbnprkg","ttucgnlqxplwdokahjnv","vedyfqpndblukjbjzobl","vegiwqtbfsjbvdiusdfw","vfoqakwztjvjzeobbjfy","vgmbitzeogemouvblwhv","vtnjiocdkovvjqhqkhef","vwqhnpcsxlrqfbwggalh","wdncgduahpcgkgjjoowr","wvydgwomgnbxfywvmnlq","zfveafjfuuegyewhozec","zygcoldstkzvdgtkffky"],["bgnkxnooovtxtuuolbgv","ejsyvsypkeztuxcvtmvc","ezcqwfbsygyqrxoujjpe","jtmiajedxnjxvjwnrbvx","ncldnokqdavbenytwggc","swqgwomcxacjxtogxjnf","vgmbitzeogemouvblwhv","wvydgwomgnbxfywvmnlq","zpfjayiarutsanroyazt","zygcoldstkzvdgtkffky"],["awonvvslnwlgyigvospi","bgnkxnooovtxtuuolbgv","bxukjjvxmjzmpjvdsvua","caavcceribgnkvivlgvf","cgxzjrscpsoqomlqyuqp","jhmzjrejejrdjqdyygom","jrugixifjqkrcwbeemkk","jtmiajedxnjxvjwnrbvx","uroshonbepzlqjxmcsne","vegiwqtbfsjbvdiusdfw","vgmbitzeogemouvblwhv","wvydgwomgnbxfywvmnlq","xzruhenwxgwlphbhdlcw","zaerihlkxedinltbrbvo","zfveafjfuuegyewhozec","zpfjayiarutsanroyazt"],["aeppinuqdnorqjzcbnel","ejsyvsypkeztuxcvtmvc","hfyvfhstodagsluufidc","jhmzjrejejrdjqdyygom","jrugixifjqkrcwbeemkk","jtmiajedxnjxvjwnrbvx","ncldnokqdavbenytwggc","pqrmmtuxnruqvvnpipev","qmddssazmcpglsbnprkg","swqgwomcxacjxtogxjnf","ttucgnlqxplwdokahjnv","uroshonbepzlqjxmcsne","utvmmxohhpajipplydsx","vedyfqpndblukjbjzobl","vegiwqtbfsjbvdiusdfw","vtnjiocdkovvjqhqkhef","vwqhnpcsxlrqfbwggalh","wdncgduahpcgkgjjoowr","wvydgwomgnbxfywvmnlq","zfveafjfuuegyewhozec","zpfjayiarutsanroyazt","zygcoldstkzvdgtkffky"],["aeppinuqdnorqjzcbnel","atkaeidhizusppgcejau","bxukjjvxmjzmpjvdsvua","caavcceribgnkvivlgvf","cgxzjrscpsoqomlqyuqp","ejsyvsypkeztuxcvtmvc","ezcqwfbsygyqrxoujjpe","hfyvfhstodagsluufidc","iwhnavnmheccfotxmzzh","jrugixifjqkrcwbeemkk","jtmiajedxnjxvjwnrbvx","ncldnokqdavbenytwggc","pqrmmtuxnruqvvnpipev","qmddssazmcpglsbnprkg","ttucgnlqxplwdokahjnv","utvmmxohhpajipplydsx","uydazmpuajwpplfgprgq","vedyfqpndblukjbjzobl","vegiwqtbfsjbvdiusdfw","vgmbitzeogemouvblwhv","vwqhnpcsxlrqfbwggalh","wdncgduahpcgkgjjoowr","wvydgwomgnbxfywvmnlq","xzruhenwxgwlphbhdlcw","zfveafjfuuegyewhozec","zpfjayiarutsanroyazt","zygcoldstkzvdgtkffky"],["atkaeidhizusppgcejau","awonvvslnwlgyigvospi","bgnkxnooovtxtuuolbgv","caavcceribgnkvivlgvf","cgxzjrscpsoqomlqyuqp","ejsyvsypkeztuxcvtmvc","hfyvfhstodagsluufidc","hwqqunrnfzhahqrbuerc","iwhnavnmheccfotxmzzh","jhmzjrejejrdjqdyygom","ncldnokqdavbenytwggc","pqrmmtuxnruqvvnpipev","qmddssazmcpglsbnprkg","ttucgnlqxplwdokahjnv","uroshonbepzlqjxmcsne","utvmmxohhpajipplydsx","uydazmpuajwpplfgprgq","vedyfqpndblukjbjzobl","vegiwqtbfsjbvdiusdfw","vgmbitzeogemouvblwhv","vwqhnpcsxlrqfbwggalh","wdncgduahpcgkgjjoowr","zaerihlkxedinltbrbvo","zfveafjfuuegyewhozec","zpfjayiarutsanroyazt","zygcoldstkzvdgtkffky"],["aeppinuqdnorqjzcbnel","hfyvfhstodagsluufidc","iwhnavnmheccfotxmzzh","ttucgnlqxplwdokahjnv","utvmmxohhpajipplydsx","vtnjiocdkovvjqhqkhef","vwqhnpcsxlrqfbwggalh","wvydgwomgnbxfywvmnlq","zpfjayiarutsanroyazt"],["aeppinuqdnorqjzcbnel","bgnkxnooovtxtuuolbgv","cgxzjrscpsoqomlqyuqp","hfyvfhstodagsluufidc","hwqqunrnfzhahqrbuerc","iwhnavnmheccfotxmzzh","jhmzjrejejrdjqdyygom","jrugixifjqkrcwbeemkk","ncldnokqdavbenytwggc","ttucgnlqxplwdokahjnv","utvmmxohhpajipplydsx","vedyfqpndblukjbjzobl","vtnjiocdkovvjqhqkhef","vwqhnpcsxlrqfbwggalh","xzruhenwxgwlphbhdlcw","zaerihlkxedinltbrbvo","zygcoldstkzvdgtkffky"],["bxukjjvxmjzmpjvdsvua","caavcceribgnkvivlgvf","hfyvfhstodagsluufidc","jrugixifjqkrcwbeemkk","jtmiajedxnjxvjwnrbvx","qmddssazmcpglsbnprkg","ttucgnlqxplwdokahjnv","utvmmxohhpajipplydsx","vedyfqpndblukjbjzobl","vegiwqtbfsjbvdiusdfw","vfoqakwztjvjzeobbjfy","wvydgwomgnbxfywvmnlq","xzruhenwxgwlphbhdlcw","zaerihlkxedinltbrbvo"],["aeppinuqdnorqjzcbnel","atkaeidhizusppgcejau","awonvvslnwlgyigvospi","bgnkxnooovtxtuuolbgv","bxukjjvxmjzmpjvdsvua","caavcceribgnkvivlgvf","ejsyvsypkeztuxcvtmvc","ezcqwfbsygyqrxoujjpe","hfyvfhstodagsluufidc","hwqqunrnfzhahqrbuerc","iwhnavnmheccfotxmzzh","jhmzjrejejrdjqdyygom","jrugixifjqkrcwbeemkk","qmddssazmcpglsbnprkg","swqgwomcxacjxtogxjnf","uroshonbepzlqjxmcsne","utvmmxohhpajipplydsx","uydazmpuajwpplfgprgq","vegiwqtbfsjbvdiusdfw","vgmbitzeogemouvblwhv","vtnjiocdkovvjqhqkhef","vwqhnpcsxlrqfbwggalh","wdncgduahpcgkgjjoowr","wvydgwomgnbxfywvmnlq","xzruhenwxgwlphbhdlcw","zaerihlkxedinltbrbvo","zfveafjfuuegyewhozec","zpfjayiarutsanroyazt"],["aeppinuqdnorqjzcbnel","atkaeidhizusppgcejau","awonvvslnwlgyigvospi","bgnkxnooovtxtuuolbgv","caavcceribgnkvivlgvf","cgxzjrscpsoqomlqyuqp","ejsyvsypkeztuxcvtmvc","ezcqwfbsygyqrxoujjpe","hfyvfhstodagsluufidc","hwqqunrnfzhahqrbuerc","iwhnavnmheccfotxmzzh","jhmzjrejejrdjqdyygom","jtmiajedxnjxvjwnrbvx","ncldnokqdavbenytwggc","pqrmmtuxnruqvvnpipev","swqgwomcxacjxtogxjnf","ttucgnlqxplwdokahjnv","uroshonbepzlqjxmcsne","utvmmxohhpajipplydsx","uydazmpuajwpplfgprgq","vedyfqpndblukjbjzobl","vegiwqtbfsjbvdiusdfw","vgmbitzeogemouvblwhv","vtnjiocdkovvjqhqkhef","wdncgduahpcgkgjjoowr","wvydgwomgnbxfywvmnlq","xzruhenwxgwlphbhdlcw","zfveafjfuuegyewhozec","zpfjayiarutsanroyazt","zygcoldstkzvdgtkffky"],["aeppinuqdnorqjzcbnel","atkaeidhizusppgcejau","bxukjjvxmjzmpjvdsvua","caavcceribgnkvivlgvf","cgxzjrscpsoqomlqyuqp","ezcqwfbsygyqrxoujjpe","jhmzjrejejrdjqdyygom","jrugixifjqkrcwbeemkk","pqrmmtuxnruqvvnpipev","qmddssazmcpglsbnprkg","swqgwomcxacjxtogxjnf","ttucgnlqxplwdokahjnv","utvmmxohhpajipplydsx","uydazmpuajwpplfgprgq","vedyfqpndblukjbjzobl","vgmbitzeogemouvblwhv","vtnjiocdkovvjqhqkhef","vwqhnpcsxlrqfbwggalh","wdncgduahpcgkgjjoowr","wvydgwomgnbxfywvmnlq","zpfjayiarutsanroyazt"],["ejsyvsypkeztuxcvtmvc","zaerihlkxedinltbrbvo","zfveafjfuuegyewhozec"],["atkaeidhizusppgcejau","caavcceribgnkvivlgvf","cgxzjrscpsoqomlqyuqp","ejsyvsypkeztuxcvtmvc","ezcqwfbsygyqrxoujjpe","ncldnokqdavbenytwggc","qmddssazmcpglsbnprkg","uroshonbepzlqjxmcsne","vegiwqtbfsjbvdiusdfw","vwqhnpcsxlrqfbwggalh"],["atkaeidhizusppgcejau","awonvvslnwlgyigvospi","cgxzjrscpsoqomlqyuqp","ejsyvsypkeztuxcvtmvc","ezcqwfbsygyqrxoujjpe","hfyvfhstodagsluufidc","hwqqunrnfzhahqrbuerc","jhmzjrejejrdjqdyygom","jrugixifjqkrcwbeemkk","jtmiajedxnjxvjwnrbvx","ncldnokqdavbenytwggc","pqrmmtuxnruqvvnpipev","qmddssazmcpglsbnprkg","swqgwomcxacjxtogxjnf","ttucgnlqxplwdokahjnv","uroshonbepzlqjxmcsne","utvmmxohhpajipplydsx","uydazmpuajwpplfgprgq","vedyfqpndblukjbjzobl","vfoqakwztjvjzeobbjfy","vgmbitzeogemouvblwhv","vtnjiocdkovvjqhqkhef","vwqhnpcsxlrqfbwggalh","wdncgduahpcgkgjjoowr","xzruhenwxgwlphbhdlcw","zfveafjfuuegyewhozec","zpfjayiarutsanroyazt","zygcoldstkzvdgtkffky"],["aeppinuqdnorqjzcbnel","caavcceribgnkvivlgvf","cgxzjrscpsoqomlqyuqp","ezcqwfbsygyqrxoujjpe","hfyvfhstodagsluufidc","hwqqunrnfzhahqrbuerc","iwhnavnmheccfotxmzzh","jhmzjrejejrdjqdyygom","jrugixifjqkrcwbeemkk","pqrmmtuxnruqvvnpipev","qmddssazmcpglsbnprkg","swqgwomcxacjxtogxjnf","ttucgnlqxplwdokahjnv","uroshonbepzlqjxmcsne","utvmmxohhpajipplydsx","vedyfqpndblukjbjzobl","vegiwqtbfsjbvdiusdfw","vfoqakwztjvjzeobbjfy","vgmbitzeogemouvblwhv","vwqhnpcsxlrqfbwggalh","wdncgduahpcgkgjjoowr","wvydgwomgnbxfywvmnlq","zaerihlkxedinltbrbvo","zfveafjfuuegyewhozec"],["awonvvslnwlgyigvospi","bgnkxnooovtxtuuolbgv","caavcceribgnkvivlgvf","ezcqwfbsygyqrxoujjpe","hfyvfhstodagsluufidc","hwqqunrnfzhahqrbuerc","iwhnavnmheccfotxmzzh","jhmzjrejejrdjqdyygom","qmddssazmcpglsbnprkg","ttucgnlqxplwdokahjnv","utvmmxohhpajipplydsx","uydazmpuajwpplfgprgq","vedyfqpndblukjbjzobl","vegiwqtbfsjbvdiusdfw","vwqhnpcsxlrqfbwggalh","wvydgwomgnbxfywvmnlq","zaerihlkxedinltbrbvo","zpfjayiarutsanroyazt","zygcoldstkzvdgtkffky"],["aeppinuqdnorqjzcbnel","atkaeidhizusppgcejau","bgnkxnooovtxtuuolbgv","cgxzjrscpsoqomlqyuqp","ejsyvsypkeztuxcvtmvc","ezcqwfbsygyqrxoujjpe","hwqqunrnfzhahqrbuerc","iwhnavnmheccfotxmzzh","jrugixifjqkrcwbeemkk","jtmiajedxnjxvjwnrbvx","ncldnokqdavbenytwggc","qmddssazmcpglsbnprkg","swqgwomcxacjxtogxjnf","ttucgnlqxplwdokahjnv","uroshonbepzlqjxmcsne","utvmmxohhpajipplydsx","uydazmpuajwpplfgprgq","vedyfqpndblukjbjzobl","vtnjiocdkovvjqhqkhef","vwqhnpcsxlrqfbwggalh","wdncgduahpcgkgjjoowr","wvydgwomgnbxfywvmnlq","xzruhenwxgwlphbhdlcw","zaerihlkxedinltbrbvo","zfveafjfuuegyewhozec","zpfjayiarutsanroyazt","zygcoldstkzvdgtkffky"]]));

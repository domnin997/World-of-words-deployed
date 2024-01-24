function validatePass () {
  const defects = calcPassStrength(passInput.value);
  let strength = 100;
  passTips.innerHTML = '';
  defects.forEach((defect) => {
    if (!defect) {return};
    strength -= defect.decrease;
    const message = document.createElement('li');
          message.innerHTML = defect.message;
          passTips.append(message);
  })

  if (strength <= 50) {
    passLvl.innerText = `Ненадежный пароль. Безопасность: ${strength}%`;
  } else if (50 < strength && strength < 100) {
    passLvl.innerText = `Средний пароль. Безопасность: ${strength}%`;
  } else {
    passLvl.innerText = `Надежный пароль. Безопасность: ${strength}%`;
  }

  toggleColor(strength);
}

function calcPassStrength (pass) {
    const defects = [];
    defects.push(checkLength(pass));
    defects.push(checkLowerCase(pass));
    defects.push(checkUpperCase(pass));
    defects.push(checkNums(pass));
    defects.push(checkSymbols(pass));
    return defects;
}

function checkLength (pass) {
  if (pass.length <= 8) {
    return {
      message: 'Используйте более 8 символов.',
      decrease: 60,
    }
  }
}

function checkCharacters (pass, regex, type) {
    const result = pass.match(regex) || [];
    if (result.length === 0) {
        return {
            message: `Пароль не содержит ${type}`,
            decrease: 10,
        }
    }
    if (result.length < 2) {
        return {
            message: `Рекомендуем использовать от двух ${type}`,
            decrease: 5,
        }
    }
}

function checkNums (pass) {
    return checkCharacters (pass, /[0-9]/g, 'цифр');
}
function checkUpperCase (pass) {
    return checkCharacters (pass, /[A-ZА-ЯЁ]/g, 'больших букв');
}
function checkLowerCase (pass) {
    return checkCharacters (pass, /[a-zа-яё]/g, 'маленьких букв');
}
function checkSymbols (pass) {
    return checkCharacters (pass, /[^a-zа-яёA-ZА-ЯЁ0-9\s]/g, 'символов');
}
function toggleColor (score) {
    if (score === 100) {
        passInput.classList.remove('weak','medium');
        passInput.classList.add('good');
    } else if (50 < score && score <= 99) {
        passInput.classList.remove('good','weak');
        passInput.classList.add('medium');
    } else {
        passInput.classList.remove('good','medium');
        passInput.classList.add('weak');
    }
}

passInput.addEventListener('input',  validatePass);
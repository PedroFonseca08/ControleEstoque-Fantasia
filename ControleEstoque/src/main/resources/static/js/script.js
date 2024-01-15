function openModalCliente() {
    var modal = document.getElementById('modalCliente');
    var overlay = document.getElementById('overlay');

    // Remova a classe 'active' para reiniciar a transição
    modal.classList.remove('active');

    modal.style.display = 'block';
    overlay.style.display = 'block';

    // Adicione a classe 'active' após um pequeno atraso para acionar a transição
    setTimeout(function () {
        modal.classList.add('active');
    }, 50);
}


function closeModalCliente() {
    document.getElementById('modalCliente').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function closeModalEditarCliente() {
    document.getElementById('modalEditarCliente').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';

    // Faça uma solicitação AJAX para atualizar o valor no banco de dados
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                // Sucesso ao atualizar no banco de dados
                console.log('Valor atualizado com sucesso.');
            } else {
            }
        }
    };

    xhr.open('GET', '/principal', true);
    xhr.send();
}
function openModalInfoCliente(clienteId) {
    // Fazer uma solicitação AJAX para obter as informações do cliente
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                // Preencha as informações no modal com os dados do cliente
                var clienteInfo = JSON.parse(xhr.responseText);

                // Verificar se o objeto clienteInfo não é nulo ou indefinido
                if (clienteInfo) {
                    document.getElementById('info-nome').innerText = clienteInfo.nomeCliente;
                    document.getElementById('info-cpf').innerText = clienteInfo.cpfCliente;
                    document.getElementById('info-rg').innerText = clienteInfo.rgCliente || 'Vazio';
                    document.getElementById('info-dataNasc').innerText = clienteInfo.dataNascCliente || 'Vazio';
                    document.getElementById('info-cep').innerText = clienteInfo.cepCliente || 'Vazio';
                    document.getElementById('info-end').innerText = clienteInfo.endCliente;
                    document.getElementById('info-tel').innerText = clienteInfo.telCliente;
                    document.getElementById('info-obs').innerText = clienteInfo.observacaoCliente || 'Nenhuma Observação';

                    // Exibir o modal
                    var modal = document.getElementById('modalInfoCliente');
                    var overlay = document.getElementById('overlay');

                    modal.classList.remove('active');
                    modal.style.display = 'block';
                    overlay.style.display = 'block';

                    setTimeout(function () {
                        modal.classList.add('active');
                    }, 50);
                } else {
                    // Lidar com o cenário em que o objeto clienteInfo é nulo ou indefinido
                    console.error('Objeto clienteInfo não foi retornado corretamente.');
                }
            } else {
                // Lidar com erros, se necessário
                console.error('Erro ao obter informações do cliente');
            }
        }
    };

    xhr.open("GET", "/" + clienteId, true);
    xhr.send();
}

function closeModalInfoCliente() {
    document.getElementById('modalInfoCliente').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function openModalFantasiaCliente(clienteId) {
    // Fazer uma solicitação AJAX para obter as informações do cliente
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                // Preencha as informações no modal com os dados do cliente
                var clienteInfo = JSON.parse(xhr.responseText);

                // Verificar se o objeto clienteInfo não é nulo ou indefinido
                if (clienteInfo) {
                    document.getElementById('info-f-nome').innerText = clienteInfo.nomeCliente;

                    var fantasiasContainer = document.getElementById('fantasiasContainer');
                    fantasiasContainer.innerHTML = ''; // Limpar conteúdo anterior

                    if (clienteInfo.fantasias && clienteInfo.fantasias.length > 0) {
                        for (var i = 0; i < clienteInfo.fantasias.length; i++) {
                            var fantasia = clienteInfo.fantasias[i];

                            // Verifique se fantasia.dataFimFantasia é nulo
                            var dataFim = fantasia.dataFimFantasia ? fantasia.dataFimFantasia : 'Vazio';

                            // Crie elementos HTML para exibir as informações da fantasia
                            var divFantasia = document.createElement('div');
                            divFantasia.innerHTML =
                                '<input type="checkbox" id="info-f-baixa" class="form-check-input input-like-checkbox" style="margin-right: 10px; margin-top: 0px"' + (fantasia.baixaFantasia === 'S' ? 'checked' : '') + ' onchange="handleBaixaFantasiaChange(' + fantasia.idFantasia + ')">' +
                                '<span id="info-f-nome" class="input-like" style="width: 300px; margin-right: 10px;">' + fantasia.nomeFantasia + '</span>' +
                                '<span id="info-f-tipo" class="input-like" style="width: 120px; margin-right: 10px;">' + (fantasia.tipoFantasia === 'C' ? 'Comprada' : 'Alugada') + '</span>' +
                                '<span id="info-f-dataI" class="input-like" style="width: 140px; margin-right: 10px;">' + fantasia.dataInicioFantasia + '</span>' +
                                '<span id="info-f-dataF" class="input-like" style="width: 140px; margin-right: 10px;">' + dataFim + '</span>' +
                                '<button type="button" class="info-button" onclick="deletarFantasia(' + fantasia.idFantasia + ')">' +
                                '<img src="/icones/remove.png" alt="Remover">' +
                                '</button>' +
                                '<span id="info-f-obs" class="input-like" style="width: 830px; margin-top: 5px;">' + fantasia.observacaoFantasia + '</span> </div>';

                            // Adicione a divFantasia ao fantasiasContainer
                            fantasiasContainer.appendChild(divFantasia);

                            // Adicione um elemento de quebra de linha para separar as fantasias
                            fantasiasContainer.appendChild(document.createElement('br'));
                        }

                    }

                    // Exibir o modal
                    var modal = document.getElementById('modalFantasiasCliente');
                    var overlay = document.getElementById('overlay');

                    modal.classList.remove('active');
                    modal.style.display = 'block';
                    overlay.style.display = 'block';

                    setTimeout(function () {
                        modal.classList.add('active');
                    }, 50);
                } else {
                    // Lidar com o cenário em que o objeto clienteInfo é nulo ou indefinido
                    console.error('Objeto clienteInfo não foi retornado corretamente.');
                }
            } else {
                // Lidar com erros, se necessário
                console.error('Erro ao obter informações do cliente');
            }
        }
    };

    xhr.open("GET", "/" + clienteId, true);
    xhr.send();
}

function closeModalFantasiasCliente() {
    document.getElementById('modalFantasiasCliente').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';

    var nomeFantasia = document.getElementById('nomeFantasia');
    var obsFantasia = document.getElementById('observacaoFantasia');
    var tipoFantasiaSelect = document.getElementById('tipoFantasia');
    var dataCompraFantasiaInput = document.getElementById('dataCompraFantasia');
    var dataInicioFantasiaInput = document.getElementById('dataInicioFantasia');
    var dataFimFantasiaInput = document.getElementById('dataFimFantasia');

    nomeFantasia.value = null;
    obsFantasia.value = null;
    tipoFantasiaSelect.value = null;
    dataCompraFantasiaInput.value = null;
    dataInicioFantasiaInput.value = null;
    dataFimFantasiaInput.value = null;

    // Ocultar campos de data
    document.getElementById('dataCompraFantasia-label').style.display = 'none';
    document.getElementById('dataCompraFantasia').style.display = 'none';
    document.getElementById('dataInicioFantasia-label').style.display = 'none';
    document.getElementById('dataInicioFantasia').style.display = 'none';
    document.getElementById('dataFimFantasia-label').style.display = 'none';
    document.getElementById('dataFimFantasia').style.display = 'none';
}


function closeModalFantasiasClienteParaFechar() {
    document.getElementById('modalFantasiasCliente').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';

    var nomeFantasia = document.getElementById('nomeFantasia');
    var obsFantasia = document.getElementById('observacaoFantasia');
    var tipoFantasiaSelect = document.getElementById('tipoFantasia');
    var dataCompraFantasiaInput = document.getElementById('dataCompraFantasia');
    var dataInicioFantasiaInput = document.getElementById('dataInicioFantasia');
    var dataFimFantasiaInput = document.getElementById('dataFimFantasia');
    nomeFantasia.value = null;
    obsFantasia.value = null;
    tipoFantasiaSelect.value = null;
    dataCompraFantasiaInput.value = null;
    dataInicioFantasiaInput.value = null;
    dataFimFantasiaInput.value = null;

    window.location.reload();
}

function validateAndSubmit() {
    var nome = document.getElementById('nome').value;
    var cpf = document.getElementById('cpf').value;
    var end = document.getElementById('end').value;
    var tel = document.getElementById('tel').value;

    // Realize a validação básica
    if (!nome || !cpf || !end || !tel) {
        alert('Por favor, preencha todos os campos obrigatórios. \n(Nome, CPF, endereço e Telefone)');
    } else {
        // Verifique se o cliente já existe antes de enviar o formulário
        checkClienteExistence(nome, cpf);
    }
}

function checkClienteExistence(nome, cpf) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                document.getElementById('clienteForm').submit();
            } else {
                alert('Cliente já existe com esse nome ou CPF');
            }
        }
    };

    // Substitua a URL abaixo pela URL real do seu endpoint que verifica a existência do cliente
    var url = '/verifica?nome=' + encodeURIComponent(nome) + '&cpf=' + encodeURIComponent(cpf);
    xhr.open('GET', url, true);
    xhr.send();
}

function deletarCliente(clienteId) {
    if (confirm("Tem certeza que deseja excluir este cliente?")) {
        window.location.href = '/delete/' + clienteId;
    }
}

function escondeCamposData() {
    var tipoFantasiaSelect = document.getElementById('tipoFantasia');
    var dataCompraFantasiaLabel = document.getElementById('dataCompraFantasia-label');
    var dataCompraFantasiaInput = document.getElementById('dataCompraFantasia');
    var dataInicioFantasiaLabel = document.getElementById('dataInicioFantasia-label');
    var dataInicioFantasiaInput = document.getElementById('dataInicioFantasia');
    var dataFimFantasiaLabel = document.getElementById('dataFimFantasia-label');
    var dataFimFantasiaInput = document.getElementById('dataFimFantasia');
    var botaoModalFantasia = document.getElementById('botaoModalFantasia');

    // Verificar a opção selecionada
    if (tipoFantasiaSelect.value === 'C') {
        // Se a opção for "compra", mostrar os campos relacionados
        dataCompraFantasiaLabel.style.display = '';
        dataCompraFantasiaInput.style.display = '';
        dataInicioFantasiaLabel.style.display = 'none';
        dataInicioFantasiaInput.style.display = 'none';
        dataFimFantasiaLabel.style.display = 'none';
        dataFimFantasiaInput.style.display = 'none';
        botaoModalFantasia.style.display = '';
        dataInicioFantasiaInput.value = null;
        dataFimFantasiaInput.value = null;
    } else if (tipoFantasiaSelect.value === 'A') {
        // Se a opção for "aluguel", mostrar os campos relacionados
        dataCompraFantasiaLabel.style.display = 'none';
        dataCompraFantasiaInput.style.display = 'none';
        dataInicioFantasiaLabel.style.display = '';
        dataInicioFantasiaInput.style.display = '';
        dataFimFantasiaLabel.style.display = '';
        dataFimFantasiaInput.style.display = '';
        botaoModalFantasia.style.display = '';
        dataCompraFantasiaInput.value = null;
    } else {
        // Se nenhuma opção específica for escolhida, ocultar todos os campos
        dataCompraFantasiaLabel.style.display = 'none';
        dataCompraFantasiaInput.style.display = 'none';
        dataInicioFantasiaLabel.style.display = 'none';
        dataInicioFantasiaInput.style.display = 'none';
        dataFimFantasiaLabel.style.display = 'none';
        dataFimFantasiaInput.style.display = 'none';
        botaoModalFantasia.style.display = 'none';
        dataCompraFantasiaInput.value = null;
        dataInicioFantasiaInput.value = null;
        dataFimFantasiaInput.value = null;
    }
}

function validateAndSubmitFantasia(clienteId) {
    var nomeFantasia = document.getElementById('nomeFantasia').value;
    var tipoFantasia = document.getElementById('tipoFantasia').value;

    // Realize a validação básica
    if (!nomeFantasia || tipoFantasia === 'noSelection') {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    } else {
        // Verifique o tipo de fantasia selecionado e ajuste os campos conforme necessário
        if (tipoFantasia === 'C') {
            var dataCompraFantasia = document.getElementById('dataCompraFantasia').value;
            if (!dataCompraFantasia) {
                alert('Por favor, informe a data de compra para a fantasia comprada.');
                return;
            }
        } else if (tipoFantasia === 'A') {
            var dataInicioFantasia = document.getElementById('dataInicioFantasia').value;
            var dataFimFantasia = document.getElementById('dataFimFantasia').value;

            if (!dataInicioFantasia || !dataFimFantasia) {
                alert('Por favor, informe as datas de início e fim para a fantasia de aluguel.');
                return;
            }
        }
    }

    var xhr = new XMLHttpRequest();

    // Defina a função de retorno de chamada
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                // Sucesso: Manipular a resposta (exibir no modal, etc.)
                var form = document.getElementById('fantasiaForm');
                var inputs = form.getElementsByTagName('input');

                for (var i = 0; i < inputs.length; i++) {
                    // Limpar o valor de cada campo de entrada
                    inputs[i].value = '';
                }
                updateFantasiasContainer(xhr.responseText);
            } else {
                // Erro: Manipular erros (se necessário)
                alert('Erro ao criar fantasia. Por favor, tente novamente.');
            }
        }
    };

    // Obtenha os dados do formulário
    var formData = new FormData(document.getElementById('fantasiaForm'));

    // Configure a requisição
    xhr.open('POST', '/createFantasia', true);
    xhr.send(formData);
    //document.getElementById('fantasiaForm').submit();
}

function updateFantasiasContainer(clienteId) {
    console.log('Cliente ID:', clienteId);
    closeModalFantasiasCliente()
    openModalFantasiaCliente(clienteId)
}

function handleBaixaFantasiaChange(fantasiaId) {
    var checkbox = document.getElementById('info-f-baixa');

    // Faça uma solicitação AJAX para atualizar o valor no banco de dados
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                // Sucesso ao atualizar no banco de dados
                console.log('Valor atualizado com sucesso.');
            } else {
                // Lidar com erros, se necessário
                console.error('Erro ao atualizar o valor no banco de dados.');
                // Desfazer a alteração na checkbox se a atualização falhar
                //checkbox.checked = !isChecked;
            }
        }
    };

    xhr.open("GET", "/atualizar-baixa-fantasia/" + fantasiaId, true);
    xhr.send();
}

function deletarFantasia(idFantasia) {
    // Confirme se o usuário realmente deseja excluir a fantasia
    var confirmacao = confirm("Tem certeza de que deseja excluir esta fantasia?");

    if (confirmacao) {
        // Faça uma solicitação para excluir a fantasia no backend (substitua pelo seu endpoint)
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    updateFantasiasContainer(xhr.responseText);
                } else {
                    // Ocorreu um erro ao excluir a fantasia
                    alert('Erro ao excluir a fantasia. Por favor, tente novamente.');
                }
            }
        };

        // Substitua 'seu/endpoint/excluirFantasia' pelo endpoint real para excluir a fantasia
        xhr.open('GET', '/excluirFantasia/' + idFantasia, true);
        xhr.send();
    }
}

function openModalEditarCliente(clienteId) {
    // Fazer uma solicitação AJAX para obter as informações do cliente
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                // Preencha as informações no modal com os dados do cliente
                var clienteInfo = JSON.parse(xhr.responseText);

                // Verificar se o objeto clienteInfo não é nulo ou indefinido
                if (clienteInfo) {
                    document.getElementById('nome-edit').value = clienteInfo.nomeCliente;
                    document.getElementById('cpf-edit').value = clienteInfo.cpfCliente;
                    document.getElementById('rg-edit').value = clienteInfo.rgCliente || 'Vazio';
                    document.getElementById('dataNasc-edit').value = clienteInfo.dataNascCliente || 'Vazio';
                    document.getElementById('cep-edit').value = clienteInfo.cepCliente || 'Vazio';
                    document.getElementById('end-edit').value = clienteInfo.endCliente;
                    document.getElementById('tel-edit').value = clienteInfo.telCliente;
                    document.getElementById('obs-edit').value = clienteInfo.observacaoCliente || 'Nenhuma Observação';

                    // Exibir o modal
                    var modal = document.getElementById('modalEditarCliente');
                    var overlay = document.getElementById('overlay');

                    modal.classList.remove('active');
                    modal.style.display = 'block';
                    overlay.style.display = 'block';

                    setTimeout(function () {
                        modal.classList.add('active');
                    }, 50);
                } else {
                    // Lidar com o cenário em que o objeto clienteInfo é nulo ou indefinido
                    console.error('Objeto clienteInfo não foi retornado corretamente.');
                }
            } else {
                // Lidar com erros, se necessário
                console.error('Erro ao obter informações do cliente');
            }
        }
    };

    xhr.open("GET", "/" + clienteId, true);
    xhr.send();
}

function validateAndSubmitEditar(){

    var nomeEdit = document.getElementById('nome-edit').value;
    var cpfEdit = document.getElementById('cpf-edit').value;

    // Faça uma solicitação AJAX para atualizar o valor no banco de dados
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                // Sucesso ao atualizar no banco de dados
                document.getElementById('clienteFormEditar').submit();
                console.log('Valor atualizado com sucesso.');
            } else {
                alert(xhr.responseText);
                // Lidar com erros, se necessário
                console.error('Erro ao atualizar o valor no banco de dados.');
                // Desfazer a alteração na checkbox se a atualização falhar
                //checkbox.checked = !isChecked;
            }
        }
    };

    var url = '/verificaEditar?nome=' + encodeURIComponent(nomeEdit) + '&cpf=' + encodeURIComponent(cpfEdit);
    xhr.open('GET', url, true);
    xhr.send();
}

function removeAccents(str) {
    // Função para remover acentos de uma string
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function searchClients() {
    // Obtenha o valor digitado no campo de busca
    var input = document.getElementById('searchInput');
    var filter = removeAccents(input.value.toUpperCase());

    // Obtenha a lista de clientes
    var table = document.querySelector('.table tbody');
    var rows = table.getElementsByTagName('tr');

    // Itere sobre as linhas da tabela e oculte aquelas que não correspondem à busca
    for (var i = 0; i < rows.length; i++) {
        var clientName = rows[i].querySelector('.client-name');
        var txtValue = removeAccents(clientName.textContent || clientName.innerText);

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
    }
}

function validateCPF(inputId) {
    var cpfInput = document.getElementById(inputId);
    var cpfValue = cpfInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (cpfValue.length !== 11 || isNaN(cpfValue)) {
        alert('CPF deve conter exatamente 11 dígitos numéricos.');
        cpfInput.value = ''; // Limpa o campo
    }
}

function validateRG(inputId) {
    var rgInput = document.getElementById(inputId);

    if (rgInput.value.length > 20) {
        rgInput.value = '';
        alert('O RG deve ter 20 dígitos no máximo.');
    }
}

function validateTel(inputId) {
    var telInput = document.getElementById(inputId);
    var telValue = telInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (telValue.length !== 11) {
        alert('Por favor, insira um número de telefone válido com 11 caracteres.');
        telInput.value = '';
    }
}

function validateCep(inputId) {
    var cepInput = document.getElementById(inputId);
    var cepValue = cepInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos

    // Se o comprimento do CEP for diferente de 9, limpe o campo
    if (cepValue.length !== 8) {
        cepInput.value = '';
        alert('O CEP deve ter 8 dígitos.');
    }
}

function validateEndereco(inputId) {
    var endInput = document.getElementById(inputId);

    if (endInput.value.length > 150) {
        endInput.value = '';
        alert('O endereço deve ter 150 caracteres no máximo.');
    }
}

function validateObs(inputId) {
    var obsInput = document.getElementById(inputId);

    if (obsInput.value.length > 200) {
        obsInput.value = '';
        alert('A observação deve ter 200 caracteres no máximo.');
    }
}

function validateNome(inputId) {
    var nomeInput = document.getElementById(inputId);

    if (nomeInput.value.length > 100) {
        nomeInput.value = '';
        alert('O nome deve ter 100 caracteres no máximo.');
    }
}

function validateFantasia(inputId) {
    var nomeInput = document.getElementById(inputId);

    if (nomeInput.value.length > 60) {
        nomeInput.value = '';
        alert('O nome da fantasia deve ter 60 caracteres no máximo.');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Função para formatar o CPF
    function formatCPF(cpfValue) {
        if (cpfValue.length <= 5) {
            // Formata os primeiros 3 dígitos
            return cpfValue.replace(/(\d{3})/, '$1.');
        } else if (cpfValue.length <= 8) {
            // Formata os primeiros 6 dígitos em grupos de 3
            return cpfValue.replace(/(\d{3})(\d{3})/, '$1.$2.');
        } else if (cpfValue.length <= 10) {
            // Formata os primeiros 9 dígitos em grupos de 3
            return cpfValue.replace(/(\d{3})(\d{3})(\d{3})/, '$1.$2.$3-');
        } else if (cpfValue.length <= 11) {
            // Formata os 11 dígitos completos
            return cpfValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        } else {
            // Limita a entrada a 11 dígitos mantendo a formatação correta
            return cpfValue.substring(0, 3) + '.' + cpfValue.substring(3, 6) + '.' + cpfValue.substring(6, 9) + '-' + cpfValue.substring(9, 11);
        }
    }

    // Aplica a formatação ao campo CPF
    var cpfInput = document.getElementById('cpf');
    cpfInput.addEventListener('input', function () {
        cpfInput.value = formatCPF(cpfInput.value.replace(/\D/g, ''));
    });

    // Aplica a formatação ao campo de edição de CPF (cpf-edit)
    var cpfEditInput = document.getElementById('cpf-edit');
    cpfEditInput.addEventListener('input', function () {
        cpfEditInput.value = formatCPF(cpfEditInput.value.replace(/\D/g, ''));
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // Função para formatar o CEP
    function formatCEP(cepValue) {
        if (cepValue.length <= 4) {
            // Formata os primeiros 5 dígitos
            return cepValue.replace(/(\d{5})/, '$1');
        } else if (cepValue.length <= 7) {
            // Formata os primeiros 5 dígitos
            return cepValue.replace(/(\d{5})/, '$1-');
        } else {
            // Adiciona o hífen após os 5 primeiros dígitos
            return cepValue.replace(/(\d{5})(\d{3})/, '$1-$2').substring(0, 9);
        }
    }

    // Aplica a formatação ao campo CEP
    var cepInput = document.getElementById('cep');
    cepInput.addEventListener('input', function () {
        cepInput.value = formatCEP(cepInput.value.replace(/\D/g, ''));
    });

    // Aplica a formatação ao campo de edição de CEP (cep-edit)
    var cepEditInput = document.getElementById('cep-edit');
    cepEditInput.addEventListener('input', function () {
        cepEditInput.value = formatCEP(cepEditInput.value.replace(/\D/g, ''));
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var telInput = document.getElementById('tel');
    var telEditInput = document.getElementById('tel-edit');
    var maxChars = 14; // Defina o número máximo de caracteres

    // Função para formatar o telefone
    function formatTel(telValue) {
        if (telValue.length >= 2) {
            // Adiciona os parênteses após os dois primeiros dígitos
            telValue = '(' + telValue.substring(0, 2) + ')' + telValue.substring(2);
        }

        if (telValue.length >= 9) {
            // Adiciona o hífen após os sete primeiros dígitos
            telValue = telValue.substring(0, 9) + '-' + telValue.substring(9);
        }

        // Limita o número máximo de caracteres
        if (telValue.length > maxChars) {
            telValue = telValue.substring(0, maxChars);
        }

        return telValue;
    }

    // Aplica a formatação ao campo telefone
    telInput.addEventListener('input', function () {
        telInput.value = formatTel(telInput.value.replace(/\D/g, ''));
    });

    // Aplica a formatação ao campo de edição de telefone (tel-edit)
    telEditInput.addEventListener('input', function () {
        telEditInput.value = formatTel(telEditInput.value.replace(/\D/g, ''));
    });
});

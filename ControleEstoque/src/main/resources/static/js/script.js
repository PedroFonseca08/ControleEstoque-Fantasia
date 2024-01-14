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

    window.location.reload();
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

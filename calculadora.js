// ============================= 
// VARIABLES GLOBALES
// ============================= 

const startScreen = document.getElementById("start-screen");
const topicsScreen = document.getElementById("topics-screen");
const calculatorView = document.getElementById("calculator-view");
const calculatorContent = document.getElementById("calculator-content");

let currentCalculator = null;

// ============================= 
// NAVEGACIÓN
// ============================= 

document.getElementById("btnStart").onclick = () => {
    startScreen.classList.add("hidden");
    topicsScreen.classList.remove("hidden");
};

function goHome() {
    calculatorView.classList.add("hidden");
    topicsScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
    currentCalculator = null;
}

function goBack() {
    calculatorView.classList.add("hidden");
    topicsScreen.classList.remove("hidden");
    currentCalculator = null;
}

function openCalculator(id) {
    currentCalculator = id;
    topicsScreen.classList.add("hidden");
    calculatorView.classList.remove("hidden");


    const selector = document.getElementById("selector-calculadoras");
    if (selector) selector.classList.add("hidden");

    
    // Cargar el contenido de la calculadora
    loadCalculatorContent(id);
}

// ============================= 
// CARGAR CONTENIDO DE CALCULADORAS
// ============================= 

function loadCalculatorContent(id) {
    let html = "";
    
    switch(id) {
        case 'media':
            html = getMediaHTML();
            break;
        case 'mediana':
            html = getMedianaHTML();
            break;
        case 'moda':
            html = getModaHTML();
            break;
        case 'tabla-frecuencia':
            html = getTablaFrecuenciaHTML();
            break;
        case 'varianza':
            html = getVarianzaHTML();
            break;
        case 'cuartiles':
            html = getCuartilesHTML();
            break;
        case 'deciles':
            html = getDecilesHTML();
            break;
        case 'percentiles':
            html = getPercentilesHTML();
            break;
        case 'regresion':
            html = getRegresionHTML();
            break;
        case 'regresion-multiple':
            html = getRegresionMultipleHTML();
            break;
        case 'ic':
            html = getICHTML();
            break;
        case 'correlacion':
            html = getCorrelacionHTML();
            break;
    }
    
    calculatorContent.innerHTML = html;
}

// ============================= 
// HTML DE CADA CALCULADORA
// ============================= 

function getMediaHTML() {
    return `
        <h2>📊 Calculadora de Media Aritmética</h2>
        
        <div class="form-group">
            <label>Ingresa los datos separados por comas:</label>
            <input type="text" id="datosMedia" placeholder="Ej: 10, 12, 14, 16, 18">
        </div>
        
        <button class="btn-calculate" onclick="calcularMedia()">Calcular Media</button>
        
        <div id="resultadoMedia"></div>
    `;
}

function getMedianaHTML() {
    return `
        <h2>📊 Calculadora de Mediana</h2>
        
        <div class="form-group">
            <label>Ingresa los datos separados por comas:</label>
            <input type="text" id="datosMediana" placeholder="Ej: 8, 10, 12, 14, 16">
        </div>
        
        <button class="btn-calculate" onclick="calcularMediana()">Calcular Mediana</button>
        
        <div id="resultadoMediana"></div>
    `;
}

function getModaHTML() {
    return `
        <h2>📊 Calculadora de Moda</h2>
        
        <div class="form-group">
            <label>Ingresa los datos separados por comas:</label>
            <input type="text" id="datosModa" placeholder="Ej: 5, 7, 7, 8, 9, 9, 9, 10">
        </div>
        
        <button class="btn-calculate" onclick="calcularModa()">Calcular Moda</button>
        
        <div id="resultadoModa"></div>
    `;
}

function getTablaFrecuenciaHTML() {
    return `
        <h2>📊 Calculadora de Tabla de Frecuencias</h2>
        
        <div class="form-group">
            <label>Tipo de datos:</label>
            <select id="tipoTabla" onchange="cambiarTipoTabla()">
                <option value="simple">Datos simples (sin intervalos)</option>
                <option value="intervalo">Datos agrupados (con intervalos)</option>
            </select>
        </div>
        
        <div id="contenedorSimple">
            <div class="form-group">
                <label>Ingresa los datos separados por comas:</label>
                <input type="text" id="datosSimples" placeholder="Ej: 5, 7, 5, 8, 9, 5, 7, 8, 9, 10">
            </div>
        </div>
        
        <div id="contenedorIntervalo" class="hidden">
            <div class="form-group">
                <label>Ingresa los datos separados por comas:</label>
                <input type="text" id="datosIntervalo" placeholder="Ej: 15, 23, 28, 31, 45, 52, 60, 18, 25, 33">
            </div>
            <div class="form-group">
                <label>Número de intervalos (clases):</label>
                <input type="number" id="numIntervalos" value="5" min="3" max="15">
            </div>
        </div>
        
        <button class="btn-calculate" onclick="calcularTablaFrecuencia()">Generar Tabla de Frecuencias</button>
        
        <div id="resultadoTablaFrecuencia"></div>
    `;
}
function getVarianzaHTML() {
    return `
        <h2>📊 Calculadora de Varianza y Desviación Estándar</h2>
        
        <div class="form-group">
            <label>Ingresa los datos separados por comas:</label>
            <input type="text" id="datosVarianza" placeholder="Ej: 10, 12, 14, 16, 18">
        </div>
        
        <button class="btn-calculate" onclick="calcularVarianza()">Calcular</button>
        
        <div id="resultadoVarianza"></div>
    `;
}

function getCuartilesHTML() {
    return `
        <h2>📊 Calculadora de Cuartiles</h2>
        
        <div class="form-group">
            <label>Ingresa los datos separados por comas:</label>
            <input type="text" id="datosCuartiles" placeholder="Ej: 10, 12, 15, 18, 20, 25, 30">
        </div>
        
        <button class="btn-calculate" onclick="calcularCuartiles()">Calcular Cuartiles</button>
        
        <div id="resultadoCuartiles"></div>
    `;
}
function getDecilesHTML() {
    return `
        <h2>📊 Calculadora de Deciles</h2>
        
        <div class="form-group">
            <label>Ingresa los datos separados por comas:</label>
            <input type="text" id="datosDeciles" placeholder="Ej: 10, 15, 20, 25, 30, 35, 40, 45, 50">
        </div>
        
        <button class="btn-calculate" onclick="calcularDeciles()">Calcular Deciles</button>
        
        <div id="resultadoDeciles"></div>
    `;
}
function getPercentilesHTML() {
    return `
        <h2>📊 Calculadora de Percentiles</h2>
        
        <div class="form-group">
            <label>Ingresa los datos separados por comas:</label>
            <input type="text" id="datosPercentiles" placeholder="Ej: 10, 15, 20, 25, 30, 35, 40, 45, 50">
        </div>
        
        <div class="form-group">
            <label>Percentil a calcular (1-99):</label>
            <input type="number" id="percentilValor" min="1" max="99" value="50" placeholder="Ej: 75">
        </div>
        
        <button class="btn-calculate" onclick="calcularPercentiles()">Calcular Percentil</button>
        
        <div id="resultadoPercentiles"></div>
    `;
}

function getRegresionHTML() {
    return `
        <h2>📊 Calculadora de Regresión Lineal Simple</h2>
        
        <div class="form-group">
            <label>Valores de X (separados por comas):</label>
            <input type="text" id="datosX" placeholder="Ej: 2, 3, 4, 5, 6">
        </div>
        
        <div class="form-group">
            <label>Valores de Y (separados por comas):</label>
            <input type="text" id="datosY" placeholder="Ej: 12, 14, 16, 17, 19">
        </div>
        
        <button class="btn-calculate" onclick="calcularRegresion()">Calcular Regresión</button>
        
        <div id="resultadoRegresion"></div>
    `;
}
function getRegresionMultipleHTML() {
    return `
        <h2>📊 Calculadora de Regresión Lineal Múltiple</h2>
        
        <div class="form-group">
            <label>Valores de X1 (separados por comas):</label>
            <input type="text" id="datosX1" placeholder="Ej: 1, 2, 3, 4, 5">
        </div>
        
        <div class="form-group">
            <label>Valores de X2 (separados por comas):</label>
            <input type="text" id="datosX2" placeholder="Ej: 2, 4, 6, 8, 10">
        </div>
        
        <div class="form-group">
            <label>Valores de Y (separados por comas):</label>
            <input type="text" id="datosYMult" placeholder="Ej: 5, 10, 15, 20, 25">
        </div>
        
        <button class="btn-calculate" onclick="calcularRegresionMultiple()">Calcular Regresión Múltiple</button>
        
        <div id="resultadoRegresionMultiple"></div>
    `;
}
function getICHTML() {
    return `
        <h2>📊 Calculadora de Intervalo de Confianza</h2>
        
        <div class="form-group">
            <label>Media muestral (x̄):</label>
            <input type="number" step="any" id="mediaIC" placeholder="Ej: 72">
        </div>
        
        <div class="form-group">
            <label>Desviación estándar (σ o s):</label>
            <input type="number" step="any" id="desvIC" placeholder="Ej: 8">
        </div>
        
        <div class="form-group">
            <label>Tamaño de muestra (n):</label>
            <input type="number" id="nIC" placeholder="Ej: 25">
        </div>
        
        <div class="form-group">
            <label>Nivel de confianza:</label>
            <select id="confianzaIC">
                <option value="90">90%</option>
                <option value="95" selected>95%</option>
                <option value="99">99%</option>
            </select>
        </div>
        
        <button class="btn-calculate" onclick="calcularIC()">Calcular Intervalo</button>
        
        <div id="resultadoIC"></div>
    `;
}

function getCorrelacionHTML() {
    return `
        <h2>📊 Calculadora de Coeficiente de Correlación</h2>
        
        <div class="form-group">
            <label>Valores de X (separados por comas):</label>
            <input type="text" id="datosXCorr" placeholder="Ej: 2, 3, 4, 5, 6">
        </div>
        
        <div class="form-group">
            <label>Valores de Y (separados por comas):</label>
            <input type="text" id="datosYCorr" placeholder="Ej: 12, 14, 16, 17, 19">
        </div>
        
        <button class="btn-calculate" onclick="calcularCorrelacion()">Calcular Correlación</button>
        
        <div id="resultadoCorrelacion"></div>
    `;
}

// ============================= 
// FUNCIONES DE CÁLCULO
// ============================= 

function calcularMedia() {
    try {
        const input = document.getElementById('datosMedia').value;
        const valores = input.split(',').map(v => parseFloat(v.trim())).filter(v => !isNaN(v));
        
        if (valores.length === 0) {
            throw new Error('No hay datos válidos');
        }
        
        const suma = valores.reduce((a, b) => a + b, 0);
        const media = suma / valores.length;
        
        const html = `
            <div class="result-box">
                <h3>✅ Resultados:</h3>
                <div class="result-item"><strong>Datos:</strong> ${valores.join(', ')}</div>
                <div class="result-item"><strong>Cantidad de datos (n):</strong> ${valores.length}</div>
                <div class="result-item"><strong>Suma total (Σx):</strong> ${suma}</div>
                <div class="result-highlight">
                    Media (x̄) = ${media.toFixed(4)}
                </div>
                <div class="result-item" style="margin-top: 20px;">
                    <strong>Fórmula:</strong> x̄ = Σx / n = ${suma} / ${valores.length} = ${media.toFixed(4)}
                </div>
            </div>
        `;
        
        document.getElementById('resultadoMedia').innerHTML = html;
        
    } catch (error) {
        document.getElementById('resultadoMedia').innerHTML = `
            <div class="error-box">❌ Error: ${error.message}</div>
        `;
    }
}

function calcularMediana() {
    try {
        const input = document.getElementById('datosMediana').value;
        const valores = input.split(',').map(v => parseFloat(v.trim())).filter(v => !isNaN(v));
        
        if (valores.length === 0) {
            throw new Error('No hay datos válidos');
        }
        
        const ordenados = [...valores].sort((a, b) => a - b);
        const n = ordenados.length;
        let mediana;
        let posicion;
        
        if (n % 2 === 0) {
            mediana = (ordenados[n/2 - 1] + ordenados[n/2]) / 2;
            posicion = `posiciones ${n/2} y ${n/2 + 1}`;
        } else {
            mediana = ordenados[Math.floor(n/2)];
            posicion = `posición ${Math.floor(n/2) + 1}`;
        }
        
        const html = `
            <div class="result-box">
                <h3>✅ Resultados:</h3>
                <div class="result-item"><strong>Datos ordenados:</strong> ${ordenados.join(', ')}</div>
                <div class="result-item"><strong>Cantidad de datos (n):</strong> ${n}</div>
                <div class="result-item"><strong>Posición central:</strong> ${posicion}</div>
                <div class="result-highlight">
                    Mediana = ${mediana.toFixed(4)}
                </div>
            </div>
        `;
        
        document.getElementById('resultadoMediana').innerHTML = html;
        
    } catch (error) {
        document.getElementById('resultadoMediana').innerHTML = `
            <div class="error-box">❌ Error: ${error.message}</div>
        `;
    }
}

function calcularModa() {
    try {
        const input = document.getElementById('datosModa').value;
        const valores = input.split(',').map(v => parseFloat(v.trim())).filter(v => !isNaN(v));
        
        if (valores.length === 0) {
            throw new Error('No hay datos válidos');
        }
        
        // Contar frecuencias
        const frecuencias = {};
        valores.forEach(v => {
            frecuencias[v] = (frecuencias[v] || 0) + 1;
        });
        
        // Encontrar la frecuencia máxima
        const maxFrecuencia = Math.max(...Object.values(frecuencias));
        
        // Encontrar todos los valores con la frecuencia máxima
        const modas = Object.keys(frecuencias).filter(k => frecuencias[k] === maxFrecuencia);
        
        let tipoModa = '';
        if (modas.length === valores.length) {
            tipoModa = 'No hay moda (todos los valores tienen la misma frecuencia)';
        } else if (modas.length === 1) {
            tipoModa = 'Unimodal (una sola moda)';
        } else if (modas.length === 2) {
            tipoModa = 'Bimodal (dos modas)';
        } else {
            tipoModa = 'Multimodal (más de dos modas)';
        }
        
        // Crear tabla de frecuencias
        let tablaHTML = '<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">';
        tablaHTML += '<tr style="background: #296adf; color: white;"><th style="padding: 10px; border: 1px solid #ddd;">Valor</th><th style="padding: 10px; border: 1px solid #ddd;">Frecuencia</th></tr>';
        
        Object.keys(frecuencias).sort((a, b) => a - b).forEach(valor => {
            const esModal = modas.includes(valor);
            const bgColor = esModal ? '#ffeb3b' : 'white';
            tablaHTML += `<tr style="background: ${bgColor};"><td style="padding: 10px; border: 1px solid #ddd; text-align: center;">${valor}</td><td style="padding: 10px; border: 1px solid #ddd; text-align: center;">${frecuencias[valor]}</td></tr>`;
        });
        
        tablaHTML += '</table>';
        
        const html = `
            <div class="result-box">
                <h3>✅ Resultados:</h3>
                <div class="result-item"><strong>Datos:</strong> ${valores.join(', ')}</div>
                <div class="result-item"><strong>Tipo:</strong> ${tipoModa}</div>
                <div class="result-highlight">
                    Moda(s) = ${modas.join(', ')}
                </div>
                <div class="result-item"><strong>Frecuencia máxima:</strong> ${maxFrecuencia}</div>
                <h3 style="margin-top: 20px;">Tabla de Frecuencias:</h3>
                ${tablaHTML}
            </div>
        `;
        
        document.getElementById('resultadoModa').innerHTML = html;
        
    } catch (error) {
        document.getElementById('resultadoModa').innerHTML = `
            <div class="error-box">❌ Error: ${error.message}</div>
        `;
    }
}
function cambiarTipoTabla() {
    const tipo = document.getElementById('tipoTabla').value;
    const contenedorSimple = document.getElementById('contenedorSimple');
    const contenedorIntervalo = document.getElementById('contenedorIntervalo');
    
    if (tipo === 'simple') {
        contenedorSimple.classList.remove('hidden');
        contenedorIntervalo.classList.add('hidden');
    } else {
        contenedorSimple.classList.add('hidden');
        contenedorIntervalo.classList.remove('hidden');
    }
}

function calcularTablaFrecuencia() {
    try {
        const tipo = document.getElementById('tipoTabla').value;
        
        if (tipo === 'simple') {
            calcularTablaSimple();
        } else {
            calcularTablaIntervalos();
        }
        
    } catch (error) {
        document.getElementById('resultadoTablaFrecuencia').innerHTML = `
            <div class="error-box">❌ Error: ${error.message}</div>
        `;
    }
}

// ========================================
// TABLA DE FRECUENCIAS PARA DATOS SIMPLES
// ========================================
function calcularTablaSimple() {
    const input = document.getElementById('datosSimples').value;
    const valores = input.split(',').map(v => parseFloat(v.trim())).filter(v => !isNaN(v));
    
    if (valores.length === 0) {
        throw new Error('No hay datos válidos');
    }
    
    const n = valores.length;
    
    // Contar frecuencias
    const frecuencias = {};
    valores.forEach(v => {
        frecuencias[v] = (frecuencias[v] || 0) + 1;
    });
    
    // Ordenar valores
    const valoresUnicos = Object.keys(frecuencias).map(k => parseFloat(k)).sort((a, b) => a - b);
    
    // Construir tabla con cálculos acumulados
    let tablaData = [];
    let freqAcum = 0;
    let freqRelAcum = 0;
    let sumXF = 0;
    
    valoresUnicos.forEach(valor => {
        const fi = frecuencias[valor];
        freqAcum += fi;
        const freqRel = fi / n;
        freqRelAcum += freqRel;
        const xf = valor * fi;
        sumXF += xf;
        
        tablaData.push({
            valor: valor,
            fi: fi,
            Fi: freqAcum,
            hi: freqRel,
            Hi: freqRelAcum,
            xf: xf
        });
    });
    
    // Calcular estadísticos
    const media = sumXF / n;
    
    // Mediana
    let mediana;
    const ordenados = [...valores].sort((a, b) => a - b);
    if (n % 2 === 0) {
        mediana = (ordenados[n/2 - 1] + ordenados[n/2]) / 2;
    } else {
        mediana = ordenados[Math.floor(n/2)];
    }
    
    // Moda
    const maxFreq = Math.max(...Object.values(frecuencias));
    const modas = valoresUnicos.filter(v => frecuencias[v] === maxFreq);
    
    // Varianza y desviación
    let sumCuadrados = 0;
    tablaData.forEach(row => {
        sumCuadrados += row.fi * Math.pow(row.valor - media, 2);
    });
    const varianza = sumCuadrados / n;
    const desviacion = Math.sqrt(varianza);
    
    // Crear tabla HTML
    let tablaHTML = '<table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 13px;">';
    tablaHTML += `
        <tr style="background: #296adf; color: white;">
            <th style="padding: 10px; border: 1px solid #ddd;">Xi (Valor)</th>
            <th style="padding: 10px; border: 1px solid #ddd;">fi (Frecuencia)</th>
            <th style="padding: 10px; border: 1px solid #ddd;">Fi (Frec. Acum.)</th>
            <th style="padding: 10px; border: 1px solid #ddd;">hi (Frec. Rel.)</th>
            <th style="padding: 10px; border: 1px solid #ddd;">Hi (Frec. Rel. Acum.)</th>
            <th style="padding: 10px; border: 1px solid #ddd;">Xi·fi</th>
        </tr>
    `;
    
    tablaData.forEach(row => {
        const esModal = modas.includes(row.valor);
        const bgColor = esModal ? '#ffeb3b' : 'white';
        tablaHTML += `
            <tr style="background: ${bgColor};">
                <td style="padding: 10px; border: 1px solid #ddd; text-align: center; font-weight: bold;">${row.valor}</td>
                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">${row.fi}</td>
                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">${row.Fi}</td>
                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">${row.hi.toFixed(4)}</td>
                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">${row.Hi.toFixed(4)}</td>
                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">${row.xf.toFixed(2)}</td>
            </tr>
        `;
    });
    
    tablaHTML += `
        <tr style="background: #e3f2fd; font-weight: bold;">
            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">TOTAL</td>
            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">${n}</td>
            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">-</td>
            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">1.0000</td>
            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">-</td>
            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">${sumXF.toFixed(2)}</td>
        </tr>
    `;
    tablaHTML += '</table>';
    
    // Gráfico de barras
    const maxFreqValue = Math.max(...tablaData.map(r => r.fi));
    let graficoHTML = '<div style="display: flex; align-items: flex-end; justify-content: space-around; height: 250px; padding: 20px; border-bottom: 2px solid #333; background: white; border-radius: 8px; margin-top: 20px;">';
    
    tablaData.forEach(row => {
        const altura = (row.fi / maxFreqValue) * 200;
        const esModal = modas.includes(row.valor);
        const color = esModal ? '#ff9800' : '#2196f3';
        
        graficoHTML += `
            <div style="display: flex; flex-direction: column; align-items: center;">
                <div style="position: relative;">
                    <div style="position: absolute; bottom: 5px; width: 50px; text-align: center; font-weight: bold; color: white; font-size: 14px;">${row.fi}</div>
                    <div style="width: 50px; height: ${altura}px; background: ${color}; border-radius: 5px 5px 0 0; transition: all 0.3s;"></div>
                </div>
                <div style="margin-top: 10px; font-weight: bold; color: #333;">${row.valor}</div>
            </div>
        `;
    });
    graficoHTML += '</div>';
    
    const html = `
        <div class="result-box">
            <h3>✅ Tabla de Frecuencias (Datos Simples)</h3>
            <div class="result-item"><strong>Datos originales:</strong> ${valores.join(', ')}</div>
            <div class="result-item"><strong>Tamaño de muestra (n):</strong> ${n}</div>
            
            ${tablaHTML}
            
            <h3 style="color: #296adf; margin-top: 30px;">📊 Medidas de Tendencia Central</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-top: 15px;">
                <div style="background: linear-gradient(135deg, #4caf50, #66bb6a); color: white; padding: 20px; border-radius: 10px; text-align: center;">
                    <h4 style="margin: 0; font-size: 16px;">Media (x̄)</h4>
                    <p style="font-size: 32px; font-weight: bold; margin: 10px 0;">${media.toFixed(4)}</p>
                </div>
                <div style="background: linear-gradient(135deg, #2196f3, #42a5f5); color: white; padding: 20px; border-radius: 10px; text-align: center;">
                    <h4 style="margin: 0; font-size: 16px;">Mediana (Me)</h4>
                    <p style="font-size: 32px; font-weight: bold; margin: 10px 0;">${mediana.toFixed(4)}</p>
                </div>
                <div style="background: linear-gradient(135deg, #ff9800, #ffa726); color: white; padding: 20px; border-radius: 10px; text-align: center;">
                    <h4 style="margin: 0; font-size: 16px;">Moda (Mo)</h4>
                    <p style="font-size: 32px; font-weight: bold; margin: 10px 0;">${modas.join(', ')}</p>
                </div>
            </div>
            
            <h3 style="color: #296adf; margin-top: 30px;">📈 Medidas de Dispersión</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-top: 15px;">
                <div style="background: white; padding: 20px; border-radius: 10px; border: 2px solid #9c27b0; text-align: center;">
                    <h4 style="color: #9c27b0; margin: 0; font-size: 16px;">Varianza (σ²)</h4>
                    <p style="font-size: 28px; font-weight: bold; margin: 10px 0; color: #9c27b0;">${varianza.toFixed(4)}</p>
                </div>
                <div style="background: white; padding: 20px; border-radius: 10px; border: 2px solid #e91e63; text-align: center;">
                    <h4 style="color: #e91e63; margin: 0; font-size: 16px;">Desv. Estándar (σ)</h4>
                    <p style="font-size: 28px; font-weight: bold; margin: 10px 0; color: #e91e63;">${desviacion.toFixed(4)}</p>
                </div>
            </div>
            
            <h3 style="color: #296adf; margin-top: 30px;">📊 Gráfico de Frecuencias</h3>
            ${graficoHTML}
            
            <div style="margin-top: 20px; padding: 15px; background: #fff3cd; border-radius: 8px; border-left: 4px solid #ffc107;">
                <strong>💡 Interpretación:</strong><br>
                • La media de ${media.toFixed(2)} representa el promedio de todos los datos<br>
                • La mediana ${mediana.toFixed(2)} divide los datos en dos mitades iguales<br>
                • La moda ${modas.join(', ')} es el valor que más se repite (${maxFreq} veces)<br>
                • ${modas.length === 1 ? 'Distribución unimodal' : modas.length === 2 ? 'Distribución bimodal' : 'Distribución multimodal'}
            </div>
        </div>
    `;
    
    document.getElementById('resultadoTablaFrecuencia').innerHTML = html;
}

// =============================================
// TABLA DE FRECUENCIAS PARA DATOS AGRUPADOS
// =============================================
function calcularTablaIntervalos() {
    const input = document.getElementById('datosIntervalo').value;
    const numIntervalos = parseInt(document.getElementById('numIntervalos').value);
    const valores = input.split(',').map(v => parseFloat(v.trim())).filter(v => !isNaN(v));
    
    if (valores.length === 0) {
        throw new Error('No hay datos válidos');
    }
    
    if (numIntervalos < 3 || numIntervalos > 15) {
        throw new Error('El número de intervalos debe estar entre 3 y 15');
    }
    
    const n = valores.length;
    const min = Math.min(...valores);
    const max = Math.max(...valores);
    const rango = max - min;
    const amplitud = Math.ceil(rango / numIntervalos);
    
    // Crear intervalos
    let intervalos = [];
    let limiteInferior = Math.floor(min);
    
    for (let i = 0; i < numIntervalos; i++) {
        const limiteSuperior = limiteInferior + amplitud;
        const marcaClase = (limiteInferior + limiteSuperior) / 2;
        
        // Contar frecuencia
        let fi = 0;
        valores.forEach(v => {
            if (i === numIntervalos - 1) {
                // Último intervalo incluye el límite superior
                if (v >= limiteInferior && v <= limiteSuperior) fi++;
            } else {
                if (v >= limiteInferior && v < limiteSuperior) fi++;
            }
        });
        
        intervalos.push({
            limInf: limiteInferior,
            limSup: limiteSuperior,
            mc: marcaClase,
            fi: fi
        });
        
        limiteInferior = limiteSuperior;
    }
    
    // Calcular frecuencias acumuladas
    let freqAcum = 0;
    let freqRelAcum = 0;
    let sumXF = 0;
    
    intervalos.forEach(intervalo => {
        freqAcum += intervalo.fi;
        intervalo.Fi = freqAcum;
        intervalo.hi = intervalo.fi / n;
        freqRelAcum += intervalo.hi;
        intervalo.Hi = freqRelAcum;
        intervalo.xf = intervalo.mc * intervalo.fi;
        sumXF += intervalo.xf;
    });
    
    // Calcular estadísticos
    const media = sumXF / n;
    
    // Mediana (clase mediana)
    const posMediana = n / 2;
    let claseMediana = intervalos.find(int => int.Fi >= posMediana);
    const FiAnterior = intervalos[intervalos.indexOf(claseMediana) - 1]?.Fi || 0;
    const mediana = claseMediana.limInf + ((posMediana - FiAnterior) / claseMediana.fi) * amplitud;
    
    // Moda (clase modal)
    const maxFreq = Math.max(...intervalos.map(int => int.fi));
    const claseModal = intervalos.find(int => int.fi === maxFreq);
    const indexModal = intervalos.indexOf(claseModal);
    const f0 = intervalos[indexModal - 1]?.fi || 0;
    const f2 = intervalos[indexModal + 1]?.fi || 0;
    const d1 = claseModal.fi - f0;
    const d2 = claseModal.fi - f2;
    const moda = claseModal.limInf + (d1 / (d1 + d2)) * amplitud;
    
    // Varianza y desviación
    let sumCuadrados = 0;
    intervalos.forEach(int => {
        sumCuadrados += int.fi * Math.pow(int.mc - media, 2);
    });
    const varianza = sumCuadrados / n;
    const desviacion = Math.sqrt(varianza);
    
    // Crear tabla HTML
    let tablaHTML = '<table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 12px;">';
    tablaHTML += `
        <tr style="background: #296adf; color: white;">
            <th style="padding: 8px; border: 1px solid #ddd;">Intervalo</th>
            <th style="padding: 8px; border: 1px solid #ddd;">Xi (Marca)</th>
            <th style="padding: 8px; border: 1px solid #ddd;">fi</th>
            <th style="padding: 8px; border: 1px solid #ddd;">Fi</th>
            <th style="padding: 8px; border: 1px solid #ddd;">hi</th>
            <th style="padding: 8px; border: 1px solid #ddd;">Hi</th>
            <th style="padding: 8px; border: 1px solid #ddd;">Xi·fi</th>
        </tr>
    `;
    
    intervalos.forEach(int => {
        const esModal = int.fi === maxFreq;
        const bgColor = esModal ? '#ffeb3b' : 'white';
        tablaHTML += `
            <tr style="background: ${bgColor};">
                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">[${int.limInf} - ${int.limSup}${intervalos.indexOf(int) === numIntervalos - 1 ? ']' : ')'}</td>
                <td style="padding: 8px; border: 1px solid #ddd; text-align: center; font-weight: bold;">${int.mc.toFixed(2)}</td>
                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${int.fi}</td>
                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${int.Fi}</td>
                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${int.hi.toFixed(4)}</td>
                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${int.Hi.toFixed(4)}</td>
                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${int.xf.toFixed(2)}</td>
            </tr>
        `;
    });
    
    tablaHTML += `
        <tr style="background: #e3f2fd; font-weight: bold;">
            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;" colspan="2">TOTAL</td>
            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${n}</td>
            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">-</td>
            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">1.0000</td>
            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">-</td>
            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${sumXF.toFixed(2)}</td>
        </tr>
    `;
    tablaHTML += '</table>';
    
    // Histograma
    let histogramaHTML = '<div style="display: flex; align-items: flex-end; justify-content: space-around; height: 250px; padding: 20px; border-bottom: 2px solid #333; background: white; border-radius: 8px; margin-top: 20px;">';
    
    intervalos.forEach(int => {
        const altura = (int.fi / maxFreq) * 200;
        const esModal = int.fi === maxFreq;
        const color = esModal ? '#ff9800' : '#2196f3';
        
        histogramaHTML += `
            <div style="display: flex; flex-direction: column; align-items: center; flex: 1; margin: 0 2px;">
                <div style="position: relative; width: 100%;">
                    <div style="position: absolute; bottom: 5px; width: 100%; text-align: center; font-weight: bold; color: white; font-size: 12px;">${int.fi}</div>
                    <div style="width: 100%; height: ${altura}px; background: ${color}; border: 1px solid #1976d2; transition: all 0.3s;"></div>
                </div>
                <div style="margin-top: 10px; font-size: 10px; text-align: center; color: #333;">[${int.limInf}-${int.limSup})</div>
            </div>
        `;
    });
    histogramaHTML += '</div>';
    
    const html = `
        <div class="result-box">
            <h3>✅ Tabla de Frecuencias (Datos Agrupados)</h3>
            <div class="result-item"><strong>Datos originales:</strong> ${valores.join(', ')}</div>
            <div class="result-item"><strong>Tamaño de muestra (n):</strong> ${n}</div>
            <div class="result-item"><strong>Rango:</strong> ${rango.toFixed(2)}</div>
            <div class="result-item"><strong>Número de intervalos:</strong> ${numIntervalos}</div>
            <div class="result-item"><strong>Amplitud de clase:</strong> ${amplitud}</div>
            
            ${tablaHTML}
            
            <h3 style="color: #296adf; margin-top: 30px;">📊 Medidas de Tendencia Central</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-top: 15px;">
                <div style="background: linear-gradient(135deg, #4caf50, #66bb6a); color: white; padding: 20px; border-radius: 10px; text-align: center;">
                    <h4 style="margin: 0; font-size: 16px;">Media (x̄)</h4>
                    <p style="font-size: 32px; font-weight: bold; margin: 10px 0;">${media.toFixed(4)}</p>
                </div>
                <div style="background: linear-gradient(135deg, #2196f3, #42a5f5); color: white; padding: 20px; border-radius: 10px; text-align: center;">
                    <h4 style="margin: 0; font-size: 16px;">Mediana (Me)</h4>
                    <p style="font-size: 32px; font-weight: bold; margin: 10px 0;">${mediana.toFixed(4)}</p>
                    <p style="font-size: 11px; margin: 0;">Clase: [${claseMediana.limInf}-${claseMediana.limSup})</p>
                </div>
                <div style="background: linear-gradient(135deg, #ff9800, #ffa726); color: white; padding: 20px; border-radius: 10px; text-align: center;">
                    <h4 style="margin: 0; font-size: 16px;">Moda (Mo)</h4>
                    <p style="font-size: 32px; font-weight: bold; margin: 10px 0;">${moda.toFixed(4)}</p>
                    <p style="font-size: 11px; margin: 0;">Clase: [${claseModal.limInf}-${claseModal.limSup})</p>
                </div>
            </div>
            
            <h3 style="color: #296adf; margin-top: 30px;">📈 Medidas de Dispersión</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-top: 15px;">
                <div style="background: white; padding: 20px; border-radius: 10px; border: 2px solid #9c27b0; text-align: center;">
                    <h4 style="color: #9c27b0; margin: 0; font-size: 16px;">Varianza (σ²)</h4>
                    <p style="font-size: 28px; font-weight: bold; margin: 10px 0; color: #9c27b0;">${varianza.toFixed(4)}</p>
                </div>
                <div style="background: white; padding: 20px; border-radius: 10px; border: 2px solid #e91e63; text-align: center;">
                    <h4 style="color: #e91e63; margin: 0; font-size: 16px;">Desv. Estándar (σ)</h4>
                    <p style="font-size: 28px; font-weight: bold; margin: 10px 0; color: #e91e63;">${desviacion.toFixed(4)}</p>
                </div>
            </div>
            
            <h3 style="color: #296adf; margin-top: 30px;">📊 Histograma</h3>
            ${histogramaHTML}
            
            <div style="margin-top: 20px; padding: 15px; background: #e8f5e9; border-radius: 8px; border-left: 4px solid #4caf50;">
                <strong>💡 Interpretación:</strong><br>
                • La clase modal [${claseModal.limInf}-${claseModal.limSup}) tiene la mayor frecuencia con ${maxFreq} datos<br>
                • El ${((claseModal.fi / n) * 100).toFixed(2)}% de los datos se encuentran en la clase modal<br>
                • La mediana ${mediana.toFixed(2)} indica que el 50% de los datos son menores a este valor<br>
                • La media ${media.toFixed(2)} representa el centro de gravedad de la distribución
            </div>
        </div>
    `;
    
    document.getElementById('resultadoTablaFrecuencia').innerHTML = html;
}
function calcularVarianza() {
    try {
        const input = document.getElementById('datosVarianza').value;
        const valores = input.split(',').map(v => parseFloat(v.trim())).filter(v => !isNaN(v));
        
        if (valores.length === 0) {
            throw new Error('No hay datos válidos');
        }
        
        const n = valores.length;
        const media = valores.reduce((a, b) => a + b, 0) / n;
        const sumaCuadrados = valores.reduce((sum, val) => sum + Math.pow(val - media, 2), 0);
        const varianza = sumaCuadrados / n;
        const desviacion = Math.sqrt(varianza);
        
        // Preparar datos para el gráfico
        const minVal = Math.min(...valores);
        const maxVal = Math.max(...valores);
        const rango = maxVal - minVal;
        
        // Configuración del gráfico
        const width = 500;
        const height = 250;
        const padding = 50;
        const graphWidth = width - 2 * padding;
        const barHeight = 40;
        
        // Crear gráfico de puntos en línea horizontal
        let puntosHTML = '';
        valores.forEach((val, i) => {
            const x = padding + ((val - minVal) / rango) * graphWidth;
            const desviacionDelPunto = Math.abs(val - media);
            const color = desviacionDelPunto <= desviacion ? '#4caf50' : '#ff9800';
            
            puntosHTML += `
                <circle cx="${x}" cy="125" r="8" fill="${color}" stroke="white" stroke-width="2" opacity="0.8"/>
                <text x="${x}" y="110" text-anchor="middle" font-size="10" fill="#666">${val}</text>
            `;
        });
        
        // Posiciones de media y desviación estándar
        const mediaX = padding + ((media - minVal) / rango) * graphWidth;
        const desvInfX = padding + ((Math.max(minVal, media - desviacion) - minVal) / rango) * graphWidth;
        const desvSupX = padding + ((Math.min(maxVal, media + desviacion) - minVal) / rango) * graphWidth;
        
        const html = `
            <div class="result-box">
                <h3>✅ Resultados:</h3>
                <div class="result-item"><strong>Datos:</strong> ${valores.join(', ')}</div>
                <div class="result-item"><strong>Cantidad (n):</strong> ${n}</div>
                <div class="result-item"><strong>Media (x̄):</strong> ${media.toFixed(4)}</div>
                <div class="result-item"><strong>Suma de cuadrados:</strong> ${sumaCuadrados.toFixed(4)}</div>
                <div class="result-highlight">
                    Varianza (σ²) = ${varianza.toFixed(4)}
                </div>
                <div class="result-highlight" style="margin-top: 10px;">
                    Desviación Estándar (σ) = ${desviacion.toFixed(4)}
                </div>
                <div class="result-item" style="margin-top: 20px;">
                    <strong>Fórmula:</strong> σ² = Σ(x - x̄)² / n
                </div>

                <!-- GRÁFICO DE DISPERSIÓN Y DESVIACIÓN -->
                <div style="margin-top: 30px; padding: 25px; background: white; border-radius: 12px; border: 2px solid #ddd;">
                    <h3 style="color: #296adf; margin-bottom: 20px; text-align: center;">📊 Visualización de Dispersión de Datos</h3>
                    
                    <svg width="100%" viewBox="0 0 ${width} ${height}" style="background: #f9f9f9; border-radius: 8px;">
                        <!-- Línea base -->
                        <line x1="${padding}" y1="125" x2="${width - padding}" y2="125" 
                              stroke="#999" stroke-width="2"/>
                        
                        <!-- Zona de desviación estándar (sombreada) -->
                        <rect x="${desvInfX}" y="100" width="${desvSupX - desvInfX}" height="50" 
                              fill="rgba(76, 175, 80, 0.2)" stroke="#4caf50" stroke-width="2" stroke-dasharray="5,5" rx="5"/>
                        
                        <!-- Línea de la media -->
                        <line x1="${mediaX}" y1="80" x2="${mediaX}" y2="170" 
                              stroke="#2196f3" stroke-width="3"/>
                        <circle cx="${mediaX}" cy="125" r="5" fill="#2196f3"/>
                        
                        <!-- Líneas de desviación estándar -->
                        <line x1="${desvInfX}" y1="90" x2="${desvInfX}" y2="160" 
                              stroke="#4caf50" stroke-width="2" stroke-dasharray="5,5"/>
                        <line x1="${desvSupX}" y1="90" x2="${desvSupX}" y2="160" 
                              stroke="#4caf50" stroke-width="2" stroke-dasharray="5,5"/>
                        
                        <!-- Puntos de datos -->
                        ${puntosHTML}
                        
                        <!-- Etiquetas -->
                        <text x="${mediaX}" y="75" text-anchor="middle" font-size="12" font-weight="bold" fill="#2196f3">
                            Media: ${media.toFixed(2)}
                        </text>
                        <text x="${desvInfX}" y="180" text-anchor="middle" font-size="10" fill="#4caf50">
                            -σ
                        </text>
                        <text x="${desvSupX}" y="180" text-anchor="middle" font-size="10" fill="#4caf50">
                            +σ
                        </text>
                        
                        <!-- Valores en los extremos -->
                        <text x="${padding}" y="200" text-anchor="middle" font-size="11" fill="#666">${minVal.toFixed(1)}</text>
                        <text x="${width - padding}" y="200" text-anchor="middle" font-size="11" fill="#666">${maxVal.toFixed(1)}</text>
                        
                        <!-- Flecha de rango de desviación -->
                        <line x1="${desvInfX}" y1="220" x2="${desvSupX}" y2="220" 
                              stroke="#4caf50" stroke-width="2" marker-start="url(#arrowLeft)" marker-end="url(#arrowRight)"/>
                        <text x="${(desvInfX + desvSupX) / 2}" y="235" text-anchor="middle" font-size="11" fill="#4caf50" font-weight="bold">
                            σ = ${desviacion.toFixed(2)}
                        </text>
                        
                        <!-- Definición de flechas -->
                        <defs>
                            <marker id="arrowLeft" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                                <polygon points="10,5 0,0 0,10" fill="#4caf50"/>
                            </marker>
                            <marker id="arrowRight" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                                <polygon points="0,5 10,0 10,10" fill="#4caf50"/>
                            </marker>
                        </defs>
                    </svg>
                    
                    <!-- Leyenda -->
                    <div style="display: flex; justify-content: center; gap: 25px; margin-top: 20px; font-size: 13px; flex-wrap: wrap;">
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <div style="width: 3px; height: 20px; background: #2196f3;"></div>
                            <span>Media (x̄)</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <div style="width: 20px; height: 20px; background: rgba(76, 175, 80, 0.3); border: 2px dashed #4caf50; border-radius: 3px;"></div>
                            <span>±1 Desviación estándar</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <div style="width: 15px; height: 15px; background: #4caf50; border-radius: 50%;"></div>
                            <span>Dentro de ±σ</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <div style="width: 15px; height: 15px; background: #ff9800; border-radius: 50%;"></div>
                            <span>Fuera de ±σ</span>
                        </div>
                    </div>

                    <!-- Tabla de desviaciones individuales -->
                    <div style="margin-top: 25px;">
                        <h4 style="color: #296adf; margin-bottom: 10px;">📋 Desviaciones Individuales</h4>
                        <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
                            <tr style="background: #296adf; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Valor (x)</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Desviación (x - x̄)</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Desviación²</th>
                            </tr>
                            ${valores.map(val => {
                                const desv = val - media;
                                const desv2 = Math.pow(desv, 2);
                                return `
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${val}</td>
                                        <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${desv.toFixed(4)}</td>
                                        <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${desv2.toFixed(4)}</td>
                                    </tr>
                                `;
                            }).join('')}
                            <tr style="background: #e3f2fd; font-weight: bold;">
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">Suma:</td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">-</td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${sumaCuadrados.toFixed(4)}</td>
                            </tr>
                        </table>
                    </div>

                    <!-- Interpretación -->
                    <div style="margin-top: 20px; padding: 15px; background: #e8f5e9; border-radius: 8px; border-left: 4px solid #4caf50;">
                        <strong>💡 Interpretación:</strong><br>
                        • La zona sombreada verde representa el rango de ±1 desviación estándar desde la media<br>
                        • El ${Math.round((valores.filter(v => Math.abs(v - media) <= desviacion).length / n) * 100)}% de los datos están dentro de ±1σ de la media<br>
                        • Los puntos verdes están dentro del rango normal, los naranjas son más extremos<br>
                        • Una desviación estándar ${desviacion < 1 ? 'pequeña' : desviacion < 5 ? 'moderada' : 'grande'} de ${desviacion.toFixed(2)} indica datos ${desviacion < 1 ? 'muy concentrados' : desviacion < 5 ? 'moderadamente dispersos' : 'muy dispersos'}
                    </div>
                </div>
            </div>
        `;
        
        document.getElementById('resultadoVarianza').innerHTML = html;
        
    } catch (error) {
        document.getElementById('resultadoVarianza').innerHTML = `
            <div class="error-box">❌ Error: ${error.message}</div>
        `;
    }
}
function calcularCuartiles() {
    try {
        const input = document.getElementById('datosCuartiles').value;
        const valores = input.split(',').map(v => parseFloat(v.trim())).filter(v => !isNaN(v));
        
        if (valores.length === 0) {
            throw new Error('No hay datos válidos');
        }
        
        const ordenados = [...valores].sort((a, b) => a - b);
        const n = ordenados.length;
        
        const calcularPercentil = (p) => {
            const pos = p * n / 100;
            if (Number.isInteger(pos)) {
                return (ordenados[pos - 1] + ordenados[pos]) / 2;
            } else {
                return ordenados[Math.ceil(pos) - 1];
            }
        };
        
        const Q1 = calcularPercentil(25);
        const Q2 = calcularPercentil(50);
        const Q3 = calcularPercentil(75);
        const min = ordenados[0];
        const max = ordenados[n - 1];
        const IQR = Q3 - Q1; // Rango intercuartílico
        
        // Configuración del Box Plot
        const width = 500;
        const height = 300;
        const padding = 60;
        const graphWidth = width - 2 * padding;
        const boxY = height / 2 - 30;
        const boxHeight = 60;
        
        const rango = max - min;
        const scale = (val) => padding + ((val - min) / rango) * graphWidth;
        
        const html = `
            <div class="result-box">
                <h3>✅ Resultados:</h3>
                <div class="result-item"><strong>Datos ordenados:</strong> ${ordenados.join(', ')}</div>
                <div class="result-item"><strong>Cantidad (n):</strong> ${n}</div>
                
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-top: 20px;">
                    <div style="background: white; padding: 20px; border-radius: 10px; border: 3px solid #2196f3; text-align: center;">
                        <h4 style="color: #2196f3; margin: 0;">Q1 (25%)</h4>
                        <p style="font-size: 28px; font-weight: bold; margin: 10px 0;">${Q1.toFixed(4)}</p>
                    </div>
                    <div style="background: white; padding: 20px; border-radius: 10px; border: 3px solid #4caf50; text-align: center;">
                        <h4 style="color: #4caf50; margin: 0;">Q2 (50%)</h4>
                        <p style="font-size: 28px; font-weight: bold; margin: 10px 0;">${Q2.toFixed(4)}</p>
                    </div>
                    <div style="background: white; padding: 20px; border-radius: 10px; border: 3px solid #ff9800; text-align: center;">
                        <h4 style="color: #ff9800; margin: 0;">Q3 (75%)</h4>
                        <p style="font-size: 28px; font-weight: bold; margin: 10px 0;">${Q3.toFixed(4)}</p>
                    </div>
                </div>
                
                <div class="result-item" style="margin-top: 20px;">
                    <strong>Interpretación:</strong><br>
                    - El 25% de los datos son ≤ ${Q1.toFixed(4)}<br>
                    - El 50% de los datos son ≤ ${Q2.toFixed(4)} (Mediana)<br>
                    - El 75% de los datos son ≤ ${Q3.toFixed(4)}
                </div>

                <!-- BOX PLOT (DIAGRAMA DE CAJA Y BIGOTES) -->
                <div style="margin-top: 30px; padding: 25px; background: white; border-radius: 12px; border: 2px solid #ddd;">
                    <h3 style="color: #296adf; margin-bottom: 20px; text-align: center;">📦 Diagrama de Caja y Bigotes (Box Plot)</h3>
                    
                    <svg width="100%" viewBox="0 0 ${width} ${height}" style="background: #f9f9f9; border-radius: 8px;">
                        <!-- Línea base horizontal -->
                        <line x1="${padding}" y1="${height - 40}" x2="${width - padding}" y2="${height - 40}" 
                              stroke="#333" stroke-width="2"/>
                        
                        <!-- Bigote izquierdo (mínimo a Q1) -->
                        <line x1="${scale(min)}" y1="${boxY + boxHeight/2}" x2="${scale(Q1)}" y2="${boxY + boxHeight/2}" 
                              stroke="#666" stroke-width="2"/>
                        <line x1="${scale(min)}" y1="${boxY + 15}" x2="${scale(min)}" y2="${boxY + boxHeight - 15}" 
                              stroke="#666" stroke-width="2"/>
                        
                        <!-- Caja (Q1 a Q3) -->
                        <rect x="${scale(Q1)}" y="${boxY}" width="${scale(Q3) - scale(Q1)}" height="${boxHeight}" 
                              fill="rgba(33, 150, 243, 0.3)" stroke="#2196f3" stroke-width="3" rx="5"/>
                        
                        <!-- Mediana (Q2) -->
                        <line x1="${scale(Q2)}" y1="${boxY}" x2="${scale(Q2)}" y2="${boxY + boxHeight}" 
                              stroke="#f44336" stroke-width="4"/>
                        
                        <!-- Bigote derecho (Q3 a máximo) -->
                        <line x1="${scale(Q3)}" y1="${boxY + boxHeight/2}" x2="${scale(max)}" y2="${boxY + boxHeight/2}" 
                              stroke="#666" stroke-width="2"/>
                        <line x1="${scale(max)}" y1="${boxY + 15}" x2="${scale(max)}" y2="${boxY + boxHeight - 15}" 
                              stroke="#666" stroke-width="2"/>
                        
                        <!-- Marcadores en la línea base -->
                        ${[min, Q1, Q2, Q3, max].map(val => `
                            <line x1="${scale(val)}" y1="${height - 50}" x2="${scale(val)}" y2="${height - 30}" 
                                  stroke="#999" stroke-width="2"/>
                            <circle cx="${scale(val)}" cy="${height - 40}" r="4" fill="#333"/>
                        `).join('')}
                        
                        <!-- Etiquetas -->
                        <text x="${scale(min)}" y="${height - 10}" text-anchor="middle" font-size="11" fill="#666" font-weight="bold">
                            Min: ${min.toFixed(2)}
                        </text>
                        <text x="${scale(Q1)}" y="${boxY - 10}" text-anchor="middle" font-size="12" fill="#2196f3" font-weight="bold">
                            Q1: ${Q1.toFixed(2)}
                        </text>
                        <text x="${scale(Q2)}" y="${boxY + boxHeight + 20}" text-anchor="middle" font-size="12" fill="#f44336" font-weight="bold">
                            Q2: ${Q2.toFixed(2)}
                        </text>
                        <text x="${scale(Q3)}" y="${boxY - 10}" text-anchor="middle" font-size="12" fill="#2196f3" font-weight="bold">
                            Q3: ${Q3.toFixed(2)}
                        </text>
                        <text x="${scale(max)}" y="${height - 10}" text-anchor="middle" font-size="11" fill="#666" font-weight="bold">
                            Max: ${max.toFixed(2)}
                        </text>
                        
                        <!-- IQR (Rango Intercuartílico) -->
                        <line x1="${scale(Q1)}" y1="${boxY + boxHeight + 35}" x2="${scale(Q3)}" y2="${boxY + boxHeight + 35}" 
                              stroke="#ff9800" stroke-width="3" marker-start="url(#arrowL)" marker-end="url(#arrowR)"/>
                        <text x="${(scale(Q1) + scale(Q3)) / 2}" y="${boxY + boxHeight + 50}" text-anchor="middle" font-size="11" fill="#ff9800" font-weight="bold">
                            IQR = ${IQR.toFixed(2)}
                        </text>
                        
                        <!-- Definición de flechas -->
                        <defs>
                            <marker id="arrowL" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                                <polygon points="8,4 0,0 0,8" fill="#ff9800"/>
                            </marker>
                            <marker id="arrowR" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                                <polygon points="0,4 8,0 8,8" fill="#ff9800"/>
                            </marker>
                        </defs>
                    </svg>
                    
                    <!-- Leyenda -->
                    <div style="display: flex; justify-content: center; gap: 20px; margin-top: 20px; font-size: 13px; flex-wrap: wrap;">
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <div style="width: 20px; height: 20px; background: rgba(33, 150, 243, 0.3); border: 2px solid #2196f3; border-radius: 3px;"></div>
                            <span>Caja (Q1-Q3): 50% central</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <div style="width: 3px; height: 20px; background: #f44336;"></div>
                            <span>Mediana (Q2)</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <div style="width: 30px; height: 2px; background: #666;"></div>
                            <span>Bigotes (Min-Max)</span>
                        </div>
                    </div>

                    <!-- Información adicional -->
                    <div style="margin-top: 20px; padding: 15px; background: #fff3cd; border-radius: 8px; border-left: 4px solid #ffc107;">
                        <strong>📊 Información Estadística:</strong><br>
                        • <strong>Mínimo:</strong> ${min.toFixed(4)}<br>
                        • <strong>Máximo:</strong> ${max.toFixed(4)}<br>
                        • <strong>Rango:</strong> ${rango.toFixed(4)}<br>
                        • <strong>Rango Intercuartílico (IQR):</strong> ${IQR.toFixed(4)}<br>
                        • <strong>Datos en la caja:</strong> ${Math.round(n * 0.5)} valores (50% central)
                    </div>

                    <!-- Interpretación -->
                    <div style="margin-top: 15px; padding: 15px; background: #e8f5e9; border-radius: 8px; border-left: 4px solid #4caf50;">
                        <strong>💡 Cómo leer el Box Plot:</strong><br>
                        • La <strong>caja azul</strong> contiene el 50% central de los datos<br>
                        • La <strong>línea roja</strong> (mediana) divide los datos en dos mitades iguales<br>
                        • Los <strong>bigotes</strong> muestran la extensión de los datos (excluyendo valores atípicos)<br>
                        • El <strong>IQR</strong> (ancho de la caja) mide la dispersión de los datos centrales
                    </div>
                </div>
            </div>
        `;
        
        document.getElementById('resultadoCuartiles').innerHTML = html;
        
    } catch (error) {
        document.getElementById('resultadoCuartiles').innerHTML = `
            <div class="error-box">❌ Error: ${error.message}</div>
        `;
    }
}

function calcularDeciles() {
    try {
        const input = document.getElementById('datosDeciles').value;
        const valores = input.split(',').map(v => parseFloat(v.trim())).filter(v => !isNaN(v));
        
        if (valores.length === 0) {
            throw new Error('No hay datos válidos');
        }
        
        const ordenados = [...valores].sort((a, b) => a - b);
        const n = ordenados.length;
        
        const calcularPercentil = (p) => {
            const pos = p * n / 100;
            if (Number.isInteger(pos)) {
                return (ordenados[pos - 1] + ordenados[pos]) / 2;
            } else {
                return ordenados[Math.ceil(pos) - 1];
            }
        };
        
        // Calcular los 9 deciles
        const deciles = [];
        for (let i = 1; i <= 9; i++) {
            deciles.push({
                numero: i,
                percentil: i * 10,
                valor: calcularPercentil(i * 10)
            });
        }
        
        const min = ordenados[0];
        const max = ordenados[n - 1];
        const rango = max - min;
        
        // Configuración del gráfico
        const width = 600;
        const height = 300;
        const padding = 50;
        const graphWidth = width - 2 * padding;
        const lineY = height / 2;
        
        const scale = (val) => padding + ((val - min) / rango) * graphWidth;
        
        // Generar tarjetas de deciles
        let decilesCards = '';
        const colores = ['#e3f2fd', '#bbdefb', '#90caf9', '#64b5f6', '#42a5f5', '#2196f3', '#1e88e5', '#1976d2', '#1565c0'];
        
        deciles.forEach((d, i) => {
            decilesCards += `
                <div style="background: ${colores[i]}; padding: 15px; border-radius: 8px; text-align: center; border: 2px solid #1976d2;">
                    <h4 style="margin: 0; color: #0d47a1; font-size: 16px;">D${d.numero}</h4>
                    <p style="margin: 5px 0; font-size: 12px; color: #666;">${d.percentil}%</p>
                    <p style="margin: 0; font-size: 20px; font-weight: bold; color: #0d47a1;">${d.valor.toFixed(3)}</p>
                </div>
            `;
        });
        
        const html = `
            <div class="result-box">
                <h3>✅ Resultados:</h3>
                <div class="result-item"><strong>Datos ordenados:</strong> ${ordenados.join(', ')}</div>
                <div class="result-item"><strong>Cantidad (n):</strong> ${n}</div>
                
                <h3 style="margin-top: 25px; color: #296adf;">📊 Los 9 Deciles</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap: 12px; margin-top: 15px;">
                    ${decilesCards}
                </div>
                
                <!-- GRÁFICO DE DECILES -->
                <div style="margin-top: 30px; padding: 25px; background: white; border-radius: 12px; border: 2px solid #ddd;">
                    <h3 style="color: #296adf; margin-bottom: 20px; text-align: center;">📈 Visualización de Deciles</h3>
                    
                    <svg width="100%" viewBox="0 0 ${width} ${height}" style="background: #f9f9f9; border-radius: 8px;">
                        <!-- Línea base -->
                        <line x1="${padding}" y1="${lineY}" x2="${width - padding}" y2="${lineY}" 
                              stroke="#333" stroke-width="3"/>
                        
                        <!-- Marcadores de deciles -->
                        ${deciles.map((d, i) => `
                            <line x1="${scale(d.valor)}" y1="${lineY - 30}" x2="${scale(d.valor)}" y2="${lineY + 30}" 
                                  stroke="${colores[i]}" stroke-width="3"/>
                            <circle cx="${scale(d.valor)}" cy="${lineY}" r="6" fill="${colores[i]}" stroke="white" stroke-width="2"/>
                            <text x="${scale(d.valor)}" y="${i % 2 === 0 ? lineY - 40 : lineY + 50}" 
                                  text-anchor="middle" font-size="11" fill="${colores[i]}" font-weight="bold">
                                D${d.numero}<br/>${d.valor.toFixed(2)}
                            </text>
                        `).join('')}
                        
                        <!-- Mínimo y máximo -->
                        <circle cx="${padding}" cy="${lineY}" r="8" fill="#4caf50" stroke="white" stroke-width="2"/>
                        <text x="${padding}" y="${lineY - 45}" text-anchor="middle" font-size="12" fill="#4caf50" font-weight="bold">
                            Min: ${min.toFixed(2)}
                        </text>
                        
                        <circle cx="${width - padding}" cy="${lineY}" r="8" fill="#f44336" stroke="white" stroke-width="2"/>
                        <text x="${width - padding}" y="${lineY - 45}" text-anchor="middle" font-size="12" fill="#f44336" font-weight="bold">
                            Max: ${max.toFixed(2)}
                        </text>
                        
                        <!-- Zonas sombreadas entre deciles -->
                        ${deciles.map((d, i) => {
                            if (i < deciles.length - 1) {
                                const x1 = scale(d.valor);
                                const x2 = scale(deciles[i + 1].valor);
                                return `
                                    <rect x="${x1}" y="${lineY - 15}" width="${x2 - x1}" height="30" 
                                          fill="${colores[i]}" opacity="0.2"/>
                                `;
                            }
                            return '';
                        }).join('')}
                    </svg>
                    
                    <!-- Tabla de interpretación -->
                    <div style="margin-top: 25px;">
                        <h4 style="color: #296adf; margin-bottom: 10px;">📋 Interpretación de Deciles</h4>
                        <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
                            <tr style="background: #296adf; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Decil</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Valor</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Interpretación</th>
                            </tr>
                            ${deciles.map(d => `
                                <tr>
                                    <td style="padding: 10px; border: 1px solid #ddd; text-align: center; font-weight: bold;">D${d.numero} (${d.percentil}%)</td>
                                    <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">${d.valor.toFixed(4)}</td>
                                    <td style="padding: 8px; border: 1px solid #ddd;">El ${d.percentil}% de los datos son ≤ ${d.valor.toFixed(4)}</td>
                                </tr>
                            `).join('')}
                        </table>
                    </div>

                    <!-- Información adicional -->
                    <div style="margin-top: 20px; padding: 15px; background: #e3f2fd; border-radius: 8px; border-left: 4px solid #2196f3;">
                        <strong>💡 Sobre los Deciles:</strong><br>
                        • Los deciles dividen los datos ordenados en 10 partes iguales<br>
                        • Cada decil representa el 10% de los datos<br>
        • <strong>D5</strong> es equivalente a la mediana (50% de los datos)<br>
                        • Son útiles para analizar la distribución detallada de los datos
                    </div>
                </div>
            </div>
        `;
        
        document.getElementById('resultadoDeciles').innerHTML = html;
        
    } catch (error) {
        document.getElementById('resultadoDeciles').innerHTML = `
            <div class="error-box">❌ Error: ${error.message}</div>
        `;
    }
}
function calcularPercentiles() {
    try {
        const input = document.getElementById('datosPercentiles').value;
        const percentilBuscado = parseFloat(document.getElementById('percentilValor').value);
        const valores = input.split(',').map(v => parseFloat(v.trim())).filter(v => !isNaN(v));
        
        if (valores.length === 0) {
            throw new Error('No hay datos válidos');
        }
        
        if (isNaN(percentilBuscado) || percentilBuscado < 1 || percentilBuscado > 99) {
            throw new Error('El percentil debe estar entre 1 y 99');
        }
        
        const ordenados = [...valores].sort((a, b) => a - b);
        const n = ordenados.length;
        
        const calcularPercentil = (p) => {
            const pos = p * n / 100;
            if (Number.isInteger(pos)) {
                return (ordenados[pos - 1] + ordenados[pos]) / 2;
            } else {
                return ordenados[Math.ceil(pos) - 1];
            }
        };
        
        const valorPercentil = calcularPercentil(percentilBuscado);
        
        // Calcular percentiles comunes para comparación
        const percentilesComunes = [10, 25, 50, 75, 90, 95, 99];
        const valoresComunes = percentilesComunes.map(p => ({
            percentil: p,
            valor: calcularPercentil(p)
        }));
        
        const min = ordenados[0];
        const max = ordenados[n - 1];
        const rango = max - min;
        
        // Configuración del gráfico
        const width = 600;
        const height = 300;
        const padding = 60;
        const graphWidth = width - 2 * padding;
        const lineY = height / 2;
        
        const scale = (val) => padding + ((val - min) / rango) * graphWidth;
        
        // Colores degradados
        const getColor = (p) => {
            const hue = (p / 100) * 240; // De rojo (0) a azul (240)
            return `hsl(${hue}, 70%, 50%)`;
        };
        
        // Generar puntos de datos en el gráfico
        let puntosHTML = '';
        ordenados.forEach((val, i) => {
            const x = scale(val);
            puntosHTML += `
                <circle cx="${x}" cy="${lineY + 60}" r="4" fill="#999" opacity="0.6"/>
            `;
        });
        
        const html = `
            <div class="result-box">
                <h3>✅ Resultados:</h3>
                <div class="result-item"><strong>Datos ordenados:</strong> ${ordenados.join(', ')}</div>
                <div class="result-item"><strong>Cantidad (n):</strong> ${n}</div>
                <div class="result-item"><strong>Percentil buscado:</strong> P${percentilBuscado}</div>
                
                <div class="result-highlight">
                    Percentil ${percentilBuscado} (P${percentilBuscado}) = ${valorPercentil.toFixed(4)}
                </div>
                
                <div class="result-item" style="margin-top: 20px; background: #e3f2fd;">
                    <strong>📊 Interpretación:</strong><br>
                    El ${percentilBuscado}% de los datos son menores o iguales a ${valorPercentil.toFixed(4)}
                </div>

                <!-- GRÁFICO DE PERCENTILES -->
                <div style="margin-top: 30px; padding: 25px; background: white; border-radius: 12px; border: 2px solid #ddd;">
                    <h3 style="color: #296adf; margin-bottom: 20px; text-align: center;">📈 Visualización de Percentiles</h3>
                    
                    <svg width="100%" viewBox="0 0 ${width} ${height}" style="background: #f9f9f9; border-radius: 8px;">
                        <!-- Degradado para la línea base -->
                        <defs>
                            <linearGradient id="percentilGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style="stop-color:#f44336;stop-opacity:1" />
                                <stop offset="25%" style="stop-color:#ff9800;stop-opacity:1" />
                                <stop offset="50%" style="stop-color:#ffc107;stop-opacity:1" />
                                <stop offset="75%" style="stop-color:#4caf50;stop-opacity:1" />
                                <stop offset="100%" style="stop-color:#2196f3;stop-opacity:1" />
                            </linearGradient>
                        </defs>
                        
                        <!-- Barra degradada que representa 0-100% -->
                        <rect x="${padding}" y="${lineY - 5}" width="${graphWidth}" height="10" 
                              fill="url(#percentilGradient)" rx="5"/>
                        
                        <!-- Línea base -->
                        <line x1="${padding}" y1="${lineY}" x2="${width - padding}" y2="${lineY}" 
                              stroke="#333" stroke-width="2"/>
                        
                        <!-- Puntos de datos -->
                        ${puntosHTML}
                        
                        <!-- Percentiles comunes -->
                        ${valoresComunes.map(p => `
                            <line x1="${scale(p.valor)}" y1="${lineY - 35}" x2="${scale(p.valor)}" y2="${lineY + 35}" 
                                  stroke="${getColor(p.percentil)}" stroke-width="2" stroke-dasharray="4,4" opacity="0.5"/>
                            <circle cx="${scale(p.valor)}" cy="${lineY}" r="4" fill="${getColor(p.percentil)}" 
                                    stroke="white" stroke-width="2"/>
                            <text x="${scale(p.valor)}" y="${lineY - 40}" text-anchor="middle" 
                                  font-size="9" fill="${getColor(p.percentil)}" font-weight="bold">
                                P${p.percentil}
                            </text>
                        `).join('')}
                        
                        <!-- Percentil buscado (destacado) -->
                        <line x1="${scale(valorPercentil)}" y1="${lineY - 50}" x2="${scale(valorPercentil)}" y2="${lineY + 50}" 
                              stroke="#e91e63" stroke-width="4"/>
                        <circle cx="${scale(valorPercentil)}" cy="${lineY}" r="8" fill="#e91e63" 
                                stroke="white" stroke-width="3"/>
                        <text x="${scale(valorPercentil)}" y="${lineY - 55}" text-anchor="middle" 
                              font-size="14" fill="#e91e63" font-weight="bold">
                            P${percentilBuscado}: ${valorPercentil.toFixed(2)}
                        </text>
                        
                        <!-- Etiquetas de valores -->
                        <text x="${padding}" y="${lineY + 80}" text-anchor="middle" font-size="11" fill="#666" font-weight="bold">
                            Min: ${min.toFixed(2)}
                        </text>
                        <text x="${width - padding}" y="${lineY + 80}" text-anchor="middle" font-size="11" fill="#666" font-weight="bold">
                            Max: ${max.toFixed(2)}
                        </text>
                        
                        <!-- Etiquetas de porcentaje -->
                        <text x="${padding}" y="${lineY - 15}" text-anchor="middle" font-size="10" fill="#666">0%</text>
                        <text x="${width - padding}" y="${lineY - 15}" text-anchor="middle" font-size="10" fill="#666">100%</text>
                    </svg>
                    
                    <!-- Leyenda -->
                    <div style="display: flex; justify-content: center; gap: 15px; margin-top: 20px; font-size: 12px; flex-wrap: wrap;">
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <div style="width: 15px; height: 15px; background: #e91e63; border-radius: 50%;"></div>
                            <span><strong>Percentil buscado (P${percentilBuscado})</strong></span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <div style="width: 15px; height: 15px; background: #999; border-radius: 50%;"></div>
                            <span>Datos observados</span>
                        </div>
                    </div>

                    <!-- Tabla de percentiles comunes -->
                    <div style="margin-top: 25px;">
                        <h4 style="color: #296adf; margin-bottom: 10px;">📊 Percentiles Comunes</h4>
                        <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
                            <tr style="background: #296adf; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Percentil</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Valor</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Interpretación</th>
                            </tr>
                            ${valoresComunes.map(p => `
                                <tr style="${p.percentil === percentilBuscado ? 'background: #ffebee; font-weight: bold;' : ''}">
                                    <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">
                                        <span style="color: ${getColor(p.percentil)}; font-weight: bold;">P${p.percentil}</span>
                                    </td>
                                    <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">${p.valor.toFixed(4)}</td>
                                    <td style="padding: 8px; border: 1px solid #ddd;">El ${p.percentil}% de los datos son ≤ ${p.valor.toFixed(4)}</td>
                                </tr>
                            `).join('')}
                        </table>
                    </div>

                    <!-- Información adicional -->
                    <div style="margin-top: 20px; padding: 15px; background: #fff3cd; border-radius: 8px; border-left: 4px solid #ffc107;">
                        <strong>📊 Datos Estadísticos:</strong><br>
                        • <strong>Mínimo:</strong> ${min.toFixed(4)} (0% de los datos)<br>
                        • <strong>P${percentilBuscado}:</strong> ${valorPercentil.toFixed(4)} (${percentilBuscado}% de los datos)<br>
                        • <strong>Máximo:</strong> ${max.toFixed(4)} (100% de los datos)<br>
                        • <strong>Datos bajo P${percentilBuscado}:</strong> ${Math.floor(n * percentilBuscado / 100)} de ${n} valores
                    </div>

                    <!-- Interpretación -->
                    <div style="margin-top: 15px; padding: 15px; background: #e8f5e9; border-radius: 8px; border-left: 4px solid #4caf50;">
                        <strong>💡 ¿Qué es un Percentil?</strong><br>
                        • Los percentiles dividen los datos ordenados en 100 partes iguales<br>
                        • P${percentilBuscado} significa que el ${percentilBuscado}% de los datos están por debajo de ${valorPercentil.toFixed(2)}<br>
                        • P50 es equivalente a la mediana (divide los datos en dos mitades)<br>
                        • P25 es Q1 (primer cuartil) y P75 es Q3 (tercer cuartil)<br>
                        • Son útiles para comparar posiciones relativas dentro de un conjunto de datos
                    </div>
                </div>
            </div>
        `;
        
        document.getElementById('resultadoPercentiles').innerHTML = html;
        
    } catch (error) {
        document.getElementById('resultadoPercentiles').innerHTML = `
            <div class="error-box">❌ Error: ${error.message}</div>
        `;
    }
}

function calcularRegresion() {
    try {
        const inputX = document.getElementById('datosX').value;
        const inputY = document.getElementById('datosY').value;
        
        const x = inputX.split(',').map(v => parseFloat(v.trim())).filter(v => !isNaN(v));
        const y = inputY.split(',').map(v => parseFloat(v.trim())).filter(v => !isNaN(v));
        
        if (x.length === 0 || y.length === 0) {
            throw new Error('No hay datos válidos');
        }
        
        if (x.length !== y.length) {
            throw new Error('X e Y deben tener la misma cantidad de datos');
        }
        
        const n = x.length;
        const sumX = x.reduce((a, b) => a + b, 0);
        const sumY = y.reduce((a, b) => a + b, 0);
        const sumXY = x.reduce((sum, xi, i) => sum + xi * y[i], 0);
        const sumX2 = x.reduce((sum, xi) => sum + xi * xi, 0);
        const sumY2 = y.reduce((sum, yi) => sum + yi * yi, 0);
        
        const b = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
        const a = (sumY - b * sumX) / n;
        
        const r = (n * sumXY - sumX * sumY) / 
                  Math.sqrt((n * sumX2 - sumX * sumX) * (n * sumY2 - sumY * sumY));
        const r2 = r * r;
        
        // Crear tabla de datos
        let tablaHTML = '<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">';
        tablaHTML += '<tr style="background: #296adf; color: white;"><th style="padding: 10px; border: 1px solid #ddd;">X</th><th style="padding: 10px; border: 1px solid #ddd;">Y</th><th style="padding: 10px; border: 1px solid #ddd;">XY</th><th style="padding: 10px; border: 1px solid #ddd;">X²</th><th style="padding: 10px; border: 1px solid #ddd;">Y²</th></tr>';
        
        for (let i = 0; i < n; i++) {
            tablaHTML += `<tr><td style="padding: 10px; border: 1px solid #ddd; text-align: center;">${x[i]}</td><td style="padding: 10px; border: 1px solid #ddd; text-align: center;">${y[i]}</td><td style="padding: 10px; border: 1px solid #ddd; text-align: center;">${(x[i] * y[i]).toFixed(2)}</td><td style="padding: 10px; border: 1px solid #ddd; text-align: center;">${(x[i] * x[i]).toFixed(2)}</td><td style="padding: 10px; border: 1px solid #ddd; text-align: center;">${(y[i] * y[i]).toFixed(2)}</td></tr>`;
        }
        
        tablaHTML += `<tr style="background: #e3f2fd; font-weight: bold;"><td style="padding: 10px; border: 1px solid #ddd; text-align: center;">Σ = ${sumX.toFixed(2)}</td><td style="padding: 10px; border: 1px solid #ddd; text-align: center;">Σ = ${sumY.toFixed(2)}</td><td style="padding: 10px; border: 1px solid #ddd; text-align: center;">Σ = ${sumXY.toFixed(2)}</td><td style="padding: 10px; border: 1px solid #ddd; text-align: center;">Σ = ${sumX2.toFixed(2)}</td><td style="padding: 10px; border: 1px solid #ddd; text-align: center;">Σ = ${sumY2.toFixed(2)}</td></tr>`;
        tablaHTML += '</table>';
        
        // Preparar datos para el gráfico
        const minX = Math.min(...x);
        const maxX = Math.max(...x);
        const minY = Math.min(...y);
        const maxY = Math.max(...y);
        
        // Calcular puntos de la línea de regresión
        const y1 = a + b * minX;
        const y2 = a + b * maxX;
        
        // Escalar al SVG (400x300)
        const padding = 40;
        const width = 400;
        const height = 300;
        const graphWidth = width - 2 * padding;
        const graphHeight = height - 2 * padding;
        
        const scaleX = (val) => padding + ((val - minX) / (maxX - minX)) * graphWidth;
        const scaleY = (val) => height - padding - ((val - minY) / (maxY - minY)) * graphHeight;
        
        // Crear puntos SVG para los datos
        let puntosHTML = '';
        for (let i = 0; i < n; i++) {
            const cx = scaleX(x[i]);
            const cy = scaleY(y[i]);
            puntosHTML += `<circle cx="${cx}" cy="${cy}" r="6" fill="#2196f3" stroke="white" stroke-width="2"/>`;
            puntosHTML += `<text x="${cx}" y="${cy - 12}" text-anchor="middle" font-size="10" fill="#666">(${x[i]}, ${y[i]})</text>`;
        }
        
        // Línea de regresión
        const x1Scaled = scaleX(minX);
        const y1Scaled = scaleY(y1);
        const x2Scaled = scaleX(maxX);
        const y2Scaled = scaleY(y2);
        
        const html = `
            <div class="result-box">
                <h3>✅ Resultados:</h3>
                <div class="result-item"><strong>Número de datos (n):</strong> ${n}</div>
                
                <h3 style="margin-top: 20px;">Tabla de Cálculos:</h3>
                ${tablaHTML}
                
                <div class="result-item"><strong>Pendiente (b):</strong> ${b.toFixed(4)}</div>
                <div class="result-item"><strong>Intercepto (a):</strong> ${a.toFixed(4)}</div>
                
                <div class="result-highlight">
                    ŷ = ${a.toFixed(2)} + ${b.toFixed(2)}x
                </div>
                
                <div class="result-item"><strong>Coeficiente de correlación (r):</strong> ${r.toFixed(4)}</div>
                <div class="result-item"><strong>Coeficiente de determinación (R²):</strong> ${r2.toFixed(4)}</div>
                
                <div class="result-item" style="margin-top: 20px; background: #fff3cd;">
                    <strong>📊 Interpretación:</strong><br>
                    - Por cada unidad que aumenta X, Y aumenta en ${b.toFixed(4)} unidades.<br>
                    - El R² de ${r2.toFixed(4)} indica que el ${(r2 * 100).toFixed(2)}% de la variación en Y es explicada por X.<br>
                    - La correlación es ${Math.abs(r) > 0.7 ? 'fuerte' : Math.abs(r) > 0.4 ? 'moderada' : 'débil'} y ${r > 0 ? 'positiva' : 'negativa'}.
                </div>

                <!-- GRÁFICO DE REGRESIÓN -->
                <div style="margin-top: 30px; padding: 25px; background: white; border-radius: 12px; border: 2px solid #ddd;">
                    <h3 style="color: #296adf; margin-bottom: 20px; text-align: center;">📈 Gráfico de Regresión Lineal</h3>
                    
                    <svg width="100%" viewBox="0 0 ${width} ${height}" style="background: #f9f9f9; border-radius: 8px;">
                        <!-- Cuadrícula -->
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e0e0e0" stroke-width="1"/>
                            </pattern>
                        </defs>
                        <rect x="${padding}" y="${padding}" width="${graphWidth}" height="${graphHeight}" fill="url(#grid)"/>
                        
                        <!-- Ejes -->
                        <line x1="${padding}" y1="${height - padding}" x2="${width - padding}" y2="${height - padding}" 
                              stroke="#333" stroke-width="2"/>
                        <line x1="${padding}" y1="${padding}" x2="${padding}" y2="${height - padding}" 
                              stroke="#333" stroke-width="2"/>
                        
                        <!-- Etiquetas de ejes -->
                        <text x="${width / 2}" y="${height - 5}" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">X</text>
                        <text x="15" y="${height / 2}" text-anchor="middle" font-size="14" font-weight="bold" fill="#333" transform="rotate(-90 15 ${height / 2})">Y</text>
                        
                        <!-- Valores en ejes -->
                        <text x="${padding}" y="${height - padding + 20}" text-anchor="middle" font-size="12" fill="#666">${minX.toFixed(1)}</text>
                        <text x="${width - padding}" y="${height - padding + 20}" text-anchor="middle" font-size="12" fill="#666">${maxX.toFixed(1)}</text>
                        <text x="${padding - 10}" y="${height - padding}" text-anchor="end" font-size="12" fill="#666">${minY.toFixed(1)}</text>
                        <text x="${padding - 10}" y="${padding}" text-anchor="end" font-size="12" fill="#666">${maxY.toFixed(1)}</text>
                        
                        <!-- Línea de regresión -->
                        <line x1="${x1Scaled}" y1="${y1Scaled}" x2="${x2Scaled}" y2="${y2Scaled}" 
                              stroke="#f44336" stroke-width="3" stroke-dasharray="5,5"/>
                        
                        <!-- Puntos de datos -->
                        ${puntosHTML}
                        
                        <!-- Ecuación de la recta -->
                        <text x="${width / 2}" y="25" text-anchor="middle" font-size="16" font-weight="bold" fill="#f44336">
                            ŷ = ${a.toFixed(2)} + ${b.toFixed(2)}x
                        </text>
                        
                        <!-- R² -->
                        <text x="${width - padding - 10}" y="25" text-anchor="end" font-size="14" fill="#4caf50" font-weight="bold">
                            R² = ${r2.toFixed(4)}
                        </text>
                    </svg>
                    
                    <!-- Leyenda -->
                    <div style="display: flex; justify-content: center; gap: 30px; margin-top: 20px; font-size: 14px;">
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <div style="width: 15px; height: 15px; background: #2196f3; border-radius: 50%;"></div>
                            <span>Datos observados</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <div style="width: 30px; height: 3px; background: #f44336;"></div>
                            <span>Línea de regresión</span>
                        </div>
                    </div>
                    
                    <!-- Predicciones de ejemplo -->
                    <div style="margin-top: 20px; padding: 15px; background: #e8f5e9; border-radius: 8px; border-left: 4px solid #4caf50;">
                        <strong>🎯 Predicciones de ejemplo:</strong><br>
                        • Si X = ${minX.toFixed(2)}, entonces ŷ = ${y1.toFixed(2)}<br>
                        • Si X = ${maxX.toFixed(2)}, entonces ŷ = ${y2.toFixed(2)}<br>
                        • Si X = ${((minX + maxX) / 2).toFixed(2)}, entonces ŷ = ${(a + b * ((minX + maxX) / 2)).toFixed(2)}
                    </div>
                </div>
            </div>
        `;
        
        document.getElementById('resultadoRegresion').innerHTML = html;
        
    } catch (error) {
        document.getElementById('resultadoRegresion').innerHTML = `
            <div class="error-box">❌ Error: ${error.message}</div>
        `;
    }
}
function calcularRegresionMultiple() {
    try {
        const inputX1 = document.getElementById('datosX1').value;
        const inputX2 = document.getElementById('datosX2').value;
        const inputY = document.getElementById('datosYMult').value;
        
        const x1 = inputX1.split(',').map(v => parseFloat(v.trim())).filter(v => !isNaN(v));
        const x2 = inputX2.split(',').map(v => parseFloat(v.trim())).filter(v => !isNaN(v));
        const y = inputY.split(',').map(v => parseFloat(v.trim())).filter(v => !isNaN(v));
        
        if (x1.length === 0 || x2.length === 0 || y.length === 0) {
            throw new Error('No hay datos válidos');
        }
        
        if (x1.length !== y.length || x2.length !== y.length) {
            throw new Error('X1, X2 e Y deben tener la misma cantidad de datos');
        }
        
        const n = x1.length;
        
        // Calcular sumas necesarias
        const sumX1 = x1.reduce((a, b) => a + b, 0);
        const sumX2 = x2.reduce((a, b) => a + b, 0);
        const sumY = y.reduce((a, b) => a + b, 0);
        
        const sumX1Y = x1.reduce((sum, xi, i) => sum + xi * y[i], 0);
        const sumX2Y = x2.reduce((sum, xi, i) => sum + xi * y[i], 0);
        
        const sumX1X2 = x1.reduce((sum, xi, i) => sum + xi * x2[i], 0);
        
        const sumX1_2 = x1.reduce((sum, xi) => sum + xi * xi, 0);
        const sumX2_2 = x2.reduce((sum, xi) => sum + xi * xi, 0);
        const sumY2 = y.reduce((sum, yi) => sum + yi * yi, 0);
        
        // Sistema de ecuaciones normales para regresión múltiple
        // ŷ = b0 + b1*X1 + b2*X2
        
        // Método de matrices (simplificado)
        const meanX1 = sumX1 / n;
        const meanX2 = sumX2 / n;
        const meanY = sumY / n;
        
        // Calcular desviaciones
        let Sx1x1 = 0, Sx2x2 = 0, Sx1x2 = 0, Sx1y = 0, Sx2y = 0;
        
        for (let i = 0; i < n; i++) {
            const dx1 = x1[i] - meanX1;
            const dx2 = x2[i] - meanX2;
            const dy = y[i] - meanY;
            
            Sx1x1 += dx1 * dx1;
            Sx2x2 += dx2 * dx2;
            Sx1x2 += dx1 * dx2;
            Sx1y += dx1 * dy;
            Sx2y += dx2 * dy;
        }
        
        // Calcular coeficientes b1 y b2
        const denominador = Sx1x1 * Sx2x2 - Sx1x2 * Sx1x2;
        const b1 = (Sx2x2 * Sx1y - Sx1x2 * Sx2y) / denominador;
        const b2 = (Sx1x1 * Sx2y - Sx1x2 * Sx1y) / denominador;
        const b0 = meanY - b1 * meanX1 - b2 * meanX2;
        
        // Calcular valores predichos y R²
        let SST = 0; // Suma total de cuadrados
        let SSR = 0; // Suma de cuadrados de regresión
        let SSE = 0; // Suma de cuadrados del error
        
        const yPred = [];
        for (let i = 0; i < n; i++) {
            const pred = b0 + b1 * x1[i] + b2 * x2[i];
            yPred.push(pred);
            
            SST += Math.pow(y[i] - meanY, 2);
            SSR += Math.pow(pred - meanY, 2);
            SSE += Math.pow(y[i] - pred, 2);
        }
        
        const R2 = SSR / SST;
        const R2_ajustado = 1 - ((1 - R2) * (n - 1)) / (n - 3);
        
        // Error estándar de estimación
        const errorEstandar = Math.sqrt(SSE / (n - 3));
        
        // Crear tabla de datos
        let tablaHTML = '<table style="width: 100%; border-collapse: collapse; margin: 15px 0; font-size: 13px;">';
        tablaHTML += '<tr style="background: #296adf; color: white;"><th style="padding: 8px; border: 1px solid #ddd;">X1</th><th style="padding: 8px; border: 1px solid #ddd;">X2</th><th style="padding: 8px; border: 1px solid #ddd;">Y</th><th style="padding: 8px; border: 1px solid #ddd;">Ŷ (Predicho)</th><th style="padding: 8px; border: 1px solid #ddd;">Error</th></tr>';
        
        for (let i = 0; i < n; i++) {
            const error = y[i] - yPred[i];
            tablaHTML += `
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${x1[i]}</td>
                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${x2[i]}</td>
                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${y[i]}</td>
                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${yPred[i].toFixed(2)}</td>
                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center; color: ${error > 0 ? '#4caf50' : '#f44336'};">${error.toFixed(2)}</td>
                </tr>
            `;
        }
        tablaHTML += '</table>';
        
        // Gráfico 3D simplificado (vista 2D de X1 vs Y y X2 vs Y)
        const width = 500;
        const height = 250;
        const padding = 50;
        const graphWidth = (width - 3 * padding) / 2;
        const graphHeight = height - 2 * padding;
        
        const minX1 = Math.min(...x1);
        const maxX1 = Math.max(...x1);
        const minX2 = Math.min(...x2);
        const maxX2 = Math.max(...x2);
        const minY = Math.min(...y);
        const maxY = Math.max(...y);
        
        const scaleX1 = (val) => padding + ((val - minX1) / (maxX1 - minX1)) * graphWidth;
        const scaleX2 = (val) => 2 * padding + graphWidth + ((val - minX2) / (maxX2 - minX2)) * graphWidth;
        const scaleY = (val) => height - padding - ((val - minY) / (maxY - minY)) * graphHeight;
        
        let puntosX1HTML = '';
        let puntosX2HTML = '';
        
        for (let i = 0; i < n; i++) {
            // Gráfico X1 vs Y
            puntosX1HTML += `<circle cx="${scaleX1(x1[i])}" cy="${scaleY(y[i])}" r="5" fill="#2196f3" stroke="white" stroke-width="2"/>`;
            puntosX1HTML += `<circle cx="${scaleX1(x1[i])}" cy="${scaleY(yPred[i])}" r="4" fill="#ff9800" opacity="0.6"/>`;
            puntosX1HTML += `<line x1="${scaleX1(x1[i])}" y1="${scaleY(y[i])}" x2="${scaleX1(x1[i])}" y2="${scaleY(yPred[i])}" stroke="#999" stroke-width="1" stroke-dasharray="2,2"/>`;
            
            // Gráfico X2 vs Y
            puntosX2HTML += `<circle cx="${scaleX2(x2[i])}" cy="${scaleY(y[i])}" r="5" fill="#2196f3" stroke="white" stroke-width="2"/>`;
            puntosX2HTML += `<circle cx="${scaleX2(x2[i])}" cy="${scaleY(yPred[i])}" r="4" fill="#ff9800" opacity="0.6"/>`;
            puntosX2HTML += `<line x1="${scaleX2(x2[i])}" y1="${scaleY(y[i])}" x2="${scaleX2(x2[i])}" y2="${scaleY(yPred[i])}" stroke="#999" stroke-width="1" stroke-dasharray="2,2"/>`;
        }
        
        const html = `
            <div class="result-box">
                <h3>✅ Resultados de Regresión Lineal Múltiple:</h3>
                <div class="result-item"><strong>Número de datos (n):</strong> ${n}</div>
                <div class="result-item"><strong>Variables independientes:</strong> 2 (X1, X2)</div>
                
                <div class="result-item"><strong>Intercepto (b0):</strong> ${b0.toFixed(4)}</div>
                <div class="result-item"><strong>Coeficiente X1 (b1):</strong> ${b1.toFixed(4)}</div>
                <div class="result-item"><strong>Coeficiente X2 (b2):</strong> ${b2.toFixed(4)}</div>
                
                <div class="result-highlight">
                    ŷ = ${b0.toFixed(2)} + ${b1.toFixed(2)}·X1 + ${b2.toFixed(2)}·X2
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-top: 20px;">
                    <div style="background: white; padding: 15px; border-radius: 8px; border: 2px solid #4caf50;">
                        <h4 style="color: #4caf50; margin: 0 0 10px 0;">R²</h4>
                        <p style="font-size: 24px; font-weight: bold; margin: 0;">${R2.toFixed(4)}</p>
                        <p style="font-size: 12px; margin: 5px 0 0 0; color: #666;">${(R2 * 100).toFixed(2)}% de variación explicada</p>
                    </div>
                    <div style="background: white; padding: 15px; border-radius: 8px; border: 2px solid #2196f3;">
                        <h4 style="color: #2196f3; margin: 0 0 10px 0;">R² Ajustado</h4>
                        <p style="font-size: 24px; font-weight: bold; margin: 0;">${R2_ajustado.toFixed(4)}</p>
                        <p style="font-size: 12px; margin: 5px 0 0 0; color: #666;">Ajustado por # de variables</p>
                    </div>
                    <div style="background: white; padding: 15px; border-radius: 8px; border: 2px solid #ff9800;">
                        <h4 style="color: #ff9800; margin: 0 0 10px 0;">Error Estándar</h4>
                        <p style="font-size: 24px; font-weight: bold; margin: 0;">${errorEstandar.toFixed(4)}</p>
                        <p style="font-size: 12px; margin: 5px 0 0 0; color: #666;">Desviación típica del error</p>
                    </div>
                </div>
                
                <div class="result-item" style="margin-top: 20px; background: #fff3cd;">
                    <strong>📊 Interpretación:</strong><br>
                    • Por cada unidad que aumenta X1 (manteniendo X2 constante), Y ${b1 > 0 ? 'aumenta' : 'disminuye'} en ${Math.abs(b1).toFixed(4)} unidades<br>
                    • Por cada unidad que aumenta X2 (manteniendo X1 constante), Y ${b2 > 0 ? 'aumenta' : 'disminuye'} en ${Math.abs(b2).toFixed(4)} unidades<br>
                    • El modelo explica el ${(R2 * 100).toFixed(2)}% de la variabilidad en Y
                </div>

                <h3 style="margin-top: 25px;">Tabla de Valores Observados vs Predichos:</h3>
                ${tablaHTML}

                <!-- GRÁFICOS DE DISPERSIÓN -->
                <div style="margin-top: 30px; padding: 25px; background: white; border-radius: 12px; border: 2px solid #ddd;">
                    <h3 style="color: #296adf; margin-bottom: 20px; text-align: center;">📈 Gráficos de Dispersión</h3>
                    
                    <svg width="100%" viewBox="0 0 ${width} ${height}" style="background: #f9f9f9; border-radius: 8px;">
                        <!-- Gráfico 1: X1 vs Y -->
                        <rect x="${padding}" y="${padding}" width="${graphWidth}" height="${graphHeight}" fill="white" stroke="#ddd"/>
                        <line x1="${padding}" y1="${height - padding}" x2="${padding + graphWidth}" y2="${height - padding}" stroke="#333" stroke-width="2"/>
                        <line x1="${padding}" y1="${padding}" x2="${padding}" y2="${height - padding}" stroke="#333" stroke-width="2"/>
                        
                        <text x="${padding + graphWidth/2}" y="${height - 10}" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">X1 vs Y</text>
                        <text x="${padding + 15}" y="${padding - 10}" text-anchor="start" font-size="11" fill="#666">Y</text>
                        
                        ${puntosX1HTML}
                        
                        <!-- Gráfico 2: X2 vs Y -->
                        <rect x="${2*padding + graphWidth}" y="${padding}" width="${graphWidth}" height="${graphHeight}" fill="white" stroke="#ddd"/>
                        <line x1="${2*padding + graphWidth}" y1="${height - padding}" x2="${width - padding}" y2="${height - padding}" stroke="#333" stroke-width="2"/>
                        <line x1="${2*padding + graphWidth}" y1="${padding}" x2="${2*padding + graphWidth}" y2="${height - padding}" stroke="#333" stroke-width="2"/>
                        
                        <text x="${2*padding + graphWidth + graphWidth/2}" y="${height - 10}" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">X2 vs Y</text>
                        <text x="${2*padding + graphWidth + 15}" y="${padding - 10}" text-anchor="start" font-size="11" fill="#666">Y</text>
                        
                        ${puntosX2HTML}
                    </svg>
                    
                    <!-- Leyenda -->
                    <div style="display: flex; justify-content: center; gap: 25px; margin-top: 20px; font-size: 13px;">
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <div style="width: 15px; height: 15px; background: #2196f3; border-radius: 50%;"></div>
                            <span>Valores reales (Y)</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <div style="width: 15px; height: 15px; background: #ff9800; border-radius: 50%; opacity: 0.6;"></div>
                            <span>Valores predichos (Ŷ)</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <div style="width: 20px; height: 1px; background: #999; border-top: 1px dashed #999;"></div>
                            <span>Error de predicción</span>
                        </div>
                    </div>
                </div>

                <!-- Análisis ANOVA -->
                <div style="margin-top: 25px; padding: 20px; background: #e3f2fd; border-radius: 8px; border-left: 4px solid #2196f3;">
                    <h4 style="color: #1976d2; margin-top: 0;">📊 Análisis de Varianza (ANOVA)</h4>
                    <table style="width: 100%; border-collapse: collapse; font-size: 13px; background: white;">
                        <tr style="background: #1976d2; color: white;">
                            <th style="padding: 8px; border: 1px solid #ddd;">Fuente</th>
                            <th style="padding: 8px; border: 1px solid #ddd;">Suma de Cuadrados</th>
                            <th style="padding: 8px; border: 1px solid #ddd;">GL</th>
                            <th style="padding: 8px; border: 1px solid #ddd;">Cuadrado Medio</th>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Regresión</strong></td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${SSR.toFixed(4)}</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">2</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${(SSR / 2).toFixed(4)}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Residual</strong></td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${SSE.toFixed(4)}</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${n - 3}</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${(SSE / (n - 3)).toFixed(4)}</td>
                        </tr>
                        <tr style="background: #e3f2fd; font-weight: bold;">
                            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Total</strong></td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${SST.toFixed(4)}</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${n - 1}</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">-</td>
                        </tr>
                    </table>
                </div>

                <!-- Ejemplo de predicción -->
                <div style="margin-top: 20px; padding: 15px; background: #e8f5e9; border-radius: 8px; border-left: 4px solid #4caf50;">
                    <strong>🎯 Ejemplo de Predicción:</strong><br>
                    Si X1 = ${x1[0]} y X2 = ${x2[0]}, entonces:<br>
                    ŷ = ${b0.toFixed(2)} + ${b1.toFixed(2)}(${x1[0]}) + ${b2.toFixed(2)}(${x2[0]}) = <strong>${yPred[0].toFixed(2)}</strong>
                </div>
            </div>
        `;
        
        document.getElementById('resultadoRegresionMultiple').innerHTML = html;
        
    } catch (error) {
        document.getElementById('resultadoRegresionMultiple').innerHTML = `
            <div class="error-box">❌ Error: ${error.message}</div>
        `;
    }
}

function calcularIC() {
    try {
        const media = parseFloat(document.getElementById('mediaIC').value);
        const desv = parseFloat(document.getElementById('desvIC').value);
        const n = parseFloat(document.getElementById('nIC').value);
        const confianza = parseFloat(document.getElementById('confianzaIC').value);
        
        if (isNaN(media) || isNaN(desv) || isNaN(n)) {
            throw new Error('Todos los campos deben ser numéricos');
        }
        
        if (n <= 0) {
            throw new Error('El tamaño de muestra debe ser mayor a 0');
        }
        
        // Valor Z según nivel de confianza
        const zValues = {
            90: 1.645,
            95: 1.96,
            99: 2.576
        };
        
        const z = zValues[confianza];
        const errorEst = desv / Math.sqrt(n);
        const margenError = z * errorEst;
        const limInf = media - margenError;
        const limSup = media + margenError;
        
        // Calcular porcentajes para el gráfico visual
        const rangoTotal = limSup - limInf;
        const porcentajeInferior = ((media - limInf) / rangoTotal) * 100;
        const porcentajeSuperior = ((limSup - media) / rangoTotal) * 100;
        
        const html = `
            <div class="result-box">
                <h3>✅ Resultados:</h3>
                <div class="result-item"><strong>Media muestral (x̄):</strong> ${media}</div>
                <div class="result-item"><strong>Desviación estándar (σ):</strong> ${desv}</div>
                <div class="result-item"><strong>Tamaño de muestra (n):</strong> ${n}</div>
                <div class="result-item"><strong>Nivel de confianza:</strong> ${confianza}%</div>
                <div class="result-item"><strong>Valor Z:</strong> ${z}</div>
                <div class="result-item"><strong>Error estándar:</strong> ${errorEst.toFixed(4)}</div>
                <div class="result-item"><strong>Margen de error:</strong> ±${margenError.toFixed(4)}</div>
                
                <div class="result-highlight">
                    IC al ${confianza}% = (${limInf.toFixed(4)}, ${limSup.toFixed(4)})
                </div>
                
                <div class="result-item" style="margin-top: 20px; background: #e8f5e9;">
                    <strong>📊 Interpretación:</strong><br>
                    Con un ${confianza}% de confianza, el valor verdadero de la media poblacional se encuentra entre ${limInf.toFixed(4)} y ${limSup.toFixed(4)}.
                </div>
                
                <div class="result-item" style="margin-top: 15px;">
                    <strong>Fórmula:</strong> IC = x̄ ± Z × (σ/√n)
                </div>

                <!-- GRÁFICO VISUAL DEL INTERVALO -->
                <div style="margin-top: 30px; padding: 25px; background: white; border-radius: 12px; border: 2px solid #ddd;">
                    <h3 style="color: #296adf; margin-bottom: 20px; text-align: center;">📊 Visualización del Intervalo de Confianza</h3>
                    
                    <!-- Escala numérica superior -->
                    <div style="display: flex; justify-content: space-between; margin-bottom: 5px; font-size: 14px; font-weight: 600; color: #666;">
                        <span>${limInf.toFixed(2)}</span>
                        <span>${media.toFixed(2)}</span>
                        <span>${limSup.toFixed(2)}</span>
                    </div>
                    
                    <!-- Barra del intervalo -->
                    <div style="position: relative; height: 60px; background: linear-gradient(to right, #e3f2fd, #2196f3, #e3f2fd); border-radius: 30px; display: flex; align-items: center; box-shadow: 0 4px 15px rgba(33, 150, 243, 0.3);">
                        
                        <!-- Límite inferior -->
                        <div style="position: absolute; left: 0; width: 15px; height: 15px; background: #f44336; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);"></div>
                        
                        <!-- Media (centro) -->
                        <div style="position: absolute; left: 50%; transform: translateX(-50%); width: 20px; height: 20px; background: #4caf50; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3); z-index: 2;"></div>
                        
                        <!-- Límite superior -->
                        <div style="position: absolute; right: 0; width: 15px; height: 15px; background: #f44336; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);"></div>
                    </div>
                    
                    <!-- Leyenda -->
                    <div style="display: flex; justify-content: center; gap: 30px; margin-top: 20px; font-size: 14px;">
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <div style="width: 15px; height: 15px; background: #f44336; border-radius: 50%;"></div>
                            <span>Límites del IC</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <div style="width: 15px; height: 15px; background: #4caf50; border-radius: 50%;"></div>
                            <span>Media muestral</span>
                        </div>
                    </div>
                    
                    <!-- Distribución normal visual -->
                    <div style="margin-top: 30px;">
                        <h4 style="color: #296adf; text-align: center; margin-bottom: 15px;">Distribución Normal</h4>
                        <svg width="100%" height="150" viewBox="0 0 400 150" style="background: white; border-radius: 8px;">
                            <!-- Curva normal -->
                            <path d="M 20 130 Q 50 50, 100 30 T 200 20 T 300 30 Q 350 50, 380 130" 
                                  fill="none" stroke="#2196f3" stroke-width="3"/>
                            
                            <!-- Área del intervalo de confianza -->
                            <path d="M 100 30 Q 150 20, 200 20 T 300 30 L 300 130 L 100 130 Z" 
                                  fill="rgba(33, 150, 243, 0.2)" stroke="none"/>
                            
                            <!-- Línea de la media -->
                            <line x1="200" y1="20" x2="200" y2="130" stroke="#4caf50" stroke-width="2" stroke-dasharray="5,5"/>
                            
                            <!-- Líneas de los límites -->
                            <line x1="100" y1="30" x2="100" y2="130" stroke="#f44336" stroke-width="2"/>
                            <line x1="300" y1="30" x2="300" y2="130" stroke="#f44336" stroke-width="2"/>
                            
                            <!-- Etiquetas -->
                            <text x="100" y="145" text-anchor="middle" font-size="12" fill="#666">Lím. Inf</text>
                            <text x="200" y="145" text-anchor="middle" font-size="12" fill="#4caf50" font-weight="bold">x̄</text>
                            <text x="300" y="145" text-anchor="middle" font-size="12" fill="#666">Lím. Sup</text>
                            
                            <!-- Porcentaje de confianza -->
                            <text x="200" y="80" text-anchor="middle" font-size="16" fill="#296adf" font-weight="bold">${confianza}%</text>
                        </svg>
                    </div>
                    
                    <!-- Información adicional -->
                    <div style="margin-top: 20px; padding: 15px; background: #fff3cd; border-radius: 8px; border-left: 4px solid #ffc107;">
                        <strong>💡 Interpretación Visual:</strong><br>
                        • El área sombreada representa el ${confianza}% de confianza<br>
                        • La línea verde es la media muestral (${media.toFixed(2)})<br>
                        • Las líneas rojas marcan los límites del intervalo<br>
                        • El rango del intervalo es: ${rangoTotal.toFixed(4)} unidades
                    </div>
                </div>
            </div>
        `;
        
        document.getElementById('resultadoIC').innerHTML = html;
        
    } catch (error) {
        document.getElementById('resultadoIC').innerHTML = `
            <div class="error-box">❌ Error: ${error.message}</div>
        `;
    }
}

function calcularCorrelacion() {
    try {
        const inputX = document.getElementById('datosXCorr').value;
        const inputY = document.getElementById('datosYCorr').value;
        
        const x = inputX.split(',').map(v => parseFloat(v.trim())).filter(v => !isNaN(v));
        const y = inputY.split(',').map(v => parseFloat(v.trim())).filter(v => !isNaN(v));
        
        if (x.length === 0 || y.length === 0) {
            throw new Error('No hay datos válidos');
        }
        
        if (x.length !== y.length) {
            throw new Error('X e Y deben tener la misma cantidad de datos');
        }
        
        const n = x.length;
        const sumX = x.reduce((a, b) => a + b, 0);
        const sumY = y.reduce((a, b) => a + b, 0);
        const sumXY = x.reduce((sum, xi, i) => sum + xi * y[i], 0);
        const sumX2 = x.reduce((sum, xi) => sum + xi * xi, 0);
        const sumY2 = y.reduce((sum, yi) => sum + yi * yi, 0);
        
        const r = (n * sumXY - sumX * sumY) / 
                Math.sqrt((n * sumX2 - sumX * sumX) * (n * sumY2 - sumY * sumY));
        
        let interpretacion = '';
        const absR = Math.abs(r);
        
        if (absR >= 0.9) {
            interpretacion = 'Correlación muy fuerte';
        } else if (absR >= 0.7) {
            interpretacion = 'Correlación fuerte';
        } else if (absR >= 0.5) {
            interpretacion = 'Correlación moderada';
        } else if (absR >= 0.3) {
            interpretacion = 'Correlación débil';
        } else {
            interpretacion = 'Correlación muy débil o nula';
        }
        
        interpretacion += r > 0 ? ' positiva' : ' negativa';
        
        // Preparar datos para el gráfico
        const minX = Math.min(...x);
        const maxX = Math.max(...x);
        const minY = Math.min(...y);
        const maxY = Math.max(...y);
        
        // Escalar al SVG (400x300)
        const padding = 50;
        const width = 400;
        const height = 300;
        const graphWidth = width - 2 * padding;
        const graphHeight = height - 2 * padding;
        
        const scaleX = (val) => padding + ((val - minX) / (maxX - minX)) * graphWidth;
        const scaleY = (val) => height - padding - ((val - minY) / (maxY - minY)) * graphHeight;
        
        // Crear puntos SVG para los datos
        let puntosHTML = '';
        const colorPunto = r > 0 ? '#4caf50' : '#f44336';
        
        for (let i = 0; i < n; i++) {
            const cx = scaleX(x[i]);
            const cy = scaleY(y[i]);
            puntosHTML += `<circle cx="${cx}" cy="${cy}" r="7" fill="${colorPunto}" stroke="white" stroke-width="2" opacity="0.8"/>`;
            puntosHTML += `<text x="${cx}" y="${cy - 12}" text-anchor="middle" font-size="9" fill="#666">(${x[i]}, ${y[i]})</text>`;
        }
        
        // Color del indicador según la fuerza de correlación
        let colorIndicador = '';
        if (absR >= 0.7) colorIndicador = '#4caf50';
        else if (absR >= 0.4) colorIndicador = '#ff9800';
        else colorIndicador = '#f44336';
        
        const html = `
            <div class="result-box">
                <h3>✅ Resultados:</h3>
                <div class="result-item"><strong>Datos X:</strong> ${x.join(', ')}</div>
                <div class="result-item"><strong>Datos Y:</strong> ${y.join(', ')}</div>
                <div class="result-item"><strong>Número de pares (n):</strong> ${n}</div>
                
                <div class="result-highlight">
                    Coeficiente de Correlación (r) = ${r.toFixed(4)}
                </div>
                
                <div class="result-item" style="margin-top: 20px; background: ${r > 0 ? '#e8f5e9' : '#ffebee'};">
                    <strong>📊 Interpretación:</strong><br>
                    ${interpretacion}<br><br>
                    ${r > 0 ? 
                        'Cuando X aumenta, Y tiende a aumentar.' : 
                        'Cuando X aumenta, Y tiende a disminuir.'}
                </div>

                <!-- GRÁFICO DE DISPERSIÓN -->
                <div style="margin-top: 30px; padding: 25px; background: white; border-radius: 12px; border: 2px solid #ddd;">
                    <h3 style="color: #296adf; margin-bottom: 20px; text-align: center;">📊 Diagrama de Dispersión</h3>
                    
                    <svg width="100%" viewBox="0 0 ${width} ${height}" style="background: #f9f9f9; border-radius: 8px;">
                        <!-- Cuadrícula -->
                        <defs>
                            <pattern id="gridCorr" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e0e0e0" stroke-width="1"/>
                            </pattern>
                        </defs>
                        <rect x="${padding}" y="${padding}" width="${graphWidth}" height="${graphHeight}" fill="url(#gridCorr)"/>
                        
                        <!-- Ejes -->
                        <line x1="${padding}" y1="${height - padding}" x2="${width - padding}" y2="${height - padding}" 
                              stroke="#333" stroke-width="2"/>
                        <line x1="${padding}" y1="${padding}" x2="${padding}" y2="${height - padding}" 
                              stroke="#333" stroke-width="2"/>
                        
                        <!-- Etiquetas de ejes -->
                        <text x="${width / 2}" y="${height - 5}" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Variable X</text>
                        <text x="15" y="${height / 2}" text-anchor="middle" font-size="14" font-weight="bold" fill="#333" transform="rotate(-90 15 ${height / 2})">Variable Y</text>
                        
                        <!-- Valores en ejes -->
                        <text x="${padding}" y="${height - padding + 20}" text-anchor="middle" font-size="11" fill="#666">${minX.toFixed(1)}</text>
                        <text x="${width - padding}" y="${height - padding + 20}" text-anchor="middle" font-size="11" fill="#666">${maxX.toFixed(1)}</text>
                        <text x="${padding - 10}" y="${height - padding + 5}" text-anchor="end" font-size="11" fill="#666">${minY.toFixed(1)}</text>
                        <text x="${padding - 10}" y="${padding + 5}" text-anchor="end" font-size="11" fill="#666">${maxY.toFixed(1)}</text>
                        
                        <!-- Puntos de datos -->
                        ${puntosHTML}
                        
                        <!-- Coeficiente r -->
                        <rect x="${width / 2 - 60}" y="15" width="120" height="30" fill="${colorIndicador}" rx="5" opacity="0.9"/>
                        <text x="${width / 2}" y="35" text-anchor="middle" font-size="16" font-weight="bold" fill="white">
                            r = ${r.toFixed(4)}
                        </text>
                    </svg>
                    
                    <!-- Medidor de correlación visual -->
                    <div style="margin-top: 25px;">
                        <h4 style="color: #296adf; text-align: center; margin-bottom: 15px;">Fuerza de Correlación</h4>
                        <div style="position: relative; height: 40px; background: linear-gradient(to right, #f44336 0%, #ff9800 25%, #ffc107 50%, #8bc34a 75%, #4caf50 100%); border-radius: 20px; overflow: hidden;">
                            <!-- Indicador de posición -->
                            <div style="position: absolute; left: ${((absR) * 100)}%; top: 50%; transform: translate(-50%, -50%); width: 20px; height: 20px; background: white; border: 3px solid #333; border-radius: 50%; box-shadow: 0 2px 8px rgba(0,0,0,0.3); z-index: 2;"></div>
                            
                            <!-- Marcadores -->
                            <div style="position: absolute; left: 0%; top: 50%; transform: translate(-50%, -50%); width: 2px; height: 50px; background: #333;"></div>
                            <div style="position: absolute; left: 30%; top: 50%; transform: translate(-50%, -50%); width: 2px; height: 30px; background: rgba(0,0,0,0.3);"></div>
                            <div style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 2px; height: 30px; background: rgba(0,0,0,0.3);"></div>
                            <div style="position: absolute; left: 70%; top: 50%; transform: translate(-50%, -50%); width: 2px; height: 30px; background: rgba(0,0,0,0.3);"></div>
                            <div style="position: absolute; left: 100%; top: 50%; transform: translate(-50%, -50%); width: 2px; height: 50px; background: #333;"></div>
                        </div>
                        
                        <!-- Etiquetas -->
                        <div style="display: flex; justify-content: space-between; margin-top: 10px; font-size: 12px; color: #666;">
                            <span>Nula (0.0)</span>
                            <span>Débil (0.3)</span>
                            <span>Moderada (0.5)</span>
                            <span>Fuerte (0.7)</span>
                            <span>Muy Fuerte (1.0)</span>
                        </div>
                    </div>

                    <!-- Indicador de dirección -->
                    <div style="margin-top: 20px; padding: 15px; background: ${r > 0 ? '#e8f5e9' : '#ffebee'}; border-radius: 8px; border-left: 4px solid ${r > 0 ? '#4caf50' : '#f44336'};">
                        <strong>${r > 0 ? '📈 Correlación Positiva' : '📉 Correlación Negativa'}</strong><br>
                        ${r > 0 ? 
                            'A medida que X aumenta, Y también tiende a aumentar. Las variables se mueven en la misma dirección.' : 
                            'A medida que X aumenta, Y tiende a disminuir. Las variables se mueven en direcciones opuestas.'}
                    </div>
                </div>
                
                <div class="result-item" style="margin-top: 15px;">
                    <strong>Escala de interpretación:</strong><br>
                    |r| = 0.0 - 0.3: Correlación muy débil<br>
                    |r| = 0.3 - 0.5: Correlación débil<br>
                    |r| = 0.5 - 0.7: Correlación moderada<br>
                    |r| = 0.7 - 0.9: Correlación fuerte<br>
                    |r| = 0.9 - 1.0: Correlación muy fuerte
                </div>
            </div>
        `;
        
        document.getElementById('resultadoCorrelacion').innerHTML = html;
        
    } catch (error) {
        document.getElementById('resultadoCorrelacion').innerHTML = `
            <div class="error-box">❌ Error: ${error.message}</div>
        `;
    }
}



// Mostrar / ocultar menú desplegable
function toggleCalculatorSelector(event) {
    event.preventDefault();
    event.stopPropagation();
    const selector = document.getElementById("selector-calculadoras");
    selector.classList.toggle("hidden");
}

// Cerrar menú al hacer clic fuera
document.addEventListener("click", function (event) {
    const selector = document.getElementById("selector-calculadoras");
    const cambiarBtn = document.querySelector('[onclick*="toggleCalculatorSelector"]');

    if (
        selector &&
        !selector.contains(event.target) &&
        event.target !== cambiarBtn &&
        !selector.classList.contains("hidden")
    ) {
        selector.classList.add("hidden");
    }
});

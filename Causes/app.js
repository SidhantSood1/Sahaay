let causes = [];

function addCause() {

    let name = document.getElementById('inp-name').value;
    let category = document.getElementById('inp-category').value;
    let amount = document.getElementById('inp-amount').value;
    let story = document.getElementById('inp-story').value;

    if (name == '' || category == '' || amount == '' || story == '') {
        alert('Please fill all fields');
        return;
    }

    causes.push({ name, category, amount, story });

    let emptyMsg = document.getElementById('empty-msg');

    emptyMsg.style.display = 'none';

    let causeCard = document.getElementById('card-wrapper');
    causeCard.innerHTML += `
                <div class="card">
                    <div class="card-img med-img"></div>
                    <div class="card-info">
                        <span class="category">${category}</span>
                        <h3>${name}</h3>
                        <p>${story}</p>
                        <div class="progress-wrap">
                            <div class="progress-bar">
                                <div class="fill" style="width: 0%;"></div>
                            </div>
                            <div class="progress-labels">
                                <span>₹0 Raised</span>
                                <span>Goal: ₹${amount}</span>
                            </div>
                        </div>
                        <button class="btn-card">Direct Support</button>
                    </div>
                </div>
            `;

    document.getElementById('inp-name').value = '';
    document.getElementById('inp-category').value = '';
    document.getElementById('inp-amount').value = '';
    document.getElementById('inp-story').value = '';
}
/*
 * WEB-SECURE PUSH PROTOCOL CHAT (WSPPCHAT).
 * A Secure Push Protocol Chat System.
 *
 * Copyright (C) 2015  Thotheolh
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

var connection;

function connect() {
	connection = new WebSocket('ws://localhost:8080');

	connection.onopen = function () {
		console.log("WSPP Client Connection Established !");
	};

	connection.onerror = function (e) {
	};

	connection.onmessage = function (e) {
		console.log("RCV: " + e.data);
		displayToScreen(e.data);
	};
}

function attemptConnect() {
	if (typeof connection === 'undefined') {
		connect();
	}
}

function sendText(msg) {
	attemptConnect();
	connection.send(msg);
}

function sendBinary(msg) {
	attemptConnect();
	connection.send(msg);
}

describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();
    serverNameInput.value = 'Frank';
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(2);
    expect(allServers['server' + serverId].serverName).toEqual('Frank');
  });

  it('Should update the server table with empty request', function () {
    updateServerTable();

    expect(Object.keys(allServers).length).toEqual(0);
    expect(serverTbody.innerHTML).toEqual('');
  });


  afterEach(function() {
    // teardown logic
    serverNameInput.value = '';
    allServers = {};
    serverId = 0;
    if (document.querySelector("#server1")) {
      document.querySelector("#server1").remove()
    };
  });
});

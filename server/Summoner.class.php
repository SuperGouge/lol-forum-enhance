<?phpclass Summoner {	public $internalName;	public $name;	public $server;	public $acctId;	public $profileIconId;	public $revisionDate;	public $currentDate;	public $summonerLevel;	public $summonerId;	public $success;		function __construct() {		$this->internalName = '';		$this->name = '';		$this->server = '';		$this->acctId = 0;		$this->profileIconId = 0;		$this->revisionDate = date('Y-m-d H:i:s');		$this->currentDate = date('Y-m-d H:i:s');		$this->summonerLevel = 0;		$this->summonerId = 0;		$this->success = true;	}	function __destruct() {}	public function __sleep() {		return array(			'internalName',			'name',			'server',			'acctId',			'profileIconId',			'revisionDate',			'currentDate',			'summonerLevel',			'summonerId'			);    }    public function __wakeup() {}		public function toJson() {		$output = array(			'internalName' => (string)$this->internalName,			'name' => (string)$this->name,			'server' => (string)$this->server,			'acctId' => (int)$this->acctId,			'profileIconId' => (int)$this->profileIconId,			'revisionDate' => (string)$this->revisionDate,			'currentDate' => (string)$this->currentDate,			'summonerLevel' => (int)$this->summonerLevel,			'summonerId' => (int)$this->summonerId,			'success' => (bool)$this->success		);		return json_encode($output);	}}?>